
const logos = [
  '/assets/Logos/1.svg',
  '/assets/Logos/2.svg',
  '/assets/Logos/3.svg',
  '/assets/Logos/4.svg',
  '/assets/Logos/5.svg',
  '/assets/Logos/6.svg',
  '/assets/Logos/7.svg',
  '/assets/Logos/8.svg',
  '/assets/Logos/9.svg',
  '/assets/Logos/10.svg',
];

export default function TrustBar() {
  const doubled = [...logos, ...logos];

  return (
    <section className="trustbar">
      <div className="container">
        <p className="trustbar-label">
          Trusted by growth teams building the next generation of B2B
        </p>
      </div>
      <div className="trustbar-track">
        <div className="trustbar-row">
          {doubled.map((src, i) => (
            <img key={i} src={src} alt="" className="trustbar-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
