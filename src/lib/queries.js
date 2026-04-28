export const agentsQuery = `*[_type == "agent"] | order(order asc) {
  _id, number, name, role, tagline, description, features, price, priceUnit
}`

export const teamQuery = `*[_type == "teamMember"] | order(order asc) {
  _id, name, title, tag, bio, photo, linkedinUrl
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id, quote, clientName, clientRole, agentsCombined, rating, photo
}`

export const faqQuery = `*[_type == "faqItem"] | order(order asc) {
  _id, question, answer
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  heroBadge, heroTitle, heroSubtitle, heroCtaPrimary, heroCtaSecondary,
  socialProofText, contactEmail, linkedinUrl, tagline
}`

export const blogListQuery = `*[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
  _id, title, slug, excerpt, coverImage, tags, author, publishedAt
}`

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, slug, excerpt, content, coverImage, tags, author, publishedAt
}`

export const blogSlugsQuery = `*[_type == "blogPost" && status == "published"] {
  "slug": slug.current
}`
