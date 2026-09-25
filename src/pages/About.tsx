import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { LogoMark } from '../components/Logo'
import { industries, projects } from '../data/projects'
import { SITE } from '../data/site'
import './About.css'

const values = [
  {
    title: 'Intentional design',
    desc: 'Every section earns its place. We design around what your visitors need to see and do — not around trends.',
  },
  {
    title: 'Clean engineering',
    desc: 'Hand-written React and TypeScript, organized into reusable components that stay fast and easy to update.',
  },
  {
    title: 'Mobile-first, always',
    desc: 'We design for the phone first and scale up, because that is where your customers meet you first.',
  },
  {
    title: 'Straight communication',
    desc: 'You talk directly to the person building your site. Clear updates, honest timelines, no jargon.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About' }]}
        eyebrow="About the studio"
        title={
          <>
            We build <span className="accent">websites that work.</span>
          </>
        }
        lead="Vorteo Studios is a founder-led web design and development studio in White Plains, NY, focused on digital experiences that feel intentional from the very first interaction."
      />

      <section className="about-story" aria-labelledby="story-heading">
        <div className="container about-story-grid">
          <div className="about-card reveal">
            <div className="about-card-mark">
              <LogoMark />
            </div>
            <strong>Vorteo Studios</strong>
            <span>Web Design &amp; Development</span>
            <ul className="about-card-facts">
              <li>
                <FiMapPin aria-hidden="true" /> {SITE.city}, {SITE.region} — remote friendly
              </li>
              <li>
                Founded by <b>{SITE.founder}</b>
              </li>
            </ul>
            <div className="about-card-social">
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href={SITE.github} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>

          <div className="about-copy reveal" style={{ '--delay': '0.1s' } as CSSProperties}>
            <h2 id="story-heading" className="display">
              Thoughtful design, <span className="accent">clean engineering.</span>
            </h2>
            <p>
              We pay close attention to the details that shape how people experience a website — from visual design to
              performance and usability. Every project is a chance to solve a different problem for a different
              business, and we treat it that way.
            </p>
            <p>
              That has meant booking flows for a boutique gym, a dual-brand menu for two restaurants under one roof, a
              calm and trustworthy site for a home care company, a full resale store with its own admin dashboard, and
              medical simulators built for respiratory therapy students. Different industries, same standard.
            </p>
            <p>
              We combine thoughtful design with clean engineering to create websites and applications that are both
              polished and practical — and we stay involved through launch so the finished product is ready for real
              visitors.
            </p>

            <dl className="about-stats">
              <div>
                <dd>{projects.length}</dd>
                <dt>Projects shipped</dt>
              </div>
              <div>
                <dd>{industries.length}</dd>
                <dt>Industries served</dt>
              </div>
              <div>
                <dd>0</dd>
                <dt>Templates used</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section-snow" aria-labelledby="values-heading">
        <div className="container">
          <SectionTitle id="values-heading" eyebrow="How we work" heading="What you can count on" accentWord="count on" />
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="value-card reveal" style={{ '--delay': `${i * 0.07}s` } as CSSProperties}>
                <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="industries-heading">
        <div className="container about-industries">
          <SectionTitle
            id="industries-heading"
            eyebrow="Who we work with"
            heading="Built for businesses of every kind"
            accentWord="every kind"
            sub="Small businesses, startups, gyms, restaurants, healthcare providers, retailers, and creators — in Westchester and beyond."
          />
          <ul className="about-industry-list reveal">
            {industries.map(ind => {
              const example = projects.find(p => p.industry === ind)!
              return (
                <li key={ind}>
                  <Link to={`/projects/${example.slug}`}>
                    <span>{ind}</span>
                    <small>{example.title}</small>
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
