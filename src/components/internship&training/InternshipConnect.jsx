import React from 'react';
import Container from '../ui/Container';
import './InternshipConnect.css';

export default function InternshipConnect() {
  const contacts = [
    {
      name: 'Ravi Kumar',
      role: 'Training Coordinator',
      phone: '+91 98765 43210',
      icon: 'fas fa-user-tie'
    },
    {
      name: 'Neha Sharma',
      role: 'Student Counsellor',
      phone: '+91 87654 32109',
      icon: 'fas fa-user-circle'
    }
  ];

  return (
    <section className="connect-section-modern">
      <Container>
        <div className="connect-cta-card">
          <div className="connect-content-area">
            <div className="connect-header">
              <div className="connect-icon-badge">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h3>Need Help? We're Here for You</h3>
                <p>Have questions about our programs? Our team is ready to assist you with personalized guidance.</p>
              </div>
            </div>

            <div className="connect-contacts-grid">
              <a href="tel:+919876543210" className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+91 98765 43210</span>
                </div>
              </a>

              <a href="mailto:training@digitaldriveresourcetech.com" className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Email Us</span>
                  <span className="contact-value">training@digitaldrive.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="connect-people-area">
            <h4>Talk to Our Team</h4>
            <div className="people-cards">
              {contacts.map((person, idx) => (
                <div key={idx} className="person-card">
                  <div className="person-avatar">
                    <i className={person.icon}></i>
                  </div>
                  <div className="person-details">
                    <h5>{person.name}</h5>
                    <span className="person-role">{person.role}</span>
                    <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="person-phone">
                      <i className="fas fa-phone-alt"></i> {person.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
