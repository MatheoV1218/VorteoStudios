import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import ProjectStack from '../components/ProjectStack'
import { BrowserFrame } from '../components/Frames'
import { featuredProjects, hostname, industries, projects } from '../data/projects'
import { processSteps, services } from '../data/site'
import { thumb } from '../lib/images'
import './Home.css'

const marqueeItems = [
  'React',
  'TypeScript',
  'Vite',
  'Supabase',
  'Vercel',
  'Responsive Design',
  'Structured Data',
  'E-commerce',
  'Booking Flows',
  'Admin Dashboards',
  'Performance',
  'Accessibility',
]

const heroShots = featuredProjects.slice(0, 3)

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              Now booking new projects
            </p>

            <h1 id="hero-heading" className="display hero-title">
              Websites that feel <span className="hero-hl">clean, sharp,</span> and built to grow.
            </h1>

            <p className="hero-sub">
              Vorteo Studios is a web design and development studio in White Plains, NY. We design and build custom
              websites, online stores, and web apps for businesses that want to look sharp online — and turn visitors
              into customers.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a project
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/projects" className="btn btn-ghost">
                See our work
              </Link>
            </div>

            <dl className="hero-stats">
              <div>
                <dt>Projects shipped</dt>
                <dd>{projects.length}</dd>
              </div>
              <div>
                <dt>Industries</dt>
                <dd>{industries.length}</dd>
              </div>
              <div>
                <dt>Custom code</dt>
                <dd>100%</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-hidden="true">
            {heroShots.map((p, i) => (
              <div key={p.slug} className={`hero-shot hero-shot-${i + 1}`}>
                <BrowserFrame url={p.liveUrl ? hostname(p.liveUrl) : undefined}>
                  <img
                    src={thumb(p.image)}
                    alt=""
                    width={800}
                    height={500}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    decoding="async"
                  />
                </BrowserFrame>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <ProjectStack projects={featuredProjects} total={projects.length} />

      {/* ── SERVICES ── */}
      <section className="section section-snow" aria-labelledby="services-heading">
        <div className="container">
          <div className="home-split-head">
            <SectionTitle
              id="services-heading"
              eyebrow="What we do"
              heading="Everything you need to look legit online"
              accentWord="look legit online"
            />
            <Link to="/services" className="text-link home-head-link reveal">
              All services <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className="home-services">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services#${s.slug}`}
                className="home-service reveal"
                style={{ '--delay': `${(i % 3) * 0.08}s` } as CSSProperties}
              >
                <span className="home-service-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="home-service-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section home-about" aria-labelledby="about-heading">
        <div className="container home-about-grid">
          <div className="reveal">
            <p className="eyebrow">Why Vorteo</p>
            <h2 id="about-heading" className="display home-about-title">
              Small studio. <span className="accent">Serious craft.</span>
            </h2>
          </div>
          <div className="home-about-copy reveal" style={{ '--delay': '0.1s' } as CSSProperties}>
            <p>
              Every site we ship is designed from scratch and hand-coded — no templates, no page builders, no bloat. You
              work directly with the person designing and building your site, from the first call to launch day.
            </p>
            <p>
              We have built for gyms, restaurants, home care providers, boutique retailers, startups, and medical
              educators. Different industries, same standard: fast, mobile-first, and easy for customers to use.
            </p>
            <Link to="/about" className="text-link">
              More about the studio <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="container">
          <ul className="home-industries reveal" aria-label="Industries we have built for">
            {industries.map(ind => (
              <li key={ind}>{ind}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section section-snow" aria-labelledby="process-heading">
        <div className="container">
          <SectionTitle
            id="process-heading"
            eyebrow="How it works"
            heading="A clear path from idea to launch"
            accentWord="idea to launch"
            sub="Every project is different, so we keep the steps simple, collaborative, and flexible."
          />
          <ol className="home-process">
            {processSteps.map((step, i) => (
              <li key={step.num} className="home-step reveal" style={{ '--delay': `${i * 0.07}s` } as CSSProperties}>
                <span className="home-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
