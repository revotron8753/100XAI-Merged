
const modules = [
  { title: 'Understanding AI & Prompt Engineering', desc: 'Master the art of prompting for perfect outputs' },
  { title: 'Automate Workflows with AI for Beginners', desc: 'Use AI to eliminate repetitive work' },
  { title: 'Image Design and Video Creation', desc: 'Create stunning visuals with AI tools' },
  { title: 'Tips for Data Analysis and Decision Making', desc: 'Turn raw data into actionable insights' },
  { title: 'ChatGPT 3+ & 4o for Businesses', desc: 'Advanced ChatGPT techniques for business use' },
  { title: 'Build Digital Products with AI', desc: 'Launch AI-powered products without coding' },
  { title: 'Content Creation Strategies', desc: 'Scale content output 10x with AI' },
  { title: 'Emerging AI Trends & Future Tools', desc: 'Stay ahead of the AI curve' },
]

export default function Curriculum() {
  return (
    <section className="curriculum-section">
      <div className="container">
        <h2 className="section-title">Here's What You'll Learn in the 2-Day AI Mastermind</h2>
        <p className="section-sub">A hands-on, practical bootcamp — no fluff, all action</p>
        <div className="modules-grid">
          {modules.map((m, i) => (
            <div key={i} className="module-card">
              <span className="module-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="module-title">{m.title}</h3>
                <p className="module-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
