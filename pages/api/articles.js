// Automated blog ingestion endpoint for 100XAI.
//
// POST /api/articles  → creates a *published* blogPost document in Sanity.
// Built for automated pipelines (n8n, cron, scripts, LLM agents).
//
// Auth:   Authorization: Bearer <BLOG_INGEST_SECRET>
// Env:    BLOG_INGEST_SECRET, SANITY_API_WRITE_TOKEN  (set in Vercel)
//
// Docs:   docs/blog-ingestion.md

import { createClient } from '@sanity/client';

// Allow larger request bodies so base64 cover images (`coverImageBase64`) fit —
// Next.js caps API bodies at 1 MB by default. NOTE: on Vercel, serverless
// functions have a hard ~4.5 MB request-body limit that this cannot raise, so
// in practice keep source images under ~3 MB (base64 inflates size ~33%).
export const config = {
  api: {
    bodyParser: { sizeLimit: '10mb' },
  },
};

// A dedicated client using the *write* token (separate from the read-only
// SANITY_API_TOKEN used by the public pages).
const writeClient = createClient({
  projectId: 'j0t044zo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function key() {
  return Math.random().toString(36).slice(2, 12);
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);
}

// Turn a single line of text into Portable Text spans, supporting inline
// **bold** and [links](https://...). Everything else stays plain text.
function inlineSpans(text) {
  const spans = [];
  const markDefs = [];
  // Tokenise on **bold** and [label](url) — process links first.
  const tokenRe = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let m;
  const push = (str, marks = []) => {
    if (!str) return;
    spans.push({ _type: 'span', _key: key(), text: str, marks });
  };
  while ((m = tokenRe.exec(text)) !== null) {
    push(text.slice(last, m.index));
    if (m[1]) {
      push(m[2], ['strong']);
    } else if (m[3]) {
      const linkKey = key();
      markDefs.push({ _type: 'link', _key: linkKey, href: m[5] });
      push(m[4], [linkKey]);
    }
    last = tokenRe.lastIndex;
  }
  push(text.slice(last));
  if (spans.length === 0) push('');
  return { spans, markDefs };
}

function block(style, text, listItem) {
  const { spans, markDefs } = inlineSpans(text);
  const b = { _type: 'block', _key: key(), style, markDefs, children: spans };
  if (listItem) {
    b.listItem = listItem;
    b.level = 1;
  }
  return b;
}

// Minimal Markdown → Portable Text. Handles headings (##, ###, ####),
// bullet lists (-/*), numbered lists (1.), blockquotes (>) and paragraphs,
// with inline **bold** and [links](url). For richer content send `content`
// (ready-made Portable Text) directly.
function markdownToPortableText(md) {
  const lines = String(md).replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let para = [];

  const flushPara = () => {
    if (para.length) {
      blocks.push(block('normal', para.join(' ').trim()));
      para = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      continue;
    }
    let m;
    if ((m = /^(#{2,4})\s+(.*)$/.exec(line))) {
      flushPara();
      blocks.push(block(`h${m[1].length}`, m[2].trim()));
    } else if ((m = /^>\s?(.*)$/.exec(line))) {
      flushPara();
      blocks.push(block('blockquote', m[1].trim()));
    } else if ((m = /^[-*]\s+(.*)$/.exec(line))) {
      flushPara();
      blocks.push(block('normal', m[1].trim(), 'bullet'));
    } else if ((m = /^\d+\.\s+(.*)$/.exec(line))) {
      flushPara();
      blocks.push(block('normal', m[1].trim(), 'number'));
    } else {
      para.push(line.trim());
    }
  }
  flushPara();
  return blocks.length ? blocks : [block('normal', '')];
}

// Validate user-supplied Portable Text and ensure every array item / span
// has a stable _key (Sanity requires it).
function normalisePortableText(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.map((node) => {
    const n = { ...node, _key: node._key || key() };
    if (Array.isArray(n.children)) {
      n.children = n.children.map((c) => ({ ...c, _key: c._key || key() }));
    }
    if (Array.isArray(n.markDefs)) {
      n.markDefs = n.markDefs.map((d) => ({ ...d, _key: d._key || key() }));
    }
    return n;
  });
}

function coverRef(assetId) {
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: assetId },
  };
}

