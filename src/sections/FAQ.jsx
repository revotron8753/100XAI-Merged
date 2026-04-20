import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can we go live?',
    a: "Most clients are live within 7 days of kickoff. That includes discovery, agent training on your brand voice, CRM integrations, and domain warm-up for email agents. Complex deployments with multiple agents typically take 10–14 days.",
  },
  {
    q: 'What does pricing actually look like?',
    a: "Individual agents start at ₹7,000/mo (Bako — backlinks) and most land between ₹10,000–₹15,000/mo per agent. A full growth stack of 4–6 agents typically runs ₹45,000–₹85,000/mo. Enterprise agents like Posto, Otto, and Emeo are quoted based on volume. Every engagement is a monthly retainer — no setup fees, no long-term lock-in.",
  },
  {
    q: 'Is there a long-term contract?',
    a: "No. Everything is a monthly retainer that you can cancel anytime with 30 days' notice. We earn the relationship every month through results — not through contracts. If an agent isn't delivering, we fix it or you walk.",
  },
  {
    q: 'How do you train the agents on our brand?',
    a: "During kickoff we collect your ICP definition, tone-of-voice samples, product documentation, pricing, FAQs, case studies, and competitive context. We fine-tune each agent on this data, then you review sample outputs before anything goes live. You can keep human-in-the-loop approval on any agent indefinitely.",
  },
  {
    q: 'Will the output actually sound like us?',
    a: "Yes. Each agent is trained on your specific tone and style guides — not a generic template. Clients consistently report the output is indistinguishable from their best human writer or SDR. You can tighten or loosen tone calibration anytime via your Slack channel with us.",
  },
  {
    q: 'What tools do you integrate with?',
    a: "Native integrations with HubSpot, Salesforce, Pipedrive, WordPress, Webflow, Ghost, Notion, Slack, LinkedIn, Gmail, Outlook, Instantly, Smartlead, and most major CMS + CRM platforms. Custom integrations available for anything else via API or Zapier/Make.",
  },
  {
    q: 'Is this compliant and safe?',
    a: "Yes. LinkedIn agents operate within safe engagement thresholds. Email agents use dedicated warmed infrastructure for deliverability. All data is encrypted at rest and in transit. We're GDPR-aware and sign NDAs on request. Human approval mode is available on every outbound agent.",
  },
  {
    q: 'What if I only want one agent?',
    a: "Totally fine. Many clients start with a single agent (usually Otto for outreach or Bleo for SEO), prove ROI, then add more. There's no minimum stack size.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="faq-header"
        >
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">
            Questions, <span className="accent">answered.</span>
          </h2>
          <p className="section-subtitle">
            If you don't see yours here, just ask us directly — we reply within 24 hours.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'is-open' : ''}`}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq-icon"><Plus size={20} strokeWidth={2.5} /></span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="faq-a-wrap"
                  >
                    <p className="faq-a">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
