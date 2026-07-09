import { useState } from 'react'
import SectionTitle from './SectionTitle'
import './ContactForm.css'

export default function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const data = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formsubmit.co/ajax/vorteostudios@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', projectType: '', message: '' })
      } else {
        setError("Something went wrong sending your message. Please email me directly at vorteostudios@gmail.com.")
      }
    } catch {
      setError("Something went wrong sending your message. Please email me directly at vorteostudios@gmail.com.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <SectionTitle
            eyebrow="Get In Touch"
            heading="Have a project in mind? Let's build it."
            accentWord="Let's build it."
          />

          <div className="contact-detail">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">
                <a href="mailto:vorteostudios@gmail.com">
                  vorteostudios@gmail.com
                </a>
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-item-label">Based In</span>
              <span className="contact-item-value">
                White Plains, NY — Remote Friendly
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-item-label">Best Fit</span>
              <span className="contact-item-value">
                Small businesses, startups, gyms, creators, and service brands
              </span>
            </div>
          </div>

          <div className="contact-availability">
            <div className="avail-dot" />
            <span>Currently accepting new projects</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="submit-success">
              ✓ Message received — I'll get back to you soon.
            </div>
          ) : (
            <>
              <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_replyto" value={form.email} />

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
                    required
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
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  required
                >
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
                  required
                />
              </div>

              <button type="submit" className={`form-submit ${sending ? 'sending' : ''}`}>
                {sending ? 'Sending...' : 'Send Message'}

                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 8h12M9 4l5 4-5 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              {error && <div className="submit-error">{error}</div>}
            </>
          )}
        </form>
      </div>
    </section>
  )
}