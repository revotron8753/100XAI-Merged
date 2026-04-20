
const points = [
  { text: 'Trusted by growing businesses' },
  { text: 'Built for real-world results, not theory' },
  { text: 'Focused on revenue, efficiency, and scale' },
]

export default function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="container">
        <h2 className="section-title">Why 100XAI?</h2>
        <p className="section-sub">
          100XAI is where businesses turn AI into real growth and efficiency. Build with experts who are actively building, scaling, and automating businesses using AI — doing exactly what you want to achieve.
        </p>
        <div className="why-points">
          {points.map(p => (
            <div key={p.text} className="why-point">
              <span className="why-dash">—</span>
              <span className="why-text">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
