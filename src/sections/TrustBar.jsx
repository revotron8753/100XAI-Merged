import './TrustBar.css';

const logos = [
  new URL('../assets/logos/3.svg', import.meta.url).href,
  new URL('../assets/logos/4.svg', import.meta.url).href,
  new URL('../assets/logos/5.svg', import.meta.url).href,
  new URL('../assets/logos/6.svg', import.meta.url).href,
  new URL('../assets/logos/7.svg', import.meta.url).href,
  new URL('../assets/logos/8.svg', import.meta.url).href,
  new URL('../assets/logos/9.svg', import.meta.url).href,
  new URL('../assets/logos/10.svg', import.meta.url).href,
  new URL('../assets/logos/11.svg', import.meta.url).href,
  new URL('../assets/logos/12.svg', import.meta.url).href,
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
