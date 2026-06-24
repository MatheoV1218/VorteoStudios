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
    }, 1800)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <SectionTitle
            eyebrow="Get In Touch"
            heading="Let's build something remarkable"
            accentWord="remarkable"
          />
          <div className="contact-detail">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">
                <a href="mailto:hello@vorteo.studio">hello@vorteo.studio</a>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Based In</span>
              <span className="contact-item-value">Remote — Worldwide</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Response Time</span>
              <span className="contact-item-value">Within 24 hours</span>
            </div>
          </div>
          <div className="contact-availability">
            <div className="avail-dot" />
            <span>Currently accepting new projects</span>
          </div>
        </div>

        <div className="contact-form">
          {sent ? (
            <div className="submit-success">
              ✓ Message sent! I'll be in touch within 24 hours.
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
                <label htmlFor="budget">Project Budget</label>
                <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                  <option value="" disabled>Select a range</option>
                  <option>$2,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Tell me about your project</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What are you building? What problem does it solve? What makes it special?"
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
        </div>
      </div>
    </section>
  )
}
