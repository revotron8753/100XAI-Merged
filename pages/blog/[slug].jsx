import Head from 'next/head';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/sections/Footer';
import BlogPost from '../../src/blog/components/BlogPost';
import { client } from '../../src/lib/sanity';
import { blogPostQuery, blogSlugsQuery } from '../../src/lib/queries';
export default function BlogPostPage({ post }) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} — 100XAI Blog</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Head>
      <Navbar />
      <BlogPost post={post} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  try {
    const slugs = await client.fetch(blogSlugsQuery);
    const paths = slugs.map(({ slug }) => ({ params: { slug } }));
    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const post = await client.fetch(blogPostQuery, { slug: params.slug });
    if (!post) return { notFound: true };
    return { props: { post }, revalidate: 60 };
  } catch {
    return { notFound: true };
  }
}
