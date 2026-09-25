import { useEffect, useState, type CSSProperties } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import Logo from './Logo'
import { NAV_LINKS, SITE } from '../data/site'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="nav-logo" aria-label="Vorteo Studios home">
          <Logo />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary btn-sm nav-cta">
          Start a project
          <FiArrowRight aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" inert={!menuOpen}>
        <nav aria-label="Mobile">
          <ul>
            {[{ to: '/', label: 'Home' }, ...NAV_LINKS, { to: '/contact', label: 'Contact' }].map((link, i) => (
              <li key={link.to} style={{ '--i': i } as CSSProperties}>
                <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                  <span className="mobile-menu-num">0{i + 1}</span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-foot">
          <Link to="/contact" className="btn btn-primary">
            Start a project
            <FiArrowRight aria-hidden="true" />
          </Link>
          <a href={`mailto:${SITE.email}`} className="mobile-menu-mail">
            {SITE.email}
          </a>
          <div className="mobile-menu-social">
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
