import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { agents } from '../data/agents';
import { scrollTo } from '../utils/scroll';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-bg">
        <div className="services-grid-bg"></div>
        <div className="services-glow"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="services-header"
        >
          <div className="section-tag-light">Our Agents</div>
          <h2 className="services-title">
            100X your Efficiency,<br />
            <span className="services-accent">Automated and easy.</span>
          </h2>
          <p className="services-subtitle">
            Leverage AI to build highly personalised automation campaigns at scale
            in seconds, not days.
          </p>
        </motion.div>

        <div className="services-grid">
          {agents.map((agent, i) => (
            <motion.article
              key={agent.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.09 }}
              className="agent-card"
            >
              <div className="agent-top">
                <div className="agent-tag-badge">
                  {i === 0 ? 'Most Popular' : i < 3 ? 'New' : 'Available'}
                </div>
                <div className="agent-num">AGENT {agent.number}</div>
              </div>

              <div className="agent-icon-wrap">
                <agent.icon size={24} strokeWidth={2} />
              </div>

              <h3 className="agent-name">
                <span className="agent-name-accent">{agent.name}</span>
              </h3>
              <p className="agent-role">{agent.role}</p>

              <p className="agent-desc">{agent.desc}</p>

              <ul className="agent-features">
                {agent.features.map((f) => (
                  <li key={f}>
                    <Check size={13} strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="agent-foot">
                <a
                  href="#contact"
                  className="agent-cta"
                  onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                >
                  Deploy <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="services-footer"
        >
          <p>
            Want the full <strong>growth stack?</strong> Start with one agent, scale to the whole team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Build My Stack <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
