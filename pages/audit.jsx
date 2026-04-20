import Head from 'next/head';
import { useEffect } from 'react';
import AnnouncementBar from '../src/audit/components/AnnouncementBar';
import Navbar from '../src/audit/components/Navbar';
import Hero from '../src/audit/components/Hero';
import Graduates from '../src/audit/components/Graduates';
import FeaturedIn from '../src/audit/components/FeaturedIn';
import ToolsGrid from '../src/audit/components/ToolsGrid';
import Bonuses from '../src/audit/components/Bonuses';
import Instructors from '../src/audit/components/Instructors';
import Previews from '../src/audit/components/Previews';
import WhyUs from '../src/audit/components/WhyUs';
import WorkshopCTA from '../src/audit/components/WorkshopCTA';
import FAQ from '../src/audit/components/FAQ';
import FinalCTA from '../src/audit/components/FinalCTA';
import Footer from '../src/audit/components/Footer';

export default function AuditRoute() {
  useEffect(() => {
    document.body.classList.add('audit-body');
    window.scrollTo(0, 0);
    return () => document.body.classList.remove('audit-body');
  }, []);

  return (
    <div className="audit-scope">
      <Head>
        <title>Automation Audit — 100XAI</title>
        <meta name="description" content="Book your free AI automation audit with 100XAI. Discover where your business can save time, cut costs, and grow faster with AI." />
      </Head>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Graduates />
      <FeaturedIn />
      <ToolsGrid />
      <Bonuses />
      <Instructors />
      <Previews />
      <WhyUs />
      <WorkshopCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
