import { Linkedin, Mail } from 'lucide-react';
import Logo from '../components/Logo';

export default function Footer() {
  const cols = [
    {
      title: 'Agents',
      links: [
        { label: 'Lynco · LinkedIn Comments', href: '#services' },
        { label: 'Bleo · SEO Blog Engine', href: '#services' },
        { label: 'Bako · Backlinks', href: '#services' },
        { label: 'Coro · Content Repurpose', href: '#services' },
        { label: 'Otto · Email Outreach', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'How it works', href: '#process' },
        { label: 'Why 100XAI', href: '#why' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'hello@100xai.co', href: 'mailto:hello@100xai.co' },
        { label: 'Book a call', href: '#contact' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/100xaico/' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="container footer-inner">
        {/* CTA banner — reserved for later use
        <div className="footer-cta">
          <div>
            <h3>Ready to <span className="accent">100x</span> your growth?</h3>
            <p>Deploy your first agent in 7 days. No lock-in. No surprises.</p>
          </div>
          <Link to="/audit" className="btn btn-primary">
            Book Free Audit <ArrowUpRight size={18} />
          </Link>
        </div>
        */}

        <div className="footer-main">
          <div className="footer-brand">
            <Logo variant="light" size="lg" />
            <p className="footer-tagline">
              The AI automation agency for B2B teams that want to scale growth
              without scaling headcount.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/100xaico/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:hello@100xai.co" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer-cols">
            {cols.map((col) => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 100XAI. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
