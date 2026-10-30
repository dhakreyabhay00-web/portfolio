import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      category: 'WEB DEVELOPMENT',
      description:
        'A modern, responsive portfolio website showcasing my skills, projects, and journey as a developer.',
      technologies: ['React', 'CSS', 'JavaScript'],
      icon: '💻',
      theme: 'portfolio',
      demo: '#',
      github: '#',
      number: '01',
    },
    {
      id: 2,
      title: 'Weather Application',
      category: 'WEB APPLICATION',
      description:
        'A clean weather application designed to display weather information and help users check conditions for different locations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: '🌤️',
      theme: 'weather',
      demo: '#',
      github: '#',
      number: '02',
    },
    {
      id: 3,
      title: 'Task Manager',
      category: 'PRODUCTIVITY TOOL',
      description:
        'A simple productivity application for organizing daily tasks, managing priorities, and keeping track of progress.',
      technologies: ['React', 'CSS', 'JavaScript'],
      icon: '📋',
      theme: 'task',
      demo: '#',
      github: '#',
      number: '03',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span className="projects-tag">
            <span className="projects-tag-line"></span>
            MY CREATIVE WORK
            <span className="projects-tag-line"></span>
          </span>

          <h2>
            Projects That
            <span> Speak for Me.</span>
          </h2>

          <p>
            A collection of projects where I turn ideas into practical
            digital experiences while learning, experimenting, and growing
            as a developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              {/* Project Preview */}
              <div
                className={`project-preview ${project.theme}`}
              >
                <div className="preview-topbar">
                  <div className="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="preview-label">
                    PROJECT_{project.number}
                  </span>
                </div>

                <div className="preview-content">
                  <span className="preview-icon">
                    {project.icon}
                  </span>

                  <h3>{project.title}</h3>

                  <span className="preview-subtitle">
                    {project.category}
                  </span>
                </div>

                <span className="project-number">
                  {project.number}
                </span>

                <div className="preview-orb"></div>
              </div>

              {/* Project Information */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <span className="project-arrow">↗</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-link demo-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    className="project-link source-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <span className="github-symbol">⌘</span>
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <div className="projects-footer">
          <div>
            <span className="projects-footer-label">
              HAVE AN IDEA?
            </span>

            <h3>Let's build something amazing together.</h3>

            <p>
              I'm always excited to explore new ideas and create
              something useful.
            </p>
          </div>

          <a href="#contact" className="projects-contact-btn">
            Let's Talk <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;