import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">Vor<span>Teo</span></div>
          <p className="footer-copy">© {new Date().getFullYear()} VorTeo Studios — Matheo Villada. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/matheo-villada/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/MatheoV1218" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
