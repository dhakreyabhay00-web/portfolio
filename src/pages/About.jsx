import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">
          <div className="about-image-wrapper">
            <div className="about-image">
              <div className="profile-placeholder">
                <span className="profile-initial">A</span>
                <span className="profile-name">ABHAY DHAKREY</span>
                <span className="profile-role">Developer in Progress</span>
              </div>
            </div>

            <div className="floating-card">
              <span className="floating-icon">💻</span>
              <div>
                <h4>Building the Future</h4>
                <p>One line of code at a time</p>
              </div>
            </div>

            <div className="about-decoration decoration-one"></div>
            <div className="about-decoration decoration-two"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <span className="section-tag">
            <span className="tag-line"></span>
            GET TO KNOW ME
          </span>

          <h2 className="about-title">
            Turning Ideas Into
            <span> Digital Experiences.</span>
          </h2>

          <p className="about-description">
            Hi, I'm <strong>Abhay Dhakrey</strong>, a passionate developer
            who loves building modern, attractive, and user-friendly
            websites. I'm constantly learning new technologies and
            improving my development skills.
          </p>

          <p className="about-description">
            My goal is to combine creativity with technology to create
            meaningful digital experiences. I enjoy solving problems,
            exploring new ideas, and turning what I learn into real-world
            projects.
          </p>

          {/* Personal Information */}
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-icon">✦</span>
              <div>
                <h4>Creative Thinker</h4>
                <p>I enjoy designing clean and engaging interfaces.</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">⌘</span>
              <div>
                <h4>Continuous Learner</h4>
                <p>Always exploring new tools and technologies.</p>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">⚡</span>
              <div>
                <h4>Problem Solver</h4>
                <p>I turn challenges into opportunities to grow.</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <a href="#contact" className="about-btn primary-btn">
              Let's Connect <span>↗</span>
            </a>

            <a href="#projects" className="about-btn secondary-btn">
              Explore My Work
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Stats */}
      <div className="about-stats">
        <div className="stat-item">
          <h3>01<span>+</span></h3>
          <p>Curiosity to Learn</p>
        </div>

        <div className="stat-item">
          <h3>100<span>%</span></h3>
          <p>Growth Mindset</p>
        </div>

        <div className="stat-item">
          <h3>∞</h3>
          <p>Ideas to Explore</p>
        </div>
      </div>
    </section>
  );
}

export default About;