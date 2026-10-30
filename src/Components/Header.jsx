import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="portfolio-header">
      {/* Logo / Name */}
      <a href="#home" className="portfolio-logo">
        <span className="logo-symbol">A</span>

        <span className="logo-text">
          Abhay<span className="logo-highlight">.</span>
          <small>DHakrey</small>
        </span>
      </a>

      {/* Navigation */}
      <nav className="portfolio-nav">
        <a href="/" className="nav-link active">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Contact Button */}
      <a href="#contact" className="header-contact">
        Let's Talk <span>↗</span>
      </a>
    </header>
  );
}

export default Header;
