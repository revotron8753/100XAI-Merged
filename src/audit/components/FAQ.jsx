import { useState } from 'react'

const faqs = [
  { q: 'What happens in the Automation Audit call?', a: 'We analyze your current operations and identify where AI can save time, reduce costs, and increase output.' },
  { q: 'What will I get after the audit?', a: 'A clear, actionable plan showing what to automate, which tools to use, and how it impacts your business.' },
  { q: 'How does onboarding work?', a: 'Once you decide to move forward, we set up your workflows, tools, and systems tailored to your business.' },
  { q: 'Do I need any technical knowledge?', a: 'No. Everything is set up and explained in simple terms — you just focus on running your business.' },
  { q: 'How long does it take to implement automation?', a: 'Initial systems are set up quickly, and we continuously improve and expand based on your needs.' },
  { q: 'Will this work for my specific business?', a: 'Yes. Every setup is customized based on your business model, team size, and goals.' },
  { q: 'What kind of results can I expect?', a: 'Reduced manual work, faster execution, lower costs, and improved productivity across operations.' },
  { q: 'Will I still need to hire more people?', a: 'In most cases, no. AI helps you scale output without increasing team size.' },
  { q: 'What support do I get after setup?', a: 'Ongoing support, optimization, and upgrades to ensure your systems keep improving.' },
  { q: 'How does the monthly engagement work?', a: 'We continuously monitor, optimize, and add new automations to improve efficiency and growth.' },
  { q: 'Can I scale this across multiple teams or departments?', a: 'Yes. Once set up, automation can be expanded across sales, marketing, operations, and more.' },
  { q: 'What if I\'m already using some tools?', a: 'We integrate AI into your existing tools or replace them with more efficient systems if needed.' },
  { q: 'How do I measure ROI?', a: 'Through time saved, reduced costs, and increased output and revenue over time.' },
  { q: "What's the next step?", a: 'Book an Automation Audit and see exactly how AI can transform your business.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">FAQs by Business Owners</h2>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-arrow">{open === i ? '▲' : '▼'}</span>
              </button>
              {open === i && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
