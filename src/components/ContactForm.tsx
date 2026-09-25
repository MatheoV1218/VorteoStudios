import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { SITE } from '../data/site'
import './ContactForm.css'

const projectTypes = ['New website', 'Website redesign', 'E-commerce store', 'Web app', 'Landing page', 'Not sure yet']
const budgets = ['Under $2,500', '$2,500 – $5,000', '$5,000 – $10,000', '$10,000+', 'Not sure yet']
const timelines = ['As soon as possible', 'Within 1–2 months', 'In 3+ months', 'Just exploring']

const empty = { name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: '' }

export default function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState(empty)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const data = new FormData(e.currentTarget)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!response.ok) throw new Error('Request failed')
      setSent(true)
      setForm(empty)
    } catch {
      setError(`Something went wrong sending your message. Please email us directly at ${SITE.email}.`)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="contact-form submit-success" role="status">
        <span className="submit-success-icon">
          <FiCheck aria-hidden="true" />
        </span>
        <h2>Message received.</h2>
        <p>Thanks for reaching out — we will read through your project details and get back to you soon.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New Vorteo Studios project inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_replyto" value={form.email} />
      <input type="text" name="_honey" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Alex Rivera" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="alex@company.com" value={form.email} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="company">
            Business name <span className="form-optional">(optional)</span>
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Rivera Fitness" value={form.company} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} required>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="budget">
            Budget <span className="form-optional">(optional)</span>
          </label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
            <option value="">Select a range</option>
            {budgets.map(b => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="timeline">
            Timeline <span className="form-optional">(optional)</span>
          </label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange}>
            <option value="">Select one</option>
            {timelines.map(t => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What does your business do? What do you need built? What is the main goal of the website?"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
        {!sending && <FiArrowRight aria-hidden="true" />}
      </button>

      {error && (
        <p className="submit-error" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
