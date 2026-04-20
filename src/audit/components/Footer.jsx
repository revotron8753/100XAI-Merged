const logo = '/assets/Purple and Green Modern Gadget Repair Business Card.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src={logo} alt="100XAI" className="footer-logo" />
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Refund Policy</a>
        </div>
        <p className="footer-copy">© 2026 100XAI. All rights reserved.</p>
      </div>
    </footer>
  )
}
