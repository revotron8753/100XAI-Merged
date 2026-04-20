import { motion } from 'framer-motion';
import {
  Building2, Briefcase, ShoppingBag, BarChart3,
  Users, Globe, Rocket, Award
} from 'lucide-react';

const solutions = [
  { icon: Building2, label: 'SaaS Startups' },
  { icon: Briefcase, label: 'B2B Agencies' },
  { icon: ShoppingBag, label: 'D2C Brands' },
  { icon: BarChart3, label: 'Fintech' },
  { icon: Users, label: 'Consulting' },
  { icon: Globe, label: 'E-commerce' },
  { icon: Rocket, label: 'Scale-ups' },
  { icon: Award, label: 'Enterprises' },
];

export default function Problem() {
  return (
    <section className="problem section">
      <div className="container problem-inner">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="problem-left"
        >
          <div className="section-tag">Who We Serve</div>
          <h2 className="section-title">
            Unified Solutions<br />
            for <span className="accent">Diverse Needs</span>
          </h2>
          <p className="section-subtitle">
            Our software adapts to every scenario, ensuring efficient
            and inclusive workflows. 100XAI offers no limits, just
            boundless possibilities.
          </p>

          <div className="problem-icons-row">
            {solutions.slice(0, 4).map(({ icon: Icon, label }) => (
              <div key={label} className="problem-icon-chip">
                <Icon size={16} strokeWidth={2} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="problem-right"
        >
          <p className="problem-right-text">
            Our software adapts to every scenario, ensuring efficient and inclusive
            workflows. 100XAI offers no limits, just boundless possibilities for
            every kind of B2B growth team.
          </p>

          <div className="problem-grid">
            {solutions.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="problem-icon-card"
              >
                <div className="pic-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
