import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Purple and Green Modern Gadget Repair Business Card.svg'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > 40 && !scrolled) {
        setLeaving(false)
        setScrolled(true)
        setExpanded(false)
      } else if (y <= 40 && scrolled) {
        setLeaving(true)
        setExpanded(false)
        setTimeout(() => {
          setScrolled(false)
          setLeaving(false)
        }, 350)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrolled])

  useEffect(() => {
    if (!expanded) return
    const onOutside = (e) => {
      if (!e.target.closest('.navbar')) setExpanded(false)
    }
    document.addEventListener('pointerdown', onOutside)
    return () => document.removeEventListener('pointerdown', onOutside)
  }, [expanded])

  const mobileCollapsed = isMobile && scrolled && !leaving

  return (
    <nav className={[
      'navbar',
      scrolled  ? 'navbar--glass'   : '',
      leaving   ? 'navbar--leaving'  : '',
      mobileCollapsed && !expanded ? 'navbar--mobile' : '',
      mobileCollapsed && expanded  ? 'navbar--expanded' : '',
    ].join(' ')}>

      {!scrolled && !leaving && (
        <div className="container nav-inner">
          <Link to="/" aria-label="100XAI home">
            <img src={logo} alt="100XAI" className="nav-logo" />
          </Link>
          <a href="https://calendly.com/hello-100xai/audit?month=2026-04" target="_blank" rel="noopener noreferrer" className="btn-primary nav-btn">Book Automation Audit</a>
        </div>
      )}

      {(scrolled || leaving) && (
        <div className="pill-inner">
          <button
            className="logo-btn"
            onClick={() => mobileCollapsed && setExpanded(p => !p)}
            aria-label="Toggle menu"
          >
            <img
              src={logo}
              alt="100XAI"
              className={`nav-logo ${mobileCollapsed ? 'nav-logo--small' : ''}`}
            />
          </button>
          <a
            href="https://calendly.com/hello-100xai/audit?month=2026-04"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary nav-btn ${mobileCollapsed && !expanded ? 'nav-btn--hidden' : ''}`}
            onClick={() => setExpanded(false)}
          >
            Book Automation Audit
          </a>
        </div>
      )}
    </nav>
  )
}
