import React from 'react';
import Container from '../../ui/Container';
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SoftDevContactBar.css';

export default function SoftDevContactBar() {
  const navigate = useNavigate();

  return (
    <section className="softdev-contact-section">
      <Container>
        <div className="softdev-contact-bar">
          <div className="softdev-contact-grid">
            <a href="tel:8360686961" className="softdev-contact-item">
              <div className="softdev-contact-icon">
                <Phone size={22} />
              </div>
              <div className="softdev-contact-info">
                <span className="softdev-contact-label">Mobile No.</span>
                <span className="softdev-contact-value">8360686961</span>
              </div>
            </a>

            <a href="mailto:admin@digitaldrivetech.com" className="softdev-contact-item">
              <div className="softdev-contact-icon">
                <Mail size={22} />
              </div>
              <div className="softdev-contact-info">
                <span className="softdev-contact-label">Gmail</span>
                <span className="softdev-contact-value">admin@digitaldrivetech.com</span>
              </div>
            </a>

            <a href="https://www.digitaldrivetech.com" target="_blank" rel="noopener noreferrer" className="softdev-contact-item">
              <div className="softdev-contact-icon">
                <Globe size={22} />
              </div>
              <div className="softdev-contact-info">
                <span className="softdev-contact-label">Website</span>
                <span className="softdev-contact-value">https://www.digitaldrivetech.com/</span>
              </div>
            </a>
          </div>

          <div className="softdev-contact-cta">
            <button className="softdev-consult-btn" onClick={() => navigate('/contact')}>
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
