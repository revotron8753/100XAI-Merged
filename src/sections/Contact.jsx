import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', need: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook to your backend / Formspree / HubSpot here
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  const perks = [
    { icon: Clock, text: 'Reply within 24 hours' },
    { icon: ShieldCheck, text: 'No spam, no pressure' },
    { icon: CheckCircle2, text: 'Free audit, no strings' },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-shell">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-left"
          >
            <div className="section-tag contact-tag">Get Started</div>
            <h2 className="contact-title">
              Let's build your<br />
              <span className="accent">automation engine.</span>
            </h2>
            <p className="contact-desc">
              Tell us a bit about your business. We'll come back within 24 hours
              with a tailored AI agent roadmap — what to deploy, in what order,
              and what it'll unlock.
            </p>

            <ul className="contact-perks">
              {perks.map((p) => (
                <li key={p.text}>
                  <p.icon size={18} strokeWidth={2.5} />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>

            <div className="contact-meta">
              <a href="mailto:hello@100xai.co" className="meta-item">
                <Mail size={16} />
                <span>hello@100xai.co</span>
              </a>
              <a href="#" className="meta-item">
                <MessageSquare size={16} />
                <span>Book a 15-min intro call</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-right"
          >
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">
                  <CheckCircle2 size={48} strokeWidth={2.2} />
                </div>
                <h3>Request received.</h3>
                <p>
                  Thanks, {form.name.split(' ')[0]}. One of our growth strategists
                  will reach out within 24 hours with your tailored automation roadmap.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={update('name')}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update('email')}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="company">Company / brand</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={update('company')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="need">What do you want to automate?</label>
                  <select
                    id="need"
                    required
                    value={form.need}
                    onChange={update('need')}
                  >
                    <option value="" disabled>Select a focus area</option>
                    <option value="outreach">Cold email + LinkedIn outreach</option>
                    <option value="content">SEO content + backlinks</option>
                    <option value="social">Social media + repurposing</option>
                    <option value="inbox">Inbox + customer replies</option>
                    <option value="full-stack">The full growth stack</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Anything else? <span className="opt">(optional)</span></label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Current team size, biggest bottleneck, what good looks like…"
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Get my free audit <ArrowRight size={18} />
                </button>

                <p className="form-note">
                  <ShieldCheck size={13} />
                  We respect your inbox. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
