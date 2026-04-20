import Image from 'next/image';

const ayushImg = '/assets/Faces/Ayush.svg';
const mohanImg = '/assets/Faces/Mohan.jpeg';
const santoshImg = '/assets/Faces/Santosh.jpeg';
const sarahImg = '/assets/Faces/Sarah.png';

const experts = [
  {
    name: 'Mohan Verma',
    role: 'Business Growth',
    bio: 'Business Leader with 25+ Years of Experience. Ex-VP of Airtel, GE Capital.',
    img: mohanImg,
  },
  {
    name: 'Sarah Rawat',
    role: 'Marketing & Content',
    bio: 'Marketing Specialist. Leading Indian Women Entrepreneur in field of AI, Sustainability, Edtech.',
    img: sarahImg,
  },
  {
    name: 'Santosh Srivastava',
    role: 'Franchise & Operations',
    bio: 'Ex-Tata WireOn, Jewellery Business Leader, Mentor to startups with combined valuation of $350M+.',
    img: santoshImg,
  },
  {
    name: 'Ayush Kapoor',
    role: 'Technology & Automation',
    bio: 'Business Automations Expert, Founder at 100XAI. Building 1 Person businesses to reach $1M+ valuations.',
    img: ayushImg,
  },
]

export default function Instructors() {
  return (
    <section className="instructors-section">
      <div className="container">
        <h2 className="section-title">Build with AI experts who are using it to grow real businesses</h2>
        <p className="section-sub">
          Guided by AI experts who are actively using these tools to grow businesses, automate work, and scale faster.
        </p>
        <div className="instructors-grid">
          {experts.map(e => (
            <div key={e.name} className="instructor-card">
              <Image src={e.img} alt={e.name} width={72} height={72} className="inst-avatar" />
              <h3 className="inst-name">{e.name}</h3>
              <p className="inst-role">{e.role}</p>
              <p className="inst-bio">{e.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
