import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap } from 'lucide-react';
import './Process.css';

const steps = [
  { num: '01', title: 'Discover & Strategise', duration: 'Day 1–2',
    body: 'We map your ICP, tone of voice, and growth goals. Then identify the highest-leverage agents for your stack.' },
  { num: '02', title: 'Train & Deploy', duration: 'Day 3–7',
    body: 'Your agents are trained on your brand voice, product data, and competitive context. Infrastructure handled. You approve the tone.' },
  { num: '03', title: 'Monitor & Optimise', duration: 'Day 8+',
    body: 'Weekly performance reports, A/B testing, and continuous tuning. Direct Slack access. We iterate until the numbers compound.' },
];

const planFeatures = [
  'Up to 5 AI Agents active',
  'Custom brand voice training',
  'CRM + email integrations',
  'Weekly performance reports',
  'Dedicated Slack channel',
  'Human approval mode',
];

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container process-inner">

        {/* Left: Steps */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="process-left"
        >
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">
            From kickoff to live agents<br />
            in <span className="accent">7 days.</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '48px' }}>
            No 6-month rollouts. No bloated onboarding. We move fast because
            your growth can't wait.
          </p>

          <div className="process-steps">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="process-step"
              >
                <div className="step-num-badge">{step.num}</div>
                <div className="step-body-wrap">
                  <div className="step-meta">
                    <span className="step-duration">{step.duration}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <p className="step-body">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Plan card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="process-right"
        >
          <div className="plan-card">
            <div className="plan-card-header">
              <span className="plan-badge"><Zap size={12} /> AI Growth Stack</span>
              <div className="plan-price">
                <span className="plan-amount">$499</span>
                <span className="plan-unit">/month</span>
              </div>
              <p className="plan-desc">
                Everything you need to run a fully-autonomous B2B growth engine.
              </p>
            </div>

            <ul className="plan-features">
              {planFeatures.map((f) => (
                <li key={f}>
                  <span className="plan-check"><Check size={13} strokeWidth={3} /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary plan-cta">
              Get Started Free <ArrowRight size={17} />
            </a>

            <p className="plan-note">
              No lock-in · Cancel anytime · 7-day deployment
            </p>

            <div className="plan-accounts">
              <div className="plan-accounts-label">Typical stack includes</div>
              <div className="plan-account-chips">
                {['Otto', 'Lynco', 'Bleo', 'Bako', 'Coro'].map((a) => (
                  <span key={a} className="plan-chip">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
