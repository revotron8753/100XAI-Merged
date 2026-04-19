import './Bonuses.css'

const benefits = [
  { title: 'Access powerful AI tools — free', desc: 'Get access to powerful AI tools without paying for expensive subscriptions.' },
  { title: 'Zero API costs', desc: 'Skip API costs completely — we\'ve already covered it for you.' },
  { title: 'Expert-guided implementation', desc: 'Get direct guidance from experts to implement what actually works.' },
  { title: 'Scale without extra hiring', desc: 'Scale your work without hiring or increasing team costs.' },
]

export default function Bonuses() {
  return (
    <section className="bonuses-section">
      <div className="container">
        <h2 className="section-title">Premium Benefits Worth <span className="highlight-green">$1999 — FREE</span></h2>
        <p className="section-sub">Everything you need to run AI in your business, without the usual costs</p>
        <div className="bonuses-grid">
          {benefits.map((b, i) => (
            <div key={b.title} className="bonus-card">
              <span className="bonus-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="bonus-title">{b.title}</h3>
                <p className="bonus-desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bonuses-cta">
          <a href="https://calendly.com/hello-100xai/audit?month=2026-04" target="_blank" rel="noopener noreferrer" className="btn-primary">Claim All Benefits — $29</a>
        </div>
      </div>
    </section>
  )
}
