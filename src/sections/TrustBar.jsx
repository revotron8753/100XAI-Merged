import './TrustBar.css';

export default function TrustBar() {
  const items = [
    'SaaS Startups',
    'B2B Agencies',
    'D2C Brands',
    'Fintech',
    'Consulting',
    'E-commerce',
  ];

  return (
    <section className="trustbar">
      <div className="container">
        <p className="trustbar-label">
          Trusted by growth teams building the next generation of B2B
        </p>
        <div className="trustbar-track">
          <div className="trustbar-row">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="trustbar-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
