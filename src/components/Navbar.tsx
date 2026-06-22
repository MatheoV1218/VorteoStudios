// src/components/Navbar.tsx
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="nav-logo">
        Vor<span>Teo</span>
      </a>

      <nav className="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Start Project
      </a>
    </header>
  );
}

export default Navbar;