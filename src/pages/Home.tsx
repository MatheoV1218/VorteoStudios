import { useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { projects } from '../data/projects'
import './Home.css'

const services = [
  {
    name: 'Web Design & Development',
    desc: 'Pixel-perfect, performant websites built in React and Next.js — from bold marketing sites to complex web apps.',
    items: ['React / Next.js', 'TypeScript', 'Custom Animations', 'CMS Integration'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17h6M10 15v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 8l2.5 2L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Brand & Visual Identity',
    desc: 'Strategic design systems — logos, palettes, typography — that give your business a voice it can own.',
    items: ['Logo Design', 'Design Systems', 'Style Guides', 'UI Component Kits'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 3v4M10 13v4M3 10h4M13 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'E-Commerce & SaaS',
    desc: 'Revenue-first builds — high-converting storefronts and SaaS dashboards that turn visitors into customers.',
    items: ['Shopify / Stripe', 'User Auth', 'Dashboards', 'Subscription Flows'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14l-1.5 7H4.5L3 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="7" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 2h2l.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Performance & SEO',
    desc: 'Speed and search rankings that compound over time. Every build is optimised for Core Web Vitals and discoverability.',
    items: ['Lighthouse Audit', 'On-Page SEO', 'Schema Markup', 'CDN / Hosting'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Animation & Motion',
    desc: 'Interfaces that move with purpose. Scroll-triggered reveals, micro-interactions, and 3D — without the bloat.',
    items: ['Framer Motion', 'GSAP', 'Three.js', 'CSS Keyframes'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10c0-3.31 2.69-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10c0 3.31-2.69 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 4l3-2 3 2M7 16l3 2 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Maintenance & Growth',
    desc: 'Monthly retainers for teams that need a reliable partner — updates, analytics, A/B tests, and new features.',
    items: ['Monthly Retainers', 'Analytics Setup', 'A/B Testing', 'Ongoing Support'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.93 4.93l2.83 2.83M12.24 12.24l2.83 2.83M4.93 15.07l2.83-2.83M12.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: 'We get on a call to understand your goals, audience, and what success looks like. I ask the right questions so nothing gets built on assumptions.', duration: '30 min' },
  { num: '02', title: 'Strategy & Proposal', desc: 'I map out the scope, timeline, and technical approach — then send a clear proposal with milestones and fixed pricing. No surprise invoices.', duration: '2–3 days' },
  { num: '03', title: 'Design & Prototype', desc: 'High-fidelity Figma designs built around your brand. You see exactly what gets built before a line of code is written. Revisions are part of the process.', duration: '1–2 weeks' },
  { num: '04', title: 'Build & Test', desc: 'Development in React / Next.js with TypeScript. Every component is tested across browsers, screen sizes, and connection speeds.', duration: '2–4 weeks' },
  { num: '05', title: 'Launch & Handover', desc: 'Deployed to production with full documentation. You get training, source code, and everything you need to run it independently — or I stay on as your tech partner.', duration: '2–3 days' },
]

const testimonials = [
  { quote: "Matheo took a vague brief and turned it into the best-performing page we've ever launched. Revenue from that page is up 210% in 3 months.", name: 'Sofia Reyes', role: 'CEO, Lumière Studio', init: 'SR' },
  { quote: "The attention to detail is insane. Every animation, every hover state — it all felt intentional. Our users kept asking who built the site.", name: 'Jordan Kim', role: 'Founder, Apex Training', init: 'JK' },
  { quote: "Fast, communicative, and the end product exceeded what we imagined. VorTeo is the only studio I'll work with going forward.", name: 'Marcus Osei', role: 'CPO, PulseMetrics', init: 'MO' },
  { quote: "We went from zero online presence to ranking on page one in our city within 60 days of launch. The SEO work alone paid for the project 10x over.", name: 'Camille Duval', role: 'Director, Solis Architecture', init: 'CD' },
]

const marqueeItems = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Figma', 'Framer Motion', 'GSAP', 'Three.js', 'PostgreSQL', 'Stripe', 'Supabase', 'Tailwind CSS']

function useScrollReveal(className = 'visible') {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(className) }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [className])

  const ref = (i: number) => (el: HTMLElement | null) => { refs.current[i] = el }
  return ref
}

export default function Home() {
  const projectRef = useScrollReveal()
  const serviceRef = useScrollReveal()
  const processRef = useScrollReveal()
  const aboutRef = useScrollReveal()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb-1" />
          <div className="hero-orb-2" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Matheo Villada — Web Developer & Designer
            </div>

            <h1 className="hero-title">
              Websites that
              <span className="line-2">demand attention.</span>
              <span className="line-3">VorTeo Studio — Built for businesses that are serious about growth.</span>
            </h1>

            <p className="hero-sub">
              I build fast, beautiful, conversion-driven websites for brands that refuse to be ignored.
              From bold marketing sites to full-stack web apps — every project is crafted to perform.
            </p>

            <div className="hero-actions">
              <a href="#contact">
                <button className="btn-primary">
                  Start a Project
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </a>
              <a href="#work">
                <button className="btn-secondary">View My Work</button>
              </a>
            </div>
          </div>

          <div className="hero-stats">
            {[
              { num: '40+', label: 'Projects Delivered' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '3×', label: 'Avg. Conversion Lift' },
            ].map(s => (
              <div key={s.label} className="hero-stat">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work">
        <div className="work-section">
          <SectionTitle
            eyebrow="Selected Work"
            heading="Projects that moved the needle"
            accentWord="moved the needle"
            sub="A cross-section of recent work — each built to solve a real business problem."
          />
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="project-card-wrap"
                ref={projectRef(i)}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <SectionTitle
            eyebrow="What I Do"
            heading="Every service, one standard"
            accentWord="one standard"
            sub="I work across the full stack of digital — strategy, design, development, and growth."
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="service-card"
                ref={serviceRef(i) as (el: HTMLDivElement | null) => void}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-list">
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="about-section">
          <div
            className="about-visual"
            ref={aboutRef(0) as (el: HTMLDivElement | null) => void}
          >
            <div className="about-card about-card-main">
              <div className="about-vmark">
                <svg viewBox="0 0 80 80" fill="none">
                  <polygon points="40,4 76,72 4,72" fill="none" stroke="white" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <div className="name">Matheo Villada</div>
                <div className="role">Web Developer & Designer</div>
              </div>
            </div>
            <div className="about-card about-card-years">
              <div className="years-number">5+</div>
              <div className="years-label">Years<br />Building</div>
            </div>
            <div className="about-card about-card-skills">
              {['React', 'Next.js', 'TypeScript', 'Figma', 'Node.js', 'GSAP'].map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div
            className="about-text"
            ref={aboutRef(1) as (el: HTMLDivElement | null) => void}
          >
            <SectionTitle
              eyebrow="About Me"
              heading="The developer behind VorTeo"
              accentWord="VorTeo"
            />
            <div className="about-body">
              <p>
                I'm <strong>Matheo Villada</strong>, a full-stack web developer and designer who started building websites because I was obsessed with the idea that a great digital product could change a business overnight.
              </p>
              <p>
                Five years later, that obsession hasn't faded. I work directly with founders, creative directors, and growth teams to ship websites that are <strong>genuinely different</strong> — not just visually, but structurally: faster, more intentional, more effective at turning visitors into customers.
              </p>
              <p>
                VorTeo is the studio I built to do that at a higher level. Small by design, focused by choice — every project gets my full attention, from the first call to the final deploy.
              </p>
            </div>
            <div className="about-tech">
              <div className="tech-label">Core Stack</div>
              <div className="tech-chips">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma', 'GSAP', 'Three.js', 'Framer Motion', 'Stripe'].map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <SectionTitle
            eyebrow="How It Works"
            heading="A process built for clarity"
            accentWord="clarity"
            sub="No ambiguity, no scope creep — just a clear path from idea to launch."
          />
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="process-step"
                ref={processRef(i) as (el: HTMLDivElement | null) => void}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <p className="step-desc">{step.desc}</p>
                  <div className="step-duration">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <SectionTitle
            eyebrow="What Clients Say"
            heading="The work speaks, but they speak louder"
            accentWord="they speak louder"
          />
          <div className="testimonials-track">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactForm />
    </>
  )
}
