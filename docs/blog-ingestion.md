# Automated blog ingestion

Programmatically create **published** blog posts in Sanity via a single HTTP
endpoint. Built for an automated pipeline (n8n, a cron job, a script, an LLM
agent, etc.).

- **Endpoint:** `POST https://www.100xai.co/api/articles`
- **Source:** [`pages/api/articles.js`](../pages/api/articles.js)
- Posts appear on `/blog` within ~60s (the listing uses ISR with 60s
  revalidation); each post page renders on demand the first time it's hit. No
  rebuild/redeploy needed per post.

---

## 1. One-time setup (required)

The endpoint needs two environment variables in **Vercel → Settings →
Environment Variables** (Production + Preview), then **redeploy**:

| Variable | What it is | How to get it |
|---|---|---|
| `SANITY_API_WRITE_TOKEN` | Sanity token with **Editor/write** permission (creates documents + uploads images). **Secret.** | sanity.io/manage → project `j0t044zo` → **API → Tokens → Add API token** → permission **Editor** → copy the `sk...` value |
| `BLOG_INGEST_SECRET` | A random string that protects the endpoint. **Secret.** | Generate any long random string, e.g. `openssl rand -hex 32` |

> Without these the endpoint returns `500 "Server not configured…"`.
> The write token is **different** from the existing read-only
> `SANITY_API_TOKEN` used by the public pages — keep both.

---

## 2. Request format

```
POST /api/articles
Authorization: Bearer <BLOG_INGEST_SECRET>
Content-Type: application/json
```

### Body fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | ✅ | Post title. |
| `slug` | string | — | URL path. Auto-derived from `title` if omitted. Always normalised to lowercase-hyphen form (`my-first-post`). |
| `excerpt` | string | — | Short summary shown on the `/blog` listing. |
| `author` | string | — | Shown in the post byline. |
| `tags` | string[] | — | Tags/labels shown on the card and post header. |
| `publishedAt` | string (ISO date) | — | Defaults to now. |
| `markdown` | string | — | Body as Markdown → converted to Portable Text (`content`). |
| `content` | Portable Text[] | — | Body as ready-made Portable Text. **Takes precedence** over `markdown`. |
| `coverImageUrl` | string (URL) | — | Public image URL; fetched and uploaded to Sanity as the cover. |
| `coverImageBase64` | string (base64 / data-URI) | — | Cover image sent inline as base64 (raw, or a `data:image/png;base64,...` URI). Uploaded to Sanity directly — no public URL needed. **Takes precedence** over `coverImageUrl`. On Vercel keep source images **under ~3 MB** (serverless body cap is ~4.5 MB and base64 adds ~33%). |
| `status` | `"published"` \| `"draft"` | — | Defaults to **`published`**. Drafts are created but hidden from `/blog`. |
| `overwrite` | boolean | — | If the slug already exists, replace it instead of returning 409. |

> **Note:** the `blogPost` schema has no SEO subfields. The post `<title>` and
> meta description are derived automatically from `title` and `excerpt` on the
> post page, so there's nothing extra to send.

### Markdown support

The `markdown` field handles headings (`##`, `###`, `####`), bullet lists
(`-`/`*`), numbered lists (`1.`), blockquotes (`>`) and paragraphs, plus inline
**bold** (`**…**`) and [links](`[label](url)`). For inline images or anything
richer, send `content` as Portable Text directly instead.

---

## 3. Responses

| Status | Meaning |
|---|---|
| `201` | Created. Body: `{ ok, id, slug, url, replaced }` |
| `400` | Missing `title` or invalid `content` array. |
| `401` | Missing/wrong `Authorization` bearer token. |
| `405` | Method other than `POST`. |
| `409` | A post with that slug already exists (send `overwrite: true` to replace). |
| `500` | Server not configured (missing env var) or Sanity write failed. |

---

## 4. Examples

### Minimal (Markdown body)

```bash
curl -X POST https://www.100xai.co/api/articles \
  -H "Authorization: Bearer $BLOG_INGEST_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "How AI Agents Cut B2B Sales Cycles in Half",
    "excerpt": "A teardown of where automation actually moves the needle.",
    "author": "100XAI",
    "tags": ["AI Automation", "Sales"],
    "coverImageUrl": "https://example.com/cover.jpg",
    "markdown": "## The problem\n\nManual prospecting is slow...\n\n- Lead research\n- Outreach\n\n## The fix\n\n**Agents** handle the busywork. See [our agents](https://100x.ai)."
  }'
```

### Inline image (base64, no hosting needed)

Use this when your automation generates the image locally and has no public URL
to point at. Send raw base64 or a full data-URI:

```json
{
  "title": "How AI Agents Cut B2B Sales Cycles in Half",
  "excerpt": "A teardown of where automation actually moves the needle.",
  "coverImageBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "markdown": "## The problem\n\n..."
}
```

> The server decodes the bytes and uploads them straight to Sanity, exactly like
> a URL cover — you get the same permanent hosted copy + CDN. On Vercel keep the
> source image under ~3 MB (the serverless request-body cap is ~4.5 MB and base64
> adds ~33%). If both `coverImageBase64` and `coverImageUrl` are sent, base64 wins.

### Idempotent re-run / update

Re-posting the same slug returns `409`. To update an existing post instead:

```json
{ "title": "...", "slug": "how-ai-agents-cut-b2b-sales-cycles-in-half", "overwrite": true, "markdown": "..." }
```

### Create a draft (hidden from /blog)

```json
{ "title": "Work in progress", "status": "draft", "markdown": "## Coming soon" }
```

---

## 5. Guidelines for the automation

1. **Always send a clean `slug`** (or rely on auto-derivation) — lowercase,
   hyphenated, unique.
2. **Unique slugs per post.** Treat the slug as the primary key; use
   `overwrite: true` only when intentionally editing an existing post.
3. **Cover images:** pass a stable public `coverImageUrl`. It's uploaded to
   Sanity once per post (re-running with `overwrite` re-uploads).
4. **Retries are safe** when you pin the `slug` + use `overwrite: true`.
5. **Keep the secret server-side.** Never expose `BLOG_INGEST_SECRET` or the
   write token in a browser/client.
6. **Rate:** Sanity write APIs are rate-limited; for bulk backfills, add a small
   delay between requests (e.g. 1–2/sec).
7. **Status:** posts default to `published` (live immediately). Send
   `status: "draft"` to stage one for review in Sanity Studio first.

---

## Alternative: write directly to Sanity (no custom endpoint)

If you'd rather skip this endpoint, the automation can POST mutations straight to
the Sanity HTTP API
(`https://j0t044zo.api.sanity.io/v2024-01-01/data/mutate/production`) with the
write token. This endpoint exists to add auth, validation, slug-safety, image
upload and Markdown→Portable Text conversion in one call — and to map fields to
the `blogPost` schema (`content`, `status`, `coverImage`, `tags`) correctly.
