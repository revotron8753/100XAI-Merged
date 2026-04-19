import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, TrendingUp, Mail, Linkedin, FileText } from 'lucide-react';
import face1 from '../assets/Faces/Aayushmaan.jpeg';
import face2 from '../assets/Faces/Abhinav.jpeg';
import face3 from '../assets/Faces/Abhishek.jpg';
import face4 from '../assets/Faces/Arun.jpeg';
import face5 from '../assets/Faces/Kanchan.jpeg';
import './Hero.css';

const faces = [face1, face2, face3, face4, face5];

const trustLogos = ['Amazon', 'Salesforce', 'HubSpot', 'Gartner', 'Airbnb'];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>

      <div className="container hero-inner">
        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-left"
        >
          <div className="hero-badge">
            <Zap size={13} /> AI Automation Agency · Built for B2B
          </div>

          <h1 className="hero-title">
            #1 Fully-Autonomous<br />
            <span className="hero-accent">AI Growth Stack</span><br />
            for B2B Teams
          </h1>

          <p className="hero-sub">
            Deploy custom-trained AI agents that prospect, publish, outreach,
            and close — <strong>24/7, without scaling headcount.</strong> Live in 7 days.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Get Started Free <ArrowRight size={17} />
            </a>
            <a href="#services" className="btn btn-outline-dark">
              Meet the Agents
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="hero-avatars">
              {faces.map((src, i) => (
                <img key={i} src={src} alt="client" className="hero-avatar" style={{ zIndex: faces.length - i }} />
              ))}
            </div>
            <div className="hero-rating-text">
              <div className="hero-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span>100+ B2B teams scaling with AI</span>
            </div>
          </div>

          <div className="hero-trust">
            <span className="hero-trust-label">Trusted by teams at</span>
            <div className="hero-trust-logos">
              {trustLogos.map((logo) => (
                <span key={logo} className="hero-trust-logo">{logo}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Agent Dashboard Mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-right"
        >
          <div className="hero-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="mockup-title">100XAI Agent Dashboard</span>
            </div>

            <div className="mockup-stats">
              <div className="mockup-stat">
                <Mail size={16} className="mstat-icon" />
                <div>
                  <div className="mstat-num">8,240</div>
                  <div className="mstat-label">Emails sent today</div>
                </div>
                <span className="mstat-badge">↑ 4.2% reply</span>
              </div>
              <div className="mockup-stat">
                <Linkedin size={16} className="mstat-icon" />
                <div>
                  <div className="mstat-num">312</div>
                  <div className="mstat-label">LinkedIn connections</div>
                </div>
                <span className="mstat-badge">↑ 18 meetings</span>
              </div>
              <div className="mockup-stat">
                <FileText size={16} className="mstat-icon" />
                <div>
                  <div className="mstat-num">147</div>
                  <div className="mstat-label">Articles published</div>
                </div>
                <span className="mstat-badge">↑ 2x traffic</span>
              </div>
              <div className="mockup-stat">
                <TrendingUp size={16} className="mstat-icon" />
                <div>
                  <div className="mstat-num">₹4.2L</div>
                  <div className="mstat-label">Pipeline generated</div>
                </div>
                <span className="mstat-badge up">This week</span>
              </div>
            </div>

            <div className="mockup-agents">
              <div className="mockup-agents-label">Active Agents</div>
              {[
                { name: 'Otto · Email Outreach', status: 'Running', pct: 87 },
                { name: 'Lynco · LinkedIn', status: 'Running', pct: 72 },
                { name: 'Bleo · SEO Engine', status: 'Running', pct: 94 },
              ].map((a) => (
                <div key={a.name} className="mockup-agent-row">
                  <div className="mag-info">
                    <span className="mag-dot"></span>
                    <span className="mag-name">{a.name}</span>
                  </div>
                  <div className="mag-bar-wrap">
                    <div className="mag-bar" style={{ width: `${a.pct}%` }}></div>
                  </div>
                  <span className="mag-status">{a.status}</span>
                </div>
              ))}
            </div>

            <div className="mockup-footer-strip">
              <Zap size={13} /> All agents running · Last sync 2 min ago
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="hero-float hero-float-1"
          >
            <TrendingUp size={14} />
            <span>+300% pipeline</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            className="hero-float hero-float-2"
          >
            <span>Live in 7 days ⚡</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
