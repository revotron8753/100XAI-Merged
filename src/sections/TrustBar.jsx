import './TrustBar.css';
import logo1 from '../assets/Logos/1.svg';
import logo2 from '../assets/Logos/2.svg';
import logo3 from '../assets/Logos/3.svg';
import logo4 from '../assets/Logos/4.svg';
import logo5 from '../assets/Logos/5.svg';
import logo6 from '../assets/Logos/6.svg';
import logo7 from '../assets/Logos/7.svg';
import logo8 from '../assets/Logos/8.svg';
import logo9 from '../assets/Logos/9.svg';
import logo10 from '../assets/Logos/10.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

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
