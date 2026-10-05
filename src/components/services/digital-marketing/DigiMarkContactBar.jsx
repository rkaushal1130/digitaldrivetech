import React from 'react';
import Container from '../../ui/Container';
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './DigiMarkContactBar.css';

export default function DigiMarkContactBar() {
  const navigate = useNavigate();

  return (
    <section className="digimark-contact-section">
      <Container>
        <div className="digimark-contact-bar">
          <div className="digimark-contact-grid">
            <a href="tel:8360686961" className="digimark-contact-item">
              <div className="digimark-contact-icon">
                <Phone size={22} />
              </div>
              <div className="digimark-contact-info">
                <span className="digimark-contact-label">Mobile No.</span>
                <span className="digimark-contact-value">8360686961</span>
              </div>
            </a>

            <a href="mailto:admin@digitaldrivetech.com" className="digimark-contact-item">
              <div className="digimark-contact-icon">
                <Mail size={22} />
              </div>
              <div className="digimark-contact-info">
                <span className="digimark-contact-label">Gmail</span>
                <span className="digimark-contact-value">admin@digitaldrivetech.com</span>
              </div>
            </a>

            <a href="https://www.digitaldrivetech.com" target="_blank" rel="noopener noreferrer" className="digimark-contact-item">
              <div className="digimark-contact-icon">
                <Globe size={22} />
              </div>
              <div className="digimark-contact-info">
                <span className="digimark-contact-label">Website</span>
                <span className="digimark-contact-value">https://www.digitaldrivetech.com/</span>
              </div>
            </a>
          </div>

          <div className="digimark-contact-cta">
            <button className="digimark-consult-btn" onClick={() => navigate('/contact')}>
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
