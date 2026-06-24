import { useEffect, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
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
      <a href="#" className="nav-logo">
        <div className="logo-mark">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="16,2 30,28 2,28" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="16,10 24,26 8,26" fill="rgba(0,245,255,0.15)" stroke="#00F5FF" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="logo-text">
          Vor<span>Teo</span>
        </span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="mobile-cta">
          <a href="#contact">
            <button className="nav-cta" style={{ display: 'block' }}>Let's Talk</button>
          </a>
        </li>
      </ul>

      <a href="#contact">
        <button className="nav-cta">Let's Talk</button>
      </a>

      <button
        className={`nav-mobile-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
