
const coreOutcomes = [
  'Turn AI into your daily work assistant',
  'Use 25+ AI tools to get more done in less time',
  'Create content and communication instantly',
]

const advancedOutcomes = [
  'Automate your business workflows end-to-end',
  'Create images, videos, and marketing assets in minutes',
  'Build and launch digital assets without tech dependency',
  'Make faster, data-backed business decisions',
  'Scale content and output without extra effort',
  'Stay ahead with the latest AI capabilities',
]

export default function ToolsGrid() {
  return (
    <section className="tools-section">
      <div className="container">
        <h2 className="section-title">What You Get with the 100XAI Automation Program</h2>
        <p className="section-sub">Practical outcomes for real business impact</p>
        <div className="outcomes-grid">
          <div className="outcome-group">
            <h3 className="outcome-group-title">Core Outcomes</h3>
            <ul className="outcome-list">
              {coreOutcomes.map(item => (
                <li key={item} className="outcome-item">
                  <span className="outcome-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="outcome-group advanced">
            <h3 className="outcome-group-title">Advanced Outcomes</h3>
            <ul className="outcome-list">
              {advancedOutcomes.map(item => (
                <li key={item} className="outcome-item">
                  <span className="outcome-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
