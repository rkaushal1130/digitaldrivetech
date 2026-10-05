import React from 'react';
import Container from '../../ui/Container';
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WebDevContactBar.css';

export default function WebDevContactBar() {
  const navigate = useNavigate();

  return (
    <section className="webdev-contact-section">
      <Container>
        <div className="webdev-contact-bar">
          <div className="webdev-contact-grid">
            <a href="tel:8360686961" className="webdev-contact-item">
              <div className="webdev-contact-icon">
                <Phone size={22} />
              </div>
              <div className="webdev-contact-info">
                <span className="webdev-contact-label">Mobile No.</span>
                <span className="webdev-contact-value">8360686961</span>
              </div>
            </a>

            <a href="mailto:admin@digitaldrivetech.com" className="webdev-contact-item">
              <div className="webdev-contact-icon">
                <Mail size={22} />
              </div>
              <div className="webdev-contact-info">
                <span className="webdev-contact-label">Gmail</span>
                <span className="webdev-contact-value">admin@digitaldrivetech.com</span>
              </div>
            </a>

            <a href="https://www.digitaldrivetech.com" target="_blank" rel="noopener noreferrer" className="webdev-contact-item">
              <div className="webdev-contact-icon">
                <Globe size={22} />
              </div>
              <div className="webdev-contact-info">
                <span className="webdev-contact-label">Website</span>
                <span className="webdev-contact-value">https://www.digitaldrivetech.com/</span>
              </div>
            </a>
          </div>

          <div className="webdev-contact-cta">
            <button className="webdev-consult-btn" onClick={() => navigate('/contact')}>
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
