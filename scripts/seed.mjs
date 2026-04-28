import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'j0t044zo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_EDITOR_TOKEN,
})

const agents = [
  { number: '01', name: 'Lynco', role: 'LinkedIn Comment Automation', tagline: 'Always in the right conversation.', description: 'Lynco monitors your ICP\'s LinkedIn posts and drops hyper-relevant, brand-safe comments at scale — building visibility where your buyers already spend time.', features: ['Monitors target accounts 24/7', 'Generates contextual, on-brand comments', 'Avoids spam triggers & LinkedIn limits', 'Weekly engagement report'], price: '₹10,000', priceUnit: '/ seat / mo', order: 1 },
  { number: '02', name: 'Bleo', role: 'SEO & AEO Blog Engine', tagline: 'Words that rank themselves.', description: 'Bleo produces 150 SEO-ready articles every month — keyword-researched, internally linked, and formatted to rank on Google and surface in AI search engines.', features: ['150 articles/month, fully formatted', 'Keyword + AEO optimised', 'Auto internal linking & schema markup', 'CMS-ready export (WordPress, Webflow, Ghost)'], price: '₹10,000', priceUnit: '/ mo', order: 2 },
  { number: '03', name: 'Bako', role: 'Backlink Acquisition', tagline: 'Authority, on autopilot.', description: 'Bako identifies link opportunities, crafts personalised outreach, and secures 1,500+ quality backlinks per month — building domain authority while you sleep.', features: ['1,500+ backlinks/month', 'White-hat, niche-relevant sources', 'Personalised outreach at scale', 'Live backlink dashboard'], price: '₹7,000', priceUnit: '/ mo', order: 3 },
  { number: '04', name: 'Coro', role: 'Content Repurposing Engine', tagline: 'One piece of content, everywhere.', description: 'Coro takes your long-form content and transforms it into LinkedIn posts, Twitter threads, email newsletters, and short-form clips — maximising reach from every asset.', features: ['Repurposes blogs, podcasts & videos', 'Outputs for 5+ platforms', 'Maintains brand voice per channel', 'Batch processing available'], price: '₹10,000', priceUnit: '/ mo', order: 4 },
  { number: '05', name: 'Posto', role: 'Social Media Publisher', tagline: 'Your brand, always on.', description: 'Posto generates and schedules 4 platform-native posts per day across LinkedIn, Twitter, and Instagram — keeping your brand visible without manual effort.', features: ['4 posts/day across platforms', 'Platform-native formatting', 'Hashtag & timing optimisation', 'Content calendar view'], price: 'Custom', priceUnit: 'quote', order: 5 },
  { number: '06', name: 'Dimo', role: 'LinkedIn DM Outreach', tagline: 'Conversations that convert.', description: 'Dimo sends personalised LinkedIn DMs to your ICP at scale — with follow-up sequences, objection handling, and CRM sync built in.', features: ['Hyper-personalised DM sequences', 'Multi-step follow-up flows', 'Objection handling scripts', 'CRM auto-sync'], price: '₹10,000', priceUnit: '/ seat / mo', order: 6 },
  { number: '07', name: 'Emeo', role: 'Email Conversation Agent', tagline: 'Replies that feel human.', description: 'Emeo monitors your inbox and handles inbound replies — qualifying leads, answering FAQs, and routing hot prospects to your calendar automatically.', features: ['Inbound reply handling', 'Lead qualification & scoring', 'FAQ auto-response', 'Calendar booking integration'], price: 'Custom', priceUnit: 'quote', order: 7 },
  { number: '08', name: 'Otto', role: 'Cold Email Outreach', tagline: 'Scale without the spam.', description: 'Otto sends up to 10,000 personalised cold emails per day with domain warm-up, deliverability monitoring, and A/B testing baked in.', features: ['10,000 emails/day capacity', 'Domain warm-up included', 'A/B testing & analytics', 'Instantly & Smartlead native'], price: 'Custom', priceUnit: 'quote', order: 8 },
]

const teamMembers = [
  { name: 'Ayush Kapoor', title: 'Founder', tag: 'Founder', bio: 'Business Automations Expert, Founder at 100XAI. Building 1-person businesses to reach $1M+ valuations.', linkedinUrl: 'https://www.linkedin.com/company/100xaico/', order: 1 },
  { name: 'Mohan Verma', title: 'Co-Founder', tag: 'Co-Founder', bio: 'Business Leader with 25+ Years of Experience. Ex-VP of Airtel, GE Capital.', linkedinUrl: 'https://www.linkedin.com/company/100xaico/', order: 2 },
  { name: 'Sarah Rawat', title: 'Director of Growth', tag: 'Director', bio: 'Marketing Specialist. Leading Indian Women Entrepreneur in the fields of AI, Sustainability & Edtech.', linkedinUrl: 'https://www.linkedin.com/company/100xaico/', order: 3 },
  { name: 'Santosh Srivastava', title: 'Mentor and Advisor', tag: 'Advisor', bio: 'Ex-Tata WireOn, Jewellery Business Leader, Mentor to startups with combined valuation of $350M+.', linkedinUrl: 'https://www.linkedin.com/company/100xaico/', order: 4 },
]

const testimonials = [
  { quote: "100XAI transformed how we handle outreach entirely. The automation is so well-tuned to our voice that clients can't tell it isn't hand-written. Our pipeline has never looked better.", clientName: 'Abhinav', clientRole: 'Growth Lead', agentsCombined: 'Otto + Lynco', rating: 5, order: 1 },
  { quote: "As an ESG consultant, every touchpoint matters. 100XAI helped us scale personalised outreach without compromising quality. The results spoke in the first two weeks.", clientName: 'Abhishek Sharma', clientRole: 'ESG Consultant and SDG Mentor', agentsCombined: 'Lynco + Bleo', rating: 5, order: 2 },
  { quote: "Running an art trust means limited bandwidth for marketing. 100XAI handled our content and outreach so seamlessly — we saw 3x more enquiries without adding a single hire.", clientName: 'Kanchan Mehra', clientRole: 'Founder, Vimla Art Forum Trust', agentsCombined: 'Bleo + Coro', rating: 5, order: 3 },
]

const faqItems = [
  { question: 'How fast can we go live?', answer: 'Most clients are live within 7 days of kickoff. That includes discovery, agent training on your brand voice, CRM integrations, and domain warm-up for email agents. Complex deployments with multiple agents typically take 10–14 days.', order: 1 },
  { question: 'What does pricing actually look like?', answer: 'Individual agents start at ₹7,000/mo (Bako — backlinks) and most land between ₹10,000–₹15,000/mo per agent. A full growth stack of 4–6 agents typically runs ₹45,000–₹85,000/mo. Enterprise agents like Posto, Otto, and Emeo are quoted based on volume. Every engagement is a monthly retainer — no setup fees, no long-term lock-in.', order: 2 },
  { question: 'Is there a long-term contract?', answer: "No. Everything is a monthly retainer that you can cancel anytime with 30 days' notice. We earn the relationship every month through results — not through contracts. If an agent isn't delivering, we fix it or you walk.", order: 3 },
  { question: 'How do you train the agents on our brand?', answer: 'During kickoff we collect your ICP definition, tone-of-voice samples, product documentation, pricing, FAQs, case studies, and competitive context. We fine-tune each agent on this data, then you review sample outputs before anything goes live. You can keep human-in-the-loop approval on any agent indefinitely.', order: 4 },
  { question: 'Will the output actually sound like us?', answer: 'Yes. Each agent is trained on your specific tone and style guides — not a generic template. Clients consistently report the output is indistinguishable from their best human writer or SDR. You can tighten or loosen tone calibration anytime via your Slack channel with us.', order: 5 },
  { question: 'What tools do you integrate with?', answer: 'Native integrations with HubSpot, Salesforce, Pipedrive, WordPress, Webflow, Ghost, Notion, Slack, LinkedIn, Gmail, Outlook, Instantly, Smartlead, and most major CMS + CRM platforms. Custom integrations available for anything else via API or Zapier/Make.', order: 6 },
  { question: 'Is this compliant and safe?', answer: "Yes. LinkedIn agents operate within safe engagement thresholds. Email agents use dedicated warmed infrastructure for deliverability. All data is encrypted at rest and in transit. We're GDPR-aware and sign NDAs on request. Human approval mode is available on every outbound agent.", order: 7 },
  { question: 'What if I only want one agent?', answer: "Totally fine. Many clients start with a single agent (usually Otto for outreach or Bleo for SEO), prove ROI, then add more. There's no minimum stack size.", order: 8 },
]

async function seed() {
  console.log('Seeding agents...')
  for (const agent of agents) {
    await client.create({ _type: 'agent', ...agent })
  }

  console.log('Seeding team members...')
  for (const member of teamMembers) {
    await client.create({ _type: 'teamMember', ...member })
  }

  console.log('Seeding testimonials...')
  for (const t of testimonials) {
    await client.create({ _type: 'testimonial', ...t })
  }

  console.log('Seeding FAQ items...')
  for (const faq of faqItems) {
    await client.create({ _type: 'faqItem', ...faq })
  }

  console.log('Done! All content seeded to Sanity.')
}

seed().catch(console.error)
