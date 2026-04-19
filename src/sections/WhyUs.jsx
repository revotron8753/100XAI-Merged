import { motion } from 'framer-motion';
import './WhyUs.css';

const benefits = [
  { stat: '+600', unit: 'hrs', label: 'Saved per week', desc: 'Automate repetitive tasks and free your best people for high-value work.' },
  { stat: 'Up to', unit: '100%', label: 'On autopilot', desc: 'Run outreach, content, and inbox management without a single manual touch.' },
  { stat: '3x', unit: 'faster', label: 'Pipeline growth', desc: 'AI agents work 24/7, hitting more leads and touchpoints than any human team.' },
  { stat: '7', unit: 'days', label: 'To go live', desc: 'From kickoff call to live agents — faster than hiring a single SDR.' },
];

export default function WhyUs() {
  return (
    <section className="why section" id="why">
      <div className="why-bg">
        <div className="why-grid-bg"></div>
        <div className="why-glow"></div>
      </div>

      <div className="container why-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="why-header"
        >
          <div className="why-eyebrow">100XAI BENEFITS</div>
          <h2 className="why-title">
            Save time,<br /><span className="why-accent">close more deals.</span>
          </h2>
          <p className="why-sub">
            Guarantee 100% of your team updating their time with 100XAI.
            Focus on closing deals, not busywork.
          </p>
        </motion.div>

        <div className="why-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="why-card"
            >
              <div className="why-stat">
                <span className="why-stat-main">{b.stat}</span>
                <span className="why-stat-unit">{b.unit}</span>
              </div>
              <div className="why-card-label">{b.label}</div>
              <p className="why-card-desc">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
