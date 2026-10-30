import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* Left Content */}
        <div className="home-content">
          <p className="home-greeting">
            👋 Hello, I'm
          </p>

          <h1 className="home-title">
            Abhay <span>Dhakrey</span>
          </h1>

          <h2 className="home-subtitle">
            I'm a <span className="highlight">Web Developer</span>
          </h2>

          <p className="home-description">
            I build modern, responsive, and user-friendly websites.
            I'm passionate about technology, solving problems, and
            turning creative ideas into real-world digital experiences.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="home-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a href="mailto:your.email@example.com" aria-label="Email">
              @
            </a>
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="home-visual">
          <div className="home-glow"></div>

          <div className="profile-card">
            <div className="card-top">
              <span className="card-dot"></span>
              <span className="card-dot"></span>
              <span className="card-dot"></span>
              <p>developer.js</p>
            </div>

            <div className="profile-avatar">
              A
            </div>

            <h3>Abhay Dhakrey</h3>
            <p className="profile-role">Aspiring Software Developer</p>

            <div className="code-block">
              <p>
                <span className="code-purple">const</span> developer = {'{'}
              </p>

              <p className="code-indent">
                name: <span className="code-green">'Abhay'</span>,
              </p>

              <p className="code-indent">
                passion: <span className="code-green">'Coding'</span>,
              </p>

              <p className="code-indent">
                learning: <span className="code-green">'Every Day'</span>
              </p>

              <p>{'}'};</p>
            </div>

            <div className="profile-status">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </div>

          <div className="floating-badge badge-one">
            <span>⚡</span> Creative Thinker
          </div>

          <div className="floating-badge badge-two">
            <span>💻</span> Code & Create
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span className="scroll-line"></span>
        Scroll to explore
      </a>
    </section>
  );
}

export default Home;