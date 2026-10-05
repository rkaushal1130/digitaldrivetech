import React from 'react';
import Container from '../../ui/Container';
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './UIUXContactBar.css';

export default function UIUXContactBar() {
  const navigate = useNavigate();

  return (
    <section className="uiux-contact-section">
      <Container>
        <div className="uiux-contact-bar">
          <div className="uiux-contact-grid">
            <a href="tel:8360686961" className="uiux-contact-item">
              <div className="uiux-contact-icon">
                <Phone size={22} />
              </div>
              <div className="uiux-contact-info">
                <span className="uiux-contact-label">Mobile No.</span>
                <span className="uiux-contact-value">8360686961</span>
              </div>
            </a>

            <a href="mailto:admin@digitaldrivetech.com" className="uiux-contact-item">
              <div className="uiux-contact-icon">
                <Mail size={22} />
              </div>
              <div className="uiux-contact-info">
                <span className="uiux-contact-label">Gmail</span>
                <span className="uiux-contact-value">admin@digitaldrivetech.com</span>
              </div>
            </a>

            <a href="https://www.digitaldrivetech.com" target="_blank" rel="noopener noreferrer" className="uiux-contact-item">
              <div className="uiux-contact-icon">
                <Globe size={22} />
              </div>
              <div className="uiux-contact-info">
                <span className="uiux-contact-label">Website</span>
                <span className="uiux-contact-value">https://www.digitaldrivetech.com/</span>
              </div>
            </a>
          </div>

          <div className="uiux-contact-cta">
            <button className="uiux-consult-btn" onClick={() => navigate('/contact')}>
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
