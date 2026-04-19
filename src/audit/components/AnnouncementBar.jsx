import logo from '../../assets/Purple and Green Modern Gadget Repair Business Card.svg'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className="announcement-bar">
      <img src={logo} alt="100XAI" className="ann-logo" />
      <span className="tag">90% OFF</span>
      <span className="msg">Limited Offer — Only $29 today · Deadline: {today}</span>
      <a href="https://calendly.com/hello-100xai/audit?month=2026-04" target="_blank" rel="noopener noreferrer" className="ann-cta">Book Now</a>
    </div>
  )
}
