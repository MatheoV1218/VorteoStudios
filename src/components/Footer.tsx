// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>VorTeo</h2>
        <p>
          Modern websites for local businesses that want to look better,
          load faster, and get more customers.
        </p>
      </div>

      <div className="footer-socials">
        <a href="https://github.com/" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank"><FaLinkedin /></a>
        <a href="https://instagram.com/" target="_blank"><FaInstagram /></a>
        <a href="https://tiktok.com/" target="_blank"><FaTiktok /></a>
      </div>

      <p className="footer-copy">© 2026 VorTeo. Built by Teo Villada.</p>
    </footer>
  );
}

export default Footer;