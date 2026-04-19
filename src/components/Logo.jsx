import logoSvg from '../assets/Purple and Green Modern Gadget Repair Business Card.svg';
import './Logo.css';

export default function Logo({ variant = 'dark', size = 'md' }) {
  return (
    <a href="#top" className={`logo logo-${variant} logo-${size}`} aria-label="100XAI home">
      <img src={logoSvg} alt="100XAI" className="logo-img" />
    </a>
  );
}
