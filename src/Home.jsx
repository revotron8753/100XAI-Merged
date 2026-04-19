import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Services from './sections/Services';
import Problem from './sections/Problem';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <>
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
