import { useState } from 'react'
import './App.css'
import Chatbot from './Chatbot'

const dogs = [
  { name: "Buddy", age: "2 years", breed: "Golden Retriever", img: "/images/dog1.jpg", gender: "Male", description: "Super friendly and loves to play fetch!" },
  { name: "Luna", age: "1 year", breed: "Husky Mix", img: "/images/dog2.jpg", gender: "Female", description: "Energetic and loves long walks in the park." },
  { name: "Charlie", age: "3 years", breed: "Labrador", img: "/images/dog3.jpg", gender: "Male", description: "Calm, gentle, and great with kids." },
  { name: "Daisy", age: "6 months", breed: "Beagle", img: "/images/dog4.jpg", gender: "Female", description: "Playful puppy who loves belly rubs!" },
  { name: "Rocky", age: "4 years", breed: "German Shepherd", img: "/images/dog5.jpg", gender: "Male", description: "Loyal and protective. A true best friend." },
  { name: "Bella", age: "2 years", breed: "Poodle Mix", img: "/images/dog6.jpg", gender: "Female", description: "Smart, cuddly, and hypoallergenic!" }
]

const stories = [
  { name: "Max", text: "Max was found abandoned on the highway. After 3 months at our shelter, he found his forever home with the Johnson family. Now he sleeps on a king-size bed every night!", emoji: "🐕" },
  { name: "Coco", text: "Coco was surrendered because her owners moved abroad. She was sad for weeks but our volunteers showered her with love. She got adopted by a retired couple and is now their whole world!", emoji: "🐩" },
  { name: "Thor", text: "Thor came to us with a broken leg. After surgery and months of rehab, he's running faster than ever! His new family takes him hiking every weekend.", emoji: "🦮" }
]

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', type: 'adoption' })
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', message: '', type: 'adoption' })
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">🐾 Tanaya's Dog Shelter</a>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#dogs" onClick={() => setMenuOpen(false)}>Our Dogs</a></li>
            <li><a href="#stories" onClick={() => setMenuOpen(false)}>Success Stories</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-dog.jpg)`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Every Dog Deserves a <span className="highlight">Loving Home</span></h1>
          <p>At Tanaya's Dog Shelter, we rescue, rehabilitate, and rehome dogs in need. Open your heart and your home to a furry friend today.</p>
          <div className="hero-buttons">
            <a href="#dogs" className="btn btn-primary">Meet Our Dogs</a>
            <a href="#contact" className="btn btn-secondary">Get Involved</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><h3>500+</h3><p>Dogs Rescued</p></div>
            <div className="stat"><h3>350+</h3><p>Happy Adoptions</p></div>
            <div className="stat"><h3>100+</h3><p>Volunteers</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <img src="/images/about-dog.jpg" alt="dogs at shelter" />
            </div>
            <div className="about-text">
              <h2>About Our Shelter</h2>
              <p>Founded in 2020, Tanaya's Dog Shelter started with a simple mission — to give every abandoned and stray dog a second chance at life.</p>
              <p>We're a <strong>no-kill shelter</strong> run by passionate animal lovers. Every dog that comes through our doors gets proper medical care, nutritious food, and most importantly — love.</p>
              <p>We believe that the right dog can change your life, and the right home can change theirs.</p>
              <div className="about-features">
                <div className="feature">🏥 <span>Full Vet Care</span></div>
                <div className="feature">🍖 <span>Quality Food</span></div>
                <div className="feature">🛁 <span>Grooming</span></div>
                <div className="feature">🎾 <span>Daily Exercise</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dogs" className="dogs-section">
        <div className="container">
          <h2>Meet Our Dogs</h2>
          <p className="section-subtitle">These adorable souls are waiting for their forever homes. Could you be their person?</p>
          <div className="dogs-grid">
            {dogs.map((dog, i) => (
              <div className="dog-card" key={i}>
                <div className="dog-img-wrapper">
                  <img src={dog.img} alt={dog.name} />
                  <span className="dog-gender">{dog.gender === 'Male' ? '♂️' : '♀️'}</span>
                </div>
                <div className="dog-info">
                  <h3>{dog.name}</h3>
                  <p className="dog-meta">{dog.breed} · {dog.age}</p>
                  <p className="dog-desc">{dog.description}</p>
                  <a href="#contact" className="btn btn-small">Adopt {dog.name}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="stories-section">
        <div className="container">
          <h2>Success Stories</h2>
          <p className="section-subtitle">Happy tails from our shelter to forever homes</p>
          <div className="stories-grid">
            {stories.map((story, i) => (
              <div className="story-card" key={i}>
                <div className="story-emoji">{story.emoji}</div>
                <h3>{story.name}'s Story</h3>
                <p>{story.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Want to adopt, volunteer, or donate? Fill out the form below!</p>
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && <div className="success-msg">Thanks! We'll get back to you soon! 🐾</div>}
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+1 234 567 890" />
              </div>
              <div className="form-group">
                <label>I'm interested in</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                  <option value="adoption">Adopting a Dog</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donate">Donating</option>
                  <option value="other">Something Else</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us about yourself..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send Message 🐶</button>
            </form>
            <div className="contact-info">
              <div className="info-card">
                <h3>📍 Visit Us</h3>
                <p>123 Paw Street, Dogtown, CA 90210</p>
              </div>
              <div className="info-card">
                <h3>🕐 Hours</h3>
                <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 3:00 PM</p>
              </div>
              <div className="info-card">
                <h3>📞 Call Us</h3>
                <p>+1 (555) DOG-LOVE</p>
              </div>
              <div className="info-card">
                <h3>📧 Email</h3>
                <p>hello@tanayadogshelter.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>🐾 Tanaya's Dog Shelter</h3>
              <p>Giving every dog a second chance since 2020.</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#dogs">Our Dogs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Made with ❤️ for dogs everywhere</p>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  )
}

export default App
