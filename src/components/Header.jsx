// src/components/Header.jsx

import './Header.css';

function Header() {
  return (
    <header className="header">
      <span className="header-logo">practice-app</span>

      <nav className="header-nav">
        <ul>
          {['Home', 'About', 'Contact'].map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;