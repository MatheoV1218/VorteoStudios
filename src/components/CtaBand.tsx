import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { SITE } from '../data/site'
import './CtaBand.css'

interface CtaBandProps {
  heading?: string
  sub?: string
}

export default function CtaBand({
  heading = 'Have a project in mind?',
  sub = 'Tell us what you are building and we will get back to you with ideas and next steps.',
}: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-card reveal">
          <div className="cta-glow" aria-hidden="true" />
          <p className="eyebrow">Let&apos;s work together</p>
          <h2 id="cta-heading" className="display">
            {heading}
          </h2>
          <p className="cta-sub">{sub}</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-light">
              Start a project
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={`mailto:${SITE.email}`} className="btn btn-outline-light">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
