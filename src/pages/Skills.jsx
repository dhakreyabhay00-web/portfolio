import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      name: 'HTML',
      level: 90,
      icon: '🌐',
      category: 'Frontend',
      description: 'Building structured web pages',
    },
    {
      name: 'CSS',
      level: 85,
      icon: '🎨',
      category: 'Frontend',
      description: 'Styling and responsive layouts',
    },
    {
      name: 'JavaScript',
      level: 70,
      icon: '⚡',
      category: 'Programming',
      description: 'Interactive web experiences',
    },
    {
      name: 'React',
      level: 65,
      icon: '⚛️',
      category: 'Frontend',
      description: 'Building reusable UI components',
    },
    {
      name: 'Java',
      level: 60,
      icon: '☕',
      category: 'Programming',
      description: 'Learning programming fundamentals',
    },
    {
      name: 'Git & GitHub',
      level: 55,
      icon: '🔧',
      category: 'Tools',
      description: 'Version control and collaboration',
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-heading">
          <span className="skills-tag">
            <span className="skills-tag-line"></span>
            MY EXPERTISE
            <span className="skills-tag-line"></span>
          </span>

          <h2>
            Skills That Bring
            <span> Ideas to Life.</span>
          </h2>

          <p>
            Technologies and tools I'm exploring to transform ideas
            into beautiful, functional, and user-friendly digital experiences.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ '--card-index': index }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span className="skill-category">
                  {skill.category}
                </span>
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>

              <div className="skill-progress-info">
                <span>Proficiency</span>
                <span className="skill-percentage">
                  {skill.level}%
                </span>
              </div>

              <div
                className="skill-progress-bar"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="skill-progress-fill"
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>

              <div className="skill-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="skills-bottom">
          <div className="skills-bottom-icon">🚀</div>

          <div className="skills-bottom-text">
            <h3>Always Learning, Always Growing</h3>
            <p>
              Every project is an opportunity to improve my skills,
              explore new technologies, and build something better.
            </p>
          </div>

          <a href="#projects" className="skills-project-btn">
            Explore Projects <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Skills;