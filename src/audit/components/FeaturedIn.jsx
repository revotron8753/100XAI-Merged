import './FeaturedIn.css'

export default function FeaturedIn() {
  return (
    <section className="featured-section">
      <div className="container">
        <p className="featured-label">Trusted by Businesses Worldwide</p>
        <div className="ratings-row">
          <div className="rating-card">
            <span className="rating-platform">Trustpilot</span>
            <span className="rating-stars">★★★★★</span>
          </div>
          <div className="rating-divider" />
          <div className="rating-card">
            <span className="rating-platform">Google Reviews</span>
            <span className="rating-stars">★★★★★</span>
          </div>
        </div>
      </div>
    </section>
  )
}
