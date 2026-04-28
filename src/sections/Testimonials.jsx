import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

const HARDCODED = [
  { quote: "100XAI transformed how we handle outreach entirely. The automation is so well-tuned to our voice that clients can't tell it isn't hand-written. Our pipeline has never looked better.", name: 'Abhinav', role: 'Growth Lead', agent: 'Otto + Lynco', rating: 5, img: '/assets/Faces/Abhinav.jpeg' },
  { quote: "As an ESG consultant, every touchpoint matters. 100XAI helped us scale personalised outreach without compromising quality. The results spoke in the first two weeks.", name: 'Abhishek Sharma', role: 'ESG Consultant and SDG Mentor', agent: 'Lynco + Bleo', rating: 5, img: '/assets/Faces/Abhishek.jpg' },
  { quote: "Running an art trust means limited bandwidth for marketing. 100XAI handled our content and outreach so seamlessly — we saw 3x more enquiries without adding a single hire.", name: 'Kanchan Mehra', role: 'Founder, Vimla Art Forum Trust', agent: 'Bleo + Coro', rating: 5, img: '/assets/Faces/Kanchan.jpeg' },
];

const LOCAL_PHOTOS = {
  'Abhinav': '/assets/Faces/Abhinav.jpeg',
  'Abhishek Sharma': '/assets/Faces/Abhishek.jpg',
  'Kanchan Mehra': '/assets/Faces/Kanchan.jpeg',
};

export default function Testimonials({ testimonials = [] }) {
  const items = testimonials.length > 0
    ? testimonials.map(t => ({
        quote: t.quote,
        name: t.clientName,
        role: t.clientRole,
        agent: t.agentsCombined,
        rating: t.rating || 5,
        img: t.photo ? urlFor(t.photo).width(84).url() : (LOCAL_PHOTOS[t.clientName] || ''),
      }))
    : HARDCODED;
  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="test-header"
        >
          <div className="section-tag">Results</div>
          <h2 className="section-title">
            Growth teams that <span className="accent">compound.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real outcomes from B2B teams running on the 100XAI stack.
          </p>
        </motion.div>

        <div className="test-grid">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="test-card"
            >
              <Quote size={28} className="test-quote-icon" strokeWidth={2} />
              <div className="test-stars">
                {Array(t.rating).fill(0).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="test-text">"{t.quote}"</blockquote>
              <figcaption className="test-foot">
                <Image src={t.img} alt={t.name} width={42} height={42} className="test-avatar" />
                <div className="test-info">
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
                <div className="test-agent">{t.agent}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
