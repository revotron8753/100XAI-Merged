import { CALENDLY_URL, TODAY } from '../constants'

export default function Hero() {

  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <h1 className="hero-title">
          Use 25+ AI Tools to <span className="highlight">Save Time, Money,</span><br />
          and <span className="highlight">Supercharge Your Business</span>
        </h1>
        <p className="hero-sub">
          100XAI transforms your business into a smarter, faster machine where boring tasks run on autopilot, content gets created in minutes, and AI helps you do the work of 10 people.
        </p>

        <div className="hero-price-block">
          <div className="price-info">
            <span className="original-price">$299</span>
            <span className="current-price">$29</span>
            <span className="price-badge">90% OFF</span>
          </div>
          <p className="deadline">Deadline: {TODAY}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">Book Automation Audit</a>
          <p className="hero-note">Personalized · Actionable · Instant access</p>
        </div>
      </div>
    </section>
  )
}
