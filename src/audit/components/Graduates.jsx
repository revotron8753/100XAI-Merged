import aayushmaan from '../../assets/Faces/Aayushmaan.jpeg'
import abhinav from '../../assets/Faces/Abhinav.jpeg'
import arun from '../../assets/Faces/Arun.jpeg'
import daurati from '../../assets/Faces/Daurati.jpg'
import kanchan from '../../assets/Faces/Kanchan.jpeg'
import aarush from '../../assets/Faces/aarush.jpeg'
import venu from '../../assets/Faces/venu.jpeg'
import mohan from '../../assets/Faces/Mohan.jpeg'
import sarah from '../../assets/Faces/Sarah.png'
import santosh from '../../assets/Faces/Santosh.jpeg'
import './Graduates.css'

const avatars = [aayushmaan, abhinav, arun, daurati, kanchan, aarush, venu, mohan, sarah, santosh]

export default function Graduates() {
  return (
    <section className="graduates-section">
      <div className="container">
        <p className="graduates-label">Join 100+ Global Business Leaders</p>
        <h2 className="graduates-title">
          Join Leaders who have already adopted AI for their businesses to{' '}
          <em>work faster, grow smarter, and stay ahead.</em>
        </h2>
        <div className="avatar-grid">
          {avatars.map((src, i) => (
            <img key={i} src={src} alt={`leader ${i + 1}`} className="avatar" />
          ))}
        </div>
      </div>
    </section>
  )
}
