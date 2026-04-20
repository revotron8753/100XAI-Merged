const avatars = [
  '/assets/Faces/Aayushmaan.jpeg',
  '/assets/Faces/Abhinav.jpeg',
  '/assets/Faces/Arun.jpeg',
  '/assets/Faces/Daurati.jpg',
  '/assets/Faces/Kanchan.jpeg',
  '/assets/Faces/aarush.jpeg',
  '/assets/Faces/venu.jpeg',
  '/assets/Faces/Mohan.jpeg',
  '/assets/Faces/Sarah.png',
  '/assets/Faces/Santosh.jpeg',
]

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
