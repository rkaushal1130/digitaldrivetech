import React from 'react';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import './ContactMap.css';

export default function ContactMap() {
  return (
    <section className="contact-map-section">
      <Container>
        <div className="map-grid">

          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d109769.90205273202!2d76.62919871635118!3d30.709700121557855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzM0LjgiTiA3NsKwNDEnNDEuMiJF!5e0!3m2!1sen!2sin!4v1781345453627!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            />
          </div>
          <div className="why-card">
            <div className="why-heading">Why Connect With Us?</div>
            <div className="why-heading-underline"></div>

            <div className="why-list">
              <div className="why-item">
                <div className="why-circle"><Icon name="users" /></div>
                <span>Get expert consultation for your project</span>
              </div>

              <div className="why-item">
                <div className="why-circle"><Icon name="pen" /></div>
                <span>Receive a free quote with no obligation</span>
              </div>

              <div className="why-item">
                <div className="why-circle"><Icon name="headphones" /></div>
                <span>On-time response and dedicated support</span>
              </div>

              <div className="why-item">
                <div className="why-circle"><Icon name="clock" /></div>
                <span>We value your time and business</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}