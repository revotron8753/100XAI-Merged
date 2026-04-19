import './TrustBar.css';
import logo3 from '../assets/logos/3.svg';
import logo4 from '../assets/logos/4.svg';
import logo5 from '../assets/logos/5.svg';
import logo6 from '../assets/logos/6.svg';
import logo7 from '../assets/logos/7.svg';
import logo8 from '../assets/logos/8.svg';
import logo9 from '../assets/logos/9.svg';
import logo10 from '../assets/logos/10.svg';
import logo11 from '../assets/logos/11.svg';
import logo12 from '../assets/logos/12.svg';

const logos = [logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];

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
