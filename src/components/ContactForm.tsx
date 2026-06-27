import { useState } from 'react'
import SectionTitle from './SectionTitle'
import './ContactForm.css'

export default function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <SectionTitle
            eyebrow="Get In Touch"
            heading="Have a website idea? Let's make it real"
            accentWord="make it real"
          />
          <div className="contact-detail">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">
                <a href="mailto:mateovillada1@outlook.com">mateovillada1@outlook.com</a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Based In</span>
              <span className="contact-item-value">White Plains, NY — Remote Friendly</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Best Fit</span>
              <span className="contact-item-value">Small businesses, startups, gyms, creators, and service brands</span>
            </div>
          </div>
          <div className="contact-availability">
            <div className="avail-dot" />
            <span>Currently accepting new projects</span>
          </div>
        </div>

        <form className="contact-form">
          {sent ? (
            <div className="submit-success">
              ✓ Message received. I will get back to you soon.
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Rivera"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="budget">Project Type</label>
                <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                  <option value="" disabled>Select one</option>
                  <option>New website</option>
                  <option>Website redesign</option>
                  <option>Landing page</option>
                  <option>React web app</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Tell me about your project</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What do you need built? What does your business do? What is the main goal of the website?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className={`form-submit ${sending ? 'sending' : ''}`} onClick={handleSubmit}>
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
