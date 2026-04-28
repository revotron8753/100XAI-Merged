import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/sections/Hero';
import TrustBar from '../src/sections/TrustBar';
import Services from '../src/sections/Services';
import Problem from '../src/sections/Problem';
import Process from '../src/sections/Process';
import Team from '../src/sections/Team';
import Testimonials from '../src/sections/Testimonials';
import FAQ from '../src/sections/FAQ';
import WhyUs from '../src/sections/WhyUs';
import Contact from '../src/sections/Contact';
import Footer from '../src/sections/Footer';
import { client } from '../src/lib/sanity';
import { agentsQuery, teamQuery, testimonialsQuery, faqQuery } from '../src/lib/queries';

export default function IndexPage({ agents, teamMembers, testimonials, faqItems }) {
  return (
    <>
      <Head>
        <title>100XAI — AI Automation Agency | 100x Your Growth</title>
        <meta name="description" content="100XAI — The AI automation agency that builds intelligent agents to 100x your growth. We don't suggest. We execute." />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services agents={agents} />
        <Problem />
        <Process />
        <Team teamMembers={teamMembers} />
        <Testimonials testimonials={testimonials} />
        <FAQ faqItems={faqItems} />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const [agents, teamMembers, testimonials, faqItems] = await Promise.all([
      client.fetch(agentsQuery),
      client.fetch(teamQuery),
      client.fetch(testimonialsQuery),
      client.fetch(faqQuery),
    ]);
    return {
      props: { agents, teamMembers, testimonials, faqItems },
      revalidate: 60,
    };
  } catch {
    return {
      props: { agents: [], teamMembers: [], testimonials: [], faqItems: [] },
      revalidate: 60,
    };
  }
}
