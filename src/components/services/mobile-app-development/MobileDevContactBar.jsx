import React from 'react';
import Container from '../../ui/Container';
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MobileDevContactBar.css';

export default function MobileDevContactBar() {
  const navigate = useNavigate();

  return (
    <section className="mobiledev-contact-section">
      <Container>
        <div className="mobiledev-contact-bar">
          <div className="mobiledev-contact-grid">
            <a href="tel:8360686961" className="mobiledev-contact-item">
              <div className="mobiledev-contact-icon">
                <Phone size={22} />
              </div>
              <div className="mobiledev-contact-info">
                <span className="mobiledev-contact-label">Mobile No.</span>
                <span className="mobiledev-contact-value">8360686961</span>
              </div>
            </a>

            <a href="mailto:admin@digitaldrivetech.com" className="mobiledev-contact-item">
              <div className="mobiledev-contact-icon">
                <Mail size={22} />
              </div>
              <div className="mobiledev-contact-info">
                <span className="mobiledev-contact-label">Gmail</span>
                <span className="mobiledev-contact-value">admin@digitaldrivetech.com</span>
              </div>
            </a>

            <a href="https://www.digitaldrivetech.com" target="_blank" rel="noopener noreferrer" className="mobiledev-contact-item">
              <div className="mobiledev-contact-icon">
                <Globe size={22} />
              </div>
              <div className="mobiledev-contact-info">
                <span className="mobiledev-contact-label">Website</span>
                <span className="mobiledev-contact-value">https://www.digitaldrivetech.com/</span>
              </div>
            </a>
          </div>

          <div className="mobiledev-contact-cta">
            <button className="mobiledev-consult-btn" onClick={() => navigate('/contact')}>
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
