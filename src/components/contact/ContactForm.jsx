import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import { useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';
import './ContactForm.css';

export default function ContactForm() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSubmitted(false);

    try {
      const res = await fetch('https://ddrtech-backend-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.errors?.[0] || data.message || 'Something went wrong');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <Container>
        <div className="contact-grid">
          {/* Form */}
          <div className="form-box">
            <div className="form-heading">Send Us A Message</div>
            <div className="form-heading-underline"></div>
            <p className="form-sub">Fill out the form and our team will get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <span className="field-icon"><Icon name="user" /></span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <span className="field-icon"><Icon name="mail" /></span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <span className="field-icon"><Icon name="phone" /></span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <span className="field-icon"><Icon name="pen" /></span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field field-area">
                <span className="field-icon"><Icon name="message" /></span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {submitted && (
                <p style={{ color: '#10b981', fontWeight: 600, marginBottom: 12 }}>
                  ✓ Message sent successfully!
                </p>
              )}
              {error && (
                <p style={{ color: '#ef4444', fontWeight: 500, marginBottom: 12 }}>
                  ✗ {error}
                </p>
              )}
              <button type="submit" className="send-btn" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="info-card">
            <div className="form-heading">Contact Information</div>
            <div className="form-heading-underline"></div>

            <div className="info-item">
              <div className="info-icon"><Icon name="phone" /></div>
              <div>
                <b>Phone</b>
                <span>+91 83606 86961</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Icon name="mail" /></div>
              <div>
                <b>Email</b>
                <span>admin@digitaldrivetech.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Icon name="mapPin" /></div>
              <div>
                <b>Address</b>
                <span>Office No. 507, 5th Floor, E-257, Veerji Tower, Phase 8B, Industrial Area, Sector 74, Mohali, Punjab</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Icon name="clock" /></div>
              <div>
                <b>Working Hours</b>
                <span>Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
