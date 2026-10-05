import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { internshipStats as stats } from '../../data/stats';
import './InternshipInfo.css';

export default function InternshipInfo() {
  const [formData, setFormData] = useState({
    fullName: '',
    college: '',
    course: '',
    mobile: '',
    email: '',
    domain: '',
    duration: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSubmitted(false);

    try {
      const res = await fetch('https://ddrtech-backend-production.up.railway.app/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.errors?.[0] || data.message || 'Something went wrong');
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        college: '',
        course: '',
        mobile: '',
        email: '',
        domain: '',
        duration: '',
        message: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const programs = [
    { icon: 'fas fa-calendar-alt', text: '4 Weeks Internship', badge: 'Popular' },
    { icon: 'fas fa-clock', text: '6 Weeks Industrial Training', badge: null },
    { icon: 'fas fa-calendar-check', text: '45 Days Industrial Training', badge: null },
    { icon: 'fas fa-calendar', text: '3 Months Internship Program', badge: 'Recommended' }
  ];

  const eligibility = [
    'BBA / MBA Students',
    'BCA / MCA Students',
    'B.Tech / M.Tech Students',
    'Polytechnic Diploma',
    'Fresh Graduates',
    'Career Switchers',
    'Final Year Students'
  ];

  const whyChoose = [
    { icon: 'fas fa-briefcase', text: 'Real Client Projects' },
    { icon: 'fas fa-hands-helping', text: 'Practical Learning Approach' },
    { icon: 'fas fa-users', text: 'Industry Expert Guidance' },
    { icon: 'fas fa-cogs', text: 'Modern Tools & Technologies' },
    { icon: 'fas fa-building', text: 'Professional Work Environment' },
    { icon: 'fas fa-chart-bar', text: 'Career Growth Opportunities' }
  ];

  return (
    <section className="info-section-modern">
      <Container>
        {/* Stats Row */}
        <div className="stats-row">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Three Cards */}
        <div className="cards-grid">
          {/* Available Programs Card */}
          <div className="info-card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Available Programs</h3>
            </div>
            <div className="card-content">
              {programs.map((program, idx) => (
                <div key={idx} className="program-item-modern">
                  <div className="program-icon-modern">
                    <i className={program.icon}></i>
                  </div>
                  <span className="program-text">{program.text}</span>
                  {program.badge && <span className="program-badge">{program.badge}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Card */}
          <div className="info-card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Eligibility Criteria</h3>
            </div>
            <div className="card-content">
              <ul className="eligibility-list-modern">
                {eligibility.map((item, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Card */}
          <div className="info-card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Why Choose Digital Drive?</h3>
            </div>
            <div className="card-content">
              <div className="why-grid">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="why-item">
                    <div className="why-icon">
                      <i className={item.icon}></i>
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Start Your Career Journey?</h3>
            <p>Join hundreds of students who have transformed their careers with us</p>
          </div>
          <div className="cta-buttons">
            <Button onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply Now <i className="fas fa-arrow-right"></i>
            </Button>
            <Button variant="outline" href="https://drive.google.com/uc?export=download&id=1mtQ9oTW6jYoahs3IdE8rzU84jtkYeJxC">
              Download Brochure <i className="fas fa-download"></i>
            </Button>
          </div>
        </div>

        {/* Application Form - 2 Column Layout */}
        <div className="apply-form-two-col" id="apply-form">
          {/* Left Column - Visit Us */}
          <div className="visit-us-card">
            <div className="visit-header">
              <div className="visit-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Our Office</h3>
            </div>
            <p className="visit-desc">
              Connect with us in person. Our team is ready to guide you through our programs and answer all your questions.
            </p>

            {/* Google Map */}
            <div className="visit-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d109769.90205273202!2d76.62919871635118!3d30.709700121557855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzM0LjgiTiA3NsKwNDEnNDEuMiJF!5e0!3m2!1sen!2sin!4v1781345453627!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Drive Office Location"
              />
            </div>

            {/* Contact Details */}
            <div className="visit-details">
              <div className="visit-detail-item">
                <i className="fas fa-map-pin"></i>
                <div>
                  <span className="detail-label">Address</span>
                  <span className="detail-value">Office No. 507, 5th Floor, E-257, Veerji Tower, Phase 8B, Industrial Area, Sector 74, Mohali, Punjab</span>
                </div>
              </div>

              <div className="visit-detail-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">+91 83606 86961</span>
                </div>
              </div>

              <div className="visit-detail-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">admin@digitaldrivetech.com</span>
                </div>
              </div>

              <div className="visit-detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="detail-label">Working Hours</span>
                  <span className="detail-value">Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed</span>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.google.com/?q=30.709583,76.695000"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              <i className="fas fa-directions"></i> Get Directions
            </a>


          </div>

          {/* Right Column - Application Form */}
          <div className="apply-form-card">
            <div className="apply-header">
              <div className="apply-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Apply for Internship</h3>
            </div>
            <p className="apply-desc">Fill out the form to kickstart your career journey with us</p>

            <form onSubmit={handleSubmit} className="modern-apply-form">
              <div className="apply-form-row">
                <div className="apply-form-group">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="apply-form-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <i className="fas fa-phone"></i>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="apply-form-group">
                  <i className="fas fa-university"></i>
                  <input
                    type="text"
                    name="college"
                    placeholder="College / University"
                    value={formData.college}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <i className="fas fa-book"></i>
                  <input
                    type="text"
                    name="course"
                    placeholder="Course / Stream"
                    value={formData.course}
                    onChange={handleChange}
                  />
                </div>
                <div className="apply-form-group">
                  <i className="fas fa-briefcase"></i>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Training Domain</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="HR & Recruitment">HR & Recruitment</option>
                    <option value="Accounts & Finance">Accounts & Finance</option>
                    <option value="AI & Automation">AI & Automation</option>
                  </select>
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <i className="fas fa-calendar-alt"></i>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Duration</option>
                    <option value="4 Weeks">4 Weeks</option>
                    <option value="6 Weeks">6 Weeks</option>
                    <option value="45 Days">45 Days</option>
                    <option value="3 Months">3 Months</option>
                  </select>
                </div>
                <div className="apply-form-group">
                  <i className="fas fa-comment"></i>
                  <textarea
                    name="message"
                    placeholder="Message (Optional)"
                    rows="1"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {submitted && (
                <p style={{ color: '#10b981', fontWeight: 600, marginBottom: 12 }}>
                  ✓ Application submitted successfully!
                </p>
              )}
              {error && (
                <p style={{ color: '#ef4444', fontWeight: 500, marginBottom: 12 }}>
                  ✗ {error}
                </p>
              )}
              <button type="submit" className="apply-submit-btn" disabled={submitting}>
                {submitting ? 'Submitting...' : <><i className="fas fa-paper-plane"></i> Submit Application</>}
              </button>
            </form>
            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-badge">
                <i className="fas fa-certificate"></i>
                <span>Industry Certificate</span>
              </div>
              <div className="trust-badge">
                <i className="fas fa-laptop-code"></i>
                <span>Live Projects</span>
              </div>
              <div className="trust-badge">
                <i className="fas fa-handshake"></i>
                <span>Placement Assistance</span>
              </div>
              <div className="trust-badge">
                <i className="fas fa-user-tie"></i>
                <span>Expert Mentorship</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
