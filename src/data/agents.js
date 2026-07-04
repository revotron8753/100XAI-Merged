import {
  MessageSquare, PenLine, Link2, Repeat, Send, Mail, Inbox, Megaphone
} from 'lucide-react';

// Each offering is shown as a wide card: a plain-language title + a few points
// on one side, and an image (or icon fallback) on the other. `image` is a path
// under /public — leave it null to use the icon fallback panel until a real
// product image is added.
export const agents = [
  {
    id: 'linkedin-automation',
    number: '01',
    title: 'LinkedIn Automation',
    tagline: 'Turn cold profiles into real conversations.',
    icon: MessageSquare,
    image: '/assets/products/linkedin-automation.jpg',
    features: [
      "Engages your prospects' LinkedIn posts automatically",
      'Trained on your tone and ideal customer profile',
      'Sends connection requests and smart follow-ups',
      'Up to 400 prospect profiles every month',
    ],
  },
  {
    id: 'seo-blogs',
    number: '02',
    title: 'SEO Blog Writing',
    tagline: 'Articles built to rank — written for you.',
    icon: PenLine,
    image: null,
    features: [
      '150 SEO-ready articles every month',
      'Optimised for Google, Perplexity and ChatGPT',
      'Auto-published straight to your website',
      'Full metadata, schema and internal links',
    ],
  },
  {
    id: 'backlinks',
    number: '03',
    title: 'Backlink Building',
    tagline: 'Build authority in the background.',
    icon: Link2,
    image: null,
    features: [
      '1,500+ quality backlinks every month',
      'Only relevant, high-authority websites',
      'Automated outreach to site owners',
      'Monthly ranking-health report',
    ],
  },
  {
    id: 'content-repurposing',
    number: '04',
    title: 'Content Repurposing',
    tagline: 'Post once. Show up everywhere.',
    icon: Repeat,
    image: null,
    features: [
      'One post turned into every platform',
      'Rewritten in the right tone per channel',
      'Hashtags and posting-time optimisation',
      'Zero manual reformatting',
    ],
  },
  {
    id: 'social-posting',
    number: '05',
    title: 'Social Media Posting',
    tagline: 'Never miss a post again.',
    icon: Megaphone,
    image: null,
    features: [
      '4 on-brand posts every day, all channels',
      'Trend-aware, audience-targeted content',
      'Writes, schedules and publishes for you',
      'Monthly analytics and growth report',
    ],
  },
  {
    id: 'linkedin-dms',
    number: '06',
    title: 'LinkedIn DM Outreach',
    tagline: 'The DM they actually reply to.',
    icon: Send,
    image: null,
    features: [
      'Personalised DMs sent at scale',
      "Triggered by your prospect's activity",
      'Multi-step follow-up sequences',
      'Warm leads handed off to your team',
    ],
  },
  {
    id: 'email-replies',
    number: '07',
    title: 'Email Reply Agent',
    tagline: 'Emails that feel human, 24/7.',
    icon: Inbox,
    image: null,
    features: [
      'Replies to incoming emails in under 2 mins',
      'Trained on your product, pricing and FAQs',
      'Escalates hot leads to your sales team',
      'Full CRM sync and conversation logging',
    ],
  },
  {
    id: 'cold-email',
    number: '08',
    title: 'Cold Email Outreach',
    tagline: 'Cold outreach. Warm results.',
    icon: Mail,
    image: null,
    features: [
      'Up to 10,000 personalised emails a day',
      'Dedicated, warmed-up sending infrastructure',
      'Multi-step drip sequences',
      'A/B testing with reply handoff',
    ],
  },
];
