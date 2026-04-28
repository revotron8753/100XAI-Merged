import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/sections/Footer';
import BlogCard from '../../src/blog/components/BlogCard';
import { client } from '../../src/lib/sanity';
import { blogListQuery } from '../../src/lib/queries';
export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog — 100XAI | AI Automation Insights</title>
        <meta name="description" content="Insights, strategies, and guides on AI automation for B2B growth teams." />
      </Head>

      <Navbar />

      <section className="blog-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-hero__tag">Insights</div>
            <h1 className="blog-hero__title">
              AI growth, <span>decoded.</span>
            </h1>
            <p className="blog-hero__subtitle">
              Strategies, playbooks, and real-world results from the frontlines of B2B AI automation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-listing">
        <div className="container">
          {posts.length === 0 ? (
            <p className="blog-empty">No posts published yet. Check back soon.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post, i) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const posts = await client.fetch(blogListQuery);
    return { props: { posts }, revalidate: 60 };
  } catch {
    return { props: { posts: [] }, revalidate: 60 };
  }
}
