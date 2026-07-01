import { useEffect, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/#hero" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <div className="logo-mark">V</div>
        <span className="logo-text">Vor<span>Teo</span></span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          </li>
        ))}
        <li className="mobile-cta">
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            <button className="nav-cta">Let's Talk</button>
          </a>
        </li>
      </ul>

      <a href="/#contact" className="desktop-cta">
        <button className="nav-cta">Let's Talk</button>
      </a>

      <button
        className={`nav-mobile-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(p => !p)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
