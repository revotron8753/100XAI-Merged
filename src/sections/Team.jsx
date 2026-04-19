import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import sarah from '../assets/Faces/Sarah.png';
import mohan from '../assets/Faces/Mohan.jpeg';
import ayush from '../assets/Faces/Ayush.svg';
import santosh from '../assets/Faces/Santosh.jpeg';
import './Team.css';

const team = [
  {
    img: ayush,
    name: 'Ayush Kapoor',
    title: 'Founder',
    bio: 'Business Automations Expert, Founder at 100XAI. Building 1-person businesses to reach $1M+ valuations.',
    tag: 'Founder',
  },
  {
    img: mohan,
    name: 'Mohan Verma',
    title: 'Co-Founder',
    bio: 'Business Leader with 25+ Years of Experience. Ex-VP of Airtel, GE Capital.',
    tag: 'Co-Founder',
  },
  {
    img: sarah,
    name: 'Sarah Rawat',
    title: 'Director of Growth',
    bio: 'Marketing Specialist. Leading Indian Women Entrepreneur in the fields of AI, Sustainability & Edtech.',
    tag: 'Director',
  },
  {
    img: santosh,
    name: 'Santosh Srivastava',
    title: 'Mentor and Advisor',
    bio: 'Ex-Tata WireOn, Jewellery Business Leader, Mentor to startups with combined valuation of $350M+.',
    tag: 'Advisor',
  },
];

export default function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="team-header text-center"
        >
          <div className="section-tag-light">The People</div>
          <h2 className="team-title">
            Meet the team behind<br />
            <span className="team-accent">the magic.</span>
          </h2>
          <p className="team-sub">
            Operators, strategists, and builders who've done it at scale —
            now putting AI to work for your growth.
          </p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="team-card"
            >
              <div className="team-photo-wrap">
                <img src={member.img} alt={member.name} className="team-photo" />
                <span className="team-tag-badge">{member.tag}</span>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title-text">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-socials">
                  <a href="https://www.linkedin.com/company/100xaico/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="team-social-link">
                    <Linkedin size={15} />
                  </a>
                  <a href="#" aria-label="Twitter" className="team-social-link">
                    <Twitter size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
