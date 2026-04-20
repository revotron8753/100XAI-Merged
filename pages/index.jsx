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

export default function IndexPage() {
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
        <Services />
        <Problem />
        <Process />
        <Team />
        <Testimonials />
        <FAQ />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