// Fetch a public image URL and upload its bytes to Sanity as a cover image.
async function uploadCover(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`cover fetch failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const filename = url.split('/').pop()?.split('?')[0] || 'cover.jpg';
  const asset = await writeClient.assets.upload('image', buf, { filename });
  return coverRef(asset._id);
}

// Decode a base64 image (raw base64 OR a `data:image/...;base64,...` URI) and
// upload its bytes to Sanity directly — no public hosting step needed.
async function uploadCoverFromBase64(input) {
  let data = String(input).trim();
  let ext = 'jpg';
  const m = /^data:image\/([a-zA-Z0-9.+-]+);base64,(.*)$/s.exec(data);
  if (m) {
    ext = m[1].toLowerCase() === 'jpeg' ? 'jpg' : m[1].toLowerCase();
    data = m[2];
  }
  // Some encoders wrap base64 in newlines/whitespace — strip it before decoding.
  data = data.replace(/\s/g, '');
  const buf = Buffer.from(data, 'base64');
  if (!buf.length) throw new Error('coverImageBase64 decoded to empty data');
  const asset = await writeClient.assets.upload('image', buf, { filename: `cover.${ext}` });
  return coverRef(asset._id);
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  // Config check
  if (!process.env.BLOG_INGEST_SECRET || !process.env.SANITY_API_WRITE_TOKEN) {
    return res.status(500).json({
      ok: false,
      error: 'Server not configured (missing BLOG_INGEST_SECRET or SANITY_API_WRITE_TOKEN).',
    });
  }

  // Auth
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (token !== process.env.BLOG_INGEST_SECRET) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : req.body || {};

  const {
    title,
    slug,
    excerpt,
    author,
    tags,
    publishedAt,
    markdown,
    content,
    coverImageUrl,
    coverImageBase64,
    status,
    overwrite,
  } = body;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ ok: false, error: 'Missing required field: title' });
  }

  const finalSlug = slugify(slug || title);
  if (!finalSlug) {
    return res.status(400).json({ ok: false, error: 'Could not derive a valid slug' });
  }

  // Build the content (Portable Text)
  let contentBlocks;
  if (content !== undefined) {
    contentBlocks = normalisePortableText(content);
    if (!contentBlocks) {
      return res.status(400).json({ ok: false, error: '`content` must be a Portable Text array' });
    }
  } else if (markdown !== undefined) {
    contentBlocks = markdownToPortableText(markdown);
  } else {
    contentBlocks = [];
  }

  try {
    // Slug collision check
    const existing = await writeClient.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]{ _id }`,
      { slug: finalSlug }
    );
    if (existing && !overwrite) {
      return res.status(409).json({
        ok: false,
        error: `An article with slug "${finalSlug}" already exists. Send overwrite: true to replace it.`,
      });
    }

    // Cover image (optional). Base64 bytes take precedence over a URL.
    let coverImage;
    if (coverImageBase64) {
      coverImage = await uploadCoverFromBase64(coverImageBase64);
    } else if (coverImageUrl) {
      coverImage = await uploadCover(coverImageUrl);
    }

    const doc = {
      _type: 'blogPost',
      title,
      slug: { _type: 'slug', current: finalSlug },
      status: status === 'draft' ? 'draft' : 'published',
      publishedAt: publishedAt || new Date().toISOString(),
      ...(excerpt ? { excerpt } : {}),
      ...(author ? { author } : {}),
      ...(Array.isArray(tags) && tags.length ? { tags } : {}),
      ...(coverImage ? { coverImage } : {}),
      content: contentBlocks,
    };

    let result;
    let replaced = false;
    if (existing && overwrite) {
      result = await writeClient
        .patch(existing._id)
        .set(doc)
        .commit();
      replaced = true;
    } else {
      result = await writeClient.create(doc);
    }

    return res.status(201).json({
      ok: true,
      id: result._id,
      slug: finalSlug,
      url: `/blog/${finalSlug}`,
      replaced,
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: `Sanity write failed: ${err.message}` });
  }
}

function safeJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
