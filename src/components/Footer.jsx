// src/components/Footer.jsx

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} My Practice App</span>
      <span className="footer-brand">react ⚡</span>
    </footer>
  );
}

export default Footer;
