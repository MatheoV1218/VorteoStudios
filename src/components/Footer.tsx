import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import Logo from './Logo'
import { featuredProjects } from '../data/projects'
import { SITE, services } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="Vorteo Studios home">
              <Logo tone="light" />
            </Link>
            <p>
              A web design and development studio in {SITE.city}, {SITE.region}. Custom websites, stores, and web apps —
              designed with intent and built to grow.
            </p>
            <a href={`mailto:${SITE.email}`} className="footer-mail">
              {SITE.email}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <nav className="footer-cols" aria-label="Footer">
            <div>
              <h2>Studio</h2>
              <ul>
                <li><Link to="/projects">Work</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2>Services</h2>
              <ul>
                {services.slice(0, 5).map(s => (
                  <li key={s.slug}><Link to={`/services#${s.slug}`}>{s.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Recent work</h2>
              <ul>
                {featuredProjects.map(p => (
                  <li key={p.slug}><Link to={`/projects/${p.slug}`}>{p.title}</Link></li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Vorteo Studios — {SITE.founder}. All rights reserved.</p>
          <div className="footer-social">
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="Vorteo Studios founder on LinkedIn">
              <FaLinkedin />
            </a>
            <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="Vorteo Studios on GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
