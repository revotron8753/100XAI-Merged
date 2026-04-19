import { useEffect } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Graduates from './components/Graduates'
import FeaturedIn from './components/FeaturedIn'
import ToolsGrid from './components/ToolsGrid'
import Curriculum from './components/Curriculum'
import Bonuses from './components/Bonuses'
import Instructors from './components/Instructors'
import Previews from './components/Previews'
import WhyUs from './components/WhyUs'
import WorkshopCTA from './components/WorkshopCTA'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './audit-scope.css'

export default function AuditPage() {
  // Mark the <body> while this page is mounted so scoped global rules apply.
  useEffect(() => {
    document.body.classList.add('audit-body')
    // scroll to top when landing on /audit
    window.scrollTo(0, 0)
    return () => {
      document.body.classList.remove('audit-body')
    }
  }, [])

  return (
    <div className="audit-scope">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Graduates />
      <FeaturedIn />
      <ToolsGrid />
      <Curriculum />
      <Bonuses />
      <Instructors />
      <Previews />
      <WhyUs />
      <WorkshopCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
