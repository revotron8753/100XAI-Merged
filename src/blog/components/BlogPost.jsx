import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/sanity';
import { ArrowLeft } from 'lucide-react';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = urlFor(value).width(800).url();
      return (
        <div className="blog-post__content-img">
          <Image src={src} alt={value.alt || ''} width={800} height={450} style={{ width: '100%', height: 'auto' }} />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  },
};

export default function BlogPost({ post }) {
  const coverSrc = post.coverImage ? urlFor(post.coverImage).width(1200).height(600).url() : null;

  return (
    <article className="blog-post">
      <div className="container blog-post__container">
        <Link href="/blog" className="blog-post__back">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="blog-post__header">
          {post.tags?.length > 0 && (
            <div className="blog-post__tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-card__tag">{tag}</span>
              ))}
            </div>
          )}
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            {post.author && <span className="blog-post__author">By {post.author}</span>}
            <span className="blog-post__date">{formatDate(post.publishedAt)}</span>
          </div>
        </header>

        {coverSrc && (
          <div className="blog-post__cover">
            <Image src={coverSrc} alt={post.title} fill className="blog-post__cover-img" priority />
          </div>
        )}

        {post.excerpt && <p className="blog-post__excerpt">{post.excerpt}</p>}

        <div className="blog-post__body">
          {post.content && <PortableText value={post.content} components={portableTextComponents} />}
        </div>
      </div>
    </article>
  );
}
