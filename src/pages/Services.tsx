import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiPlus } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { faqs, included, processSteps, services } from '../data/site'
import { projects } from '../data/projects'
import './Services.css'

// A real project that shows each service in action.
const proof: Record<string, string> = {
  'business-websites': 'fusion-house-fitness',
  redesigns: 'fusion-house-fitness',
  'web-apps': 'dianas-accessories',
  'booking-contact': 'healthcare-united',
  seo: 'toxic-wings',
  launch: 'lukumadness',
}

export default function Services() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services' }]}
        eyebrow="Services"
        title={
          <>
            Design, build, launch — <span className="accent">all under one roof.</span>
          </>
        }
        lead="From a sharp one-page site to a full online store, every project is custom designed, hand-coded, and built mobile-first. Here is what we can do for you."
      >
        <div className="services-hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Get a quote
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link to="/projects" className="btn btn-ghost">
            See examples
          </Link>
        </div>
      </PageHero>

      {/* ── Service list ── */}
      <section className="services-list-section" aria-label="Our services">
        <div className="container">
          <ol className="services-list">
            {services.map((s, i) => {
              const example = projects.find(p => p.slug === proof[s.slug])
              return (
                <li key={s.slug} id={s.slug} className="service-row reveal">
                  <span className="service-row-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="service-row-main">
                    <h2>{s.name}</h2>
                    <p>{s.desc}</p>
                    {example && (
                      <Link to={`/projects/${example.slug}`} className="service-row-example">
                        Example: {example.title}
                        <FiArrowRight aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                  <ul className="service-row-items">
                    {s.items.map(item => (
                      <li key={item}>
                        <FiCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ── Included ── */}
      <section className="section section-night" aria-labelledby="included-heading">
        <div className="container">
          <SectionTitle
            id="included-heading"
            eyebrow="Every project"
            heading="What comes standard"
            accentWord="standard"
            sub="No upsells for the basics. Every build ships with the foundations a modern business website needs."
          />
          <div className="included-grid">
            {included.map((item, i) => (
              <div key={item.title} className="included-card reveal" style={{ '--delay': `${(i % 3) * 0.08}s` } as CSSProperties}>
                <span className="included-icon" aria-hidden="true">
                  <FiCheck />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <SectionTitle
            id="process-heading"
            eyebrow="Process"
            heading="How a project comes together"
            accentWord="comes together"
          />
          <ol className="timeline">
            {processSteps.map(step => (
              <li key={step.num} className="timeline-step reveal">
                <span className="timeline-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-snow" aria-labelledby="faq-heading">
        <div className="container faq-grid">
          <SectionTitle
            id="faq-heading"
            eyebrow="FAQ"
            heading="Questions we get a lot"
            accentWord="a lot"
            sub="Don't see yours? Ask us anything — there are no silly questions about your own website."
          />
          <div className="faq-list">
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary>
                  {f.q}
                  <FiPlus aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
