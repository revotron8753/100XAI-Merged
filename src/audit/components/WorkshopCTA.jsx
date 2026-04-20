import { CALENDLY_URL, TODAY } from '../constants'

export default function WorkshopCTA() {

  return (
    <section id="audit" className="workshop-section">
      <div className="container">
        <div className="workshop-card">
          <p className="workshop-tag">Book an Automation Audit Today</p>
          <h2 className="workshop-title">See exactly where your business can save time, cut costs, and grow faster with AI.</h2>

          <div className="workshop-price">
            <span className="w-original">$299</span>
            <span className="w-current">$29</span>
            <span className="w-badge">Save 90%</span>
          </div>
          <p className="workshop-deadline">Deadline: {TODAY}</p>

          <h3 className="workshop-perks-title">What You Get:</h3>
          <ul className="workshop-perks">
            <li>A complete breakdown of tasks you can automate immediately</li>
            <li>Clear ways to reduce costs (tools, APIs, hiring)</li>
            <li>Personalized strategy to increase efficiency and output</li>
            <li>Action plan to scale your business using AI without complexity</li>
          </ul>

          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary workshop-btn">Book Automation Audit</a>
          <p className="workshop-note">Secure payment · Personalized to your business · Start today</p>
        </div>
      </div>
    </section>
  )
}
