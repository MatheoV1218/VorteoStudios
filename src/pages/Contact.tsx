import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiClock, FiMail, FiMapPin } from 'react-icons/fi'
import { Breadcrumbs } from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { SITE } from '../data/site'
import './Contact.css'

const steps = [
  'We read your message and look into your business.',
  'We set up a quick call to talk through goals and scope.',
  'You get a clear proposal with a quote and timeline.',
]

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-page-bg" aria-hidden="true" />
      <div className="container">
        <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

        <div className="contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">Get in touch</p>
            <h1 className="display">
              Have a project in mind? <span className="accent">Let&apos;s build it.</span>
            </h1>
            <p className="contact-lead">
              Tell us a little about your business and what you need. The more detail, the better — but a few sentences is
              plenty to get started.
            </p>

            <ul className="contact-details">
              <li>
                <FiMail aria-hidden="true" />
                <div>
                  <span>Email</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <div>
                  <span>Based in</span>
                  {SITE.city}, {SITE.region} — remote friendly
                </div>
              </li>
              <li>
                <FiClock aria-hidden="true" />
                <div>
                  <span>Availability</span>
                  Currently accepting new projects
                </div>
              </li>
            </ul>

            <div className="contact-next">
              <h2>What happens next</h2>
              <ol>
                {steps.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>

            <Link to="/projects" className="text-link">
              Browse our work first <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
