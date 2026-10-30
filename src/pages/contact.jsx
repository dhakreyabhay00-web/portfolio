import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (status) {
      setStatus('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus(
      'Your form is ready! Connect an email service to send your message.'
    );
  };

  const contactDetails = [
    {
      icon: '✉',
      label: 'EMAIL ME',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: '⌘',
      label: 'GITHUB',
      value: 'Explore my repositories',
      href: 'https://github.com/',
    },
    {
      icon: 'in',
      label: 'LINKEDIN',
      value: 'Connect professionally',
      href: 'https://www.linkedin.com/',
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="contact-tag">
            <span className="contact-tag-line"></span>
            GET IN TOUCH
            <span className="contact-tag-line"></span>
          </span>

          <h2>
            Let's Start a
            <span> Conversation.</span>
          </h2>

          <p>
            Have a project idea, an opportunity, or just want to connect?
            I'd love to hear from you. Let's create something meaningful.
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="contact-layout">

          {/* Left Side */}
          <div className="contact-info">
            <div className="contact-info-heading">
              <span className="contact-status-dot"></span>
              <span>AVAILABLE TO CONNECT</span>
            </div>

            <h3>
              Let's turn your
              <span> ideas into reality.</span>
            </h3>

            <p className="contact-info-description">
              I'm always interested in learning, collaborating on projects,
              and connecting with people who enjoy building great things.
              Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="contact-details">
              {contactDetails.map((detail) => (
                <a
                  href={detail.href}
                  className="contact-detail-card"
                  key={detail.label}
                  target={
                    detail.href.startsWith('mailto:') ? undefined : '_blank'
                  }
                  rel={
                    detail.href.startsWith('mailto:')
                      ? undefined
                      : 'noreferrer'
                  }
                >
                  <div className="contact-detail-icon">
                    {detail.icon}
                  </div>

                  <div className="contact-detail-text">
                    <span>{detail.label}</span>
                    <h4>{detail.value}</h4>
                  </div>

                  <span className="contact-detail-arrow">↗</span>
                </a>
              ))}
            </div>

            {/* Decorative Card */}
            <div className="contact-note">
              <span className="contact-note-icon">✦</span>

              <div>
                <h4>Have an interesting idea?</h4>
                <p>
                  Don't hesitate to reach out. Every great collaboration
                  starts with a conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side / Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="form-heading-icon">✉</span>

              <div>
                <h3>Send Me a Message</h3>
                <p>Fill in the details below.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
                <span>↗</span>
              </button>

              {status && (
                <p className="contact-form-status" role="status">
                  {status}
                </p>
              )}

              <p className="contact-form-footer">
                <span>🔒</span>
                Your information should be handled securely.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="contact-bottom">
          <p>
            Designed & built with <span>♥</span> by
            <strong> Abhay Dhakrey</strong>
          </p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;