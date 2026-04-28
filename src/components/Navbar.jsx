import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { scrollTo } from '../utils/scroll';

const logoSvg = '/assets/Purple and Green Modern Gadget Repair Business Card.svg';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [leaving, setLeaving]     = useState(false);
  const [expanded, setExpanded]   = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 40 && !scrolled) {
        setLeaving(false);
        setScrolled(true);
        setExpanded(false);
      } else if (y <= 40 && scrolled) {
        setLeaving(true);
        setExpanded(false);
        setTimeout(() => {
          setScrolled(false);
          setLeaving(false);
        }, 350);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  useEffect(() => {
    if (!expanded) return;
    const onOutside = (e) => {
      if (!e.target.closest('.navbar')) setExpanded(false);
    };
    document.addEventListener('pointerdown', onOutside);
    return () => document.removeEventListener('pointerdown', onOutside);
  }, [expanded]);

  const mobileCollapsed = isMobile && scrolled && !leaving;

  return (
    <nav className={[
      'navbar',
      scrolled  ? 'navbar--glass'    : '',
      leaving   ? 'navbar--leaving'   : '',
      mobileCollapsed && !expanded ? 'navbar--mobile'   : '',
      mobileCollapsed && expanded  ? 'navbar--expanded' : '',
    ].filter(Boolean).join(' ')}>

      {/* ── Full bar (top of page) ── */}
      {!scrolled && !leaving && (
        <div className="container navbar-inner">
          <Logo variant="light" size="md" />
          <nav className="navbar-links">
            <Link href="/">Home</Link>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Agents</a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>How it works</a>
            <a href="#team" onClick={(e) => { e.preventDefault(); scrollTo('team'); }}>Team</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQ</a>
            <Link href="/blog">Blog</Link>
          </nav>
          <a href="#contact" className="btn btn-primary navbar-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Book Free Audit
          </a>
        </div>
      )}

      {/* ── Glass pill (scrolled) ── */}
      {(scrolled || leaving) && (
        <div className="pill-inner">
          <button
            className="logo-btn"
            onClick={() => mobileCollapsed && setExpanded(p => !p)}
            aria-label="Toggle menu"
          >
            <img
              src={logoSvg}
              alt="100XAI"
              className={`nav-logo ${mobileCollapsed ? 'nav-logo--small' : ''}`}
            />
          </button>
          <a
            href="#contact"
            className={`btn btn-primary navbar-cta ${mobileCollapsed && !expanded ? 'navbar-cta--hidden' : ''}`}
            onClick={(e) => { e.preventDefault(); setExpanded(false); scrollTo('contact'); }}
          >
            Book Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}
