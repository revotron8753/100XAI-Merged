import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowUpRight, MessageSquare, PenLine, Link2, Repeat, Megaphone, Send, Inbox, Mail } from 'lucide-react';
import { agents as HARDCODED_AGENTS } from '../data/agents';
import { scrollTo } from '../utils/scroll';

const ICON_MAP = {
  lynco: MessageSquare,
  bleo: PenLine,
  bako: Link2,
  coro: Repeat,
  posto: Megaphone,
  dimo: Send,
  emeo: Inbox,
  otto: Mail,
};

function OfferCard({ agent, index, travel }) {
  // Even cards arrive from the left, odd from the right.
  const side = index % 2 === 0 ? 'left' : 'right';
  const sign = side === 'left' ? -1 : 1;
  const off = travel * sign;

  // Image sits on the side OPPOSITE the card's arrival edge:
  // arrives from the left  → image on the right (text on the left)
  // arrives from the right → image on the left  (text on the right)
  const imageSide = side === 'left' ? 'right' : 'left';

  // Each card tracks ITS OWN position in the viewport so it slides in the
  // moment it appears and only slides out once it has scrolled near the top —
  // independent of how tall the whole section is.
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 0 → card just entering at the bottom; 1 → card just leaving at the top.
  // Slide in early (while rising through the lower viewport), stay put through
  // the middle, slide out only near the very top.
  const x = useTransform(scrollYProgress, [0, 0.32, 0.82, 1], [off, 0, 0, off]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.92, 1], [0, 1, 1, 0]);

  const Icon = agent.icon;

  return (
    <div className={`offer-rowwrap ${side}`} ref={ref}>
      <motion.article
        className={`offer-card img-${imageSide}`}
        style={{ x, opacity }}
      >
        <div className="offer-card-text">
          <div className="offer-card-num">{agent.number}</div>
          <h3 className="offer-card-title">{agent.title}</h3>
          {agent.tagline && <p className="offer-card-tagline">{agent.tagline}</p>}

          <ul className="offer-card-points">
            {agent.features.map((f) => (
              <li key={f}>
                <Check size={14} strokeWidth={3} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="offer-card-cta"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Get this <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="offer-card-media">
          {agent.image ? (
            <img src={agent.image} alt={agent.title} className="offer-card-img" loading="lazy" />
          ) : (
            <div className="offer-card-media-fallback">
              <Icon size={56} strokeWidth={1.5} />
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
}

export default function Services({ agents: sanityAgents = [] }) {
  const agents = sanityAgents.length > 0
    ? sanityAgents.map(a => ({
        ...a,
        id: a.name?.toLowerCase() || a._id,
        title: a.title || a.role || a.name,
        tagline: a.tagline || a.description,
        features: a.features || [],
        image: a.image || null,
        icon: ICON_MAP[a.name?.toLowerCase()] || MessageSquare,
      }))
    : HARDCODED_AGENTS;

  // How far cards travel off-screen — scaled to the viewport so they fully clear it.
  const [travel, setTravel] = useState(1200);
  useEffect(() => {
    const update = () => setTravel(Math.max(window.innerWidth, 900) * 1.15);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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
          <div className="section-tag-light">What We Do</div>
          <h2 className="services-title">
            100X your Efficiency,<br />
            <span className="services-accent">Automated and easy.</span>
          </h2>
          <p className="services-subtitle">
            Leverage AI to build highly personalised automation campaigns at scale
            in seconds, not days.
          </p>
        </motion.div>

        <div className="offer-list">
          {agents.map((agent, i) => (
            <OfferCard
              key={agent.id}
              agent={agent}
              index={i}
              travel={travel}
            />
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
            Want the full <strong>growth stack?</strong> Start with one offering, scale to the whole team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Build My Stack <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
