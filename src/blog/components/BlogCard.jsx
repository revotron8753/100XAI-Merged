import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogCard({ post }) {
  const coverSrc = post.coverImage ? urlFor(post.coverImage).width(600).height(340).url() : null;

  return (
    <Link href={`/blog/${post.slug.current}`} className="blog-card">
      <div className="blog-card__img-wrap">
        {coverSrc ? (
          <Image src={coverSrc} alt={post.title} fill className="blog-card__img" />
        ) : (
          <div className="blog-card__img-placeholder" />
        )}
      </div>
      <div className="blog-card__body">
        {post.tags?.length > 0 && (
          <div className="blog-card__tags">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="blog-card__tag">{tag}</span>
            ))}
          </div>
        )}
        <h3 className="blog-card__title">{post.title}</h3>
        {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        <div className="blog-card__meta">
          {post.author && <span className="blog-card__author">{post.author}</span>}
          <span className="blog-card__date">{formatDate(post.publishedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
