import { useEffect, useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import ProjectSpiral from '../components/ProjectSpiral'
import { projects } from '../data/projects'
import './Home.css'

const services = [
  {
    name: 'Modern Business Websites',
    desc: 'Clean, fast websites that make your business look trustworthy and professional the second someone lands on the page.',
    items: ['Landing pages', 'Full websites', 'Mobile-first layouts', 'Clear calls to action'],
  },
  {
    name: 'Website Redesigns',
    desc: 'I take outdated, cluttered, or slow websites and rebuild them into something polished, organized, and easier for customers to use.',
    items: ['Better layout', 'Stronger visuals', 'Cleaner content flow', 'Faster loading'],
  },
  {
    name: 'React Front-End Builds',
    desc: 'Custom React websites built with reusable components, organized code, smooth interactions, and room to grow over time.',
    items: ['React', 'TypeScript', 'Vite', 'Component structure'],
  },
  {
    name: 'Booking & Contact Flows',
    desc: 'Simple user flows that help visitors take action — booking a class, sending a message, or learning about a service.',
    items: ['Contact forms', 'Booking links', 'CTA sections', 'Lead-focused pages'],
  },
  {
    name: 'Responsive Design',
    desc: 'Every section is built to look good on phones, tablets, laptops, and desktops — because most customers check from their phone first.',
    items: ['Mobile menus', 'Flexible grids', 'Touch-friendly buttons', 'Clean spacing'],
  },
  {
    name: 'Launch Support',
    desc: 'I help get the site live, connect the domain, clean up final details, and make sure the finished product feels ready for real visitors.',
    items: ['Vercel hosting', 'Domain setup', 'Final testing', 'Basic SEO setup'],
  },
]

const processSteps = [
  { num: '01', title: 'Understand the business', desc: 'We start by getting clear on the business, the audience, the goal of the website, and what the visitor should do next.' },
  { num: '02', title: 'Plan the structure', desc: 'I map out the sections, pages, content flow, and main calls to action so the site has a purpose before the design starts.' },
  { num: '03', title: 'Design the experience', desc: 'The visual direction comes together with colors, spacing, typography, layout, and a style that actually fits the brand.' },
  { num: '04', title: 'Build the website', desc: 'I turn the design into a responsive React site with organized components, smooth CSS, and clean code that is easy to update later.' },
  { num: '05', title: 'Launch and polish', desc: 'Before launch, I test the site across screen sizes, clean up small details, connect the important links, and help get it live.' },
]

const marqueeItems = [
  'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite',
  'React Router', 'Supabase', 'Vercel', 'GitHub', 'Responsive Design',
  'FormSubmit', 'SEO Basics', 'Component Design',
]

function useReveal() {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (i: number) => (el: HTMLElement | null) => { refs.current[i] = el }
}

export default function Home() {
  const serviceRef = useReveal()
  const processRef = useReveal()
  const aboutRef = useReveal()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-pip" />
              Matheo Villada — Web Developer &amp; Designer
            </div>

            <h1 className="hero-title">
              Websites that feel<br />
              <span className="hl">clean, sharp,</span><br />
              and built to grow.
            </h1>

            <p className="hero-sub">
              I build modern websites for small businesses, creators, and local brands
              that need a stronger online presence. Clean design, responsive layouts,
              and clear sections that help people understand what you do and take action.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#work" className="btn-secondary">View My Work</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stat-card">
              <div className="hero-stat-item">
                <div className="stat-num"><span className="coral">20+</span></div>
                <div className="stat-lbl">Projects delivered</div>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat-item">
                <div className="stat-num"><span className="indigo">100%</span></div>
                <div className="stat-lbl">Client satisfaction</div>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat-item">
                <div className="stat-num">5+</div>
                <div className="stat-lbl">Years building</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="scroll-bar" />
          <span className="scroll-txt">Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section" aria-label="Tools and skills">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={`${item}-${i}`} className="marquee-item">
              <span className="dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <ProjectSpiral projects={projects} />

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <SectionTitle
            eyebrow="What I Do"
            heading="Websites that help businesses look legit online"
            accentWord="look legit online"
            sub="My focus is simple: make the business easier to understand, easier to trust, and easier to contact."
          />
          <div className="services-grid">
            {services.map((service, i) => (
              <article
                key={service.name}
                className="service-card"
                ref={serviceRef(i) as (el: HTMLDivElement | null) => void}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="service-number">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-list">
                  {service.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-section">
        <div className="about-wrapper">
          <div
            className="about-visual"
            ref={aboutRef(0) as (el: HTMLDivElement | null) => void}
          >
            <div className="about-photo-wrap">
              <div className="about-photo-placeholder">
                <div className="about-initials">MV</div>
                <p>Add your photo here</p>
              </div>
            </div>
            <div className="about-badge">
              <div className="badge-num">5+</div>
              <div className="badge-lbl">Years building</div>
            </div>
          </div>

          <div
            className="about-content"
            ref={aboutRef(1) as (el: HTMLDivElement | null) => void}
          >
            <span className="about-eyebrow">About Me</span>
            <h2>Hi, I'm <span>Matheo.</span></h2>
            <p>
              I build modern websites for small businesses, creators, and local brands
              that want to look more professional online.
            </p>
            <p>
              My focus is simple: clean design, responsive development, and websites
              that help visitors quickly understand what you do and take action.
            </p>
            <div className="about-highlights">
              <div><strong>📍</strong>White Plains, NY</div>
              <div><strong>💻</strong>React · TypeScript · Supabase</div>
              <div><strong>🚀</strong>Available for freelance work</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <SectionTitle
            eyebrow="How It Works"
            heading="A clear path from idea to launch"
            accentWord="idea to launch"
            sub="Every project is different, so I keep the steps simple and flexible."
          />
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <article
                key={step.num}
                className="process-step"
                ref={processRef(i) as (el: HTMLDivElement | null) => void}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactForm />
    </>
  )
}
