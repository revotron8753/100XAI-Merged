import './FinalCTA.css'

export default function FinalCTA() {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <section className="final-cta-section">
      <div className="container">
        <h2 className="final-title">Still Not Convinced?</h2>
        <p className="final-sub">
          Countries and industries are rapidly adopting AI to improve efficiency, reduce costs, and scale faster. Governments are backing AI-led growth, and businesses worldwide are already transforming how they operate.
        </p>
        <p className="final-sub final-sub2">
          The real question is — while everything is moving forward, why should your business stay stuck doing things manually? AI is no longer optional. It's the shift that separates growing businesses from those getting left behind.
        </p>
        <a href="https://calendly.com/hello-100xai/audit?month=2026-04" target="_blank" rel="noopener noreferrer" className="btn-primary final-btn">Join Now — $29 (90% OFF)</a>
        <p className="final-deadline">Deadline: {today}</p>
      </div>
    </section>
  )
}
