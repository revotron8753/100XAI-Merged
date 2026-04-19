import kanchan from '../../assets/Faces/Kanchan.jpeg'
import abhishek from '../../assets/Faces/Abhishek.jpg'
import './Previews.css'

const testimonials = [
  {
    quote: '100XAI completely changed how we operate — tasks that used to take hours now get done in minutes. The impact on productivity is unreal.',
    name: 'Kanchan Mehra',
    role: 'Founder - Vimla Art Forum Trust',
    img: kanchan,
  },
  {
    quote: "We've reduced dependency on hiring and still scaled faster. 100XAI helped us turn AI into a real business advantage.",
    name: 'Abhishek Sharma',
    role: 'ESG Consultant and SDG Mentor',
    img: abhishek,
  },
]

export default function Previews() {
  return (
    <section className="previews-section">
      <div className="container">
        <h2 className="section-title">What Businesses Are Saying</h2>
        <p className="section-sub">Real results from business owners who made the switch</p>
        <div className="previews-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="preview-card">
              <p className="preview-quote">"{t.quote}"</p>
              <div className="preview-author">
                <img src={t.img} alt={t.name} className="preview-avatar" />
                <div>
                  <p className="preview-name">{t.name}</p>
                  <p className="preview-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
