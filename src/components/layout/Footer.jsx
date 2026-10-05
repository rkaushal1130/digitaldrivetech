import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import logoImage from '../../assets/icons/logo.png';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div>
            <img src={logoImage} alt="Digital Drive Resource Tech Private Limited" className="logo-image" />

            <p style={{ marginTop: '20px' }}>
              We build modern websites, mobile apps and digital solutions
              that help businesses grow and succeed.
            </p>

            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61591777337881" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/ddrtech_official?igsh=MThrOGNid2I1NWFocQ==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com/@digitaldriveresourcetech?si=ha-Frqya_pAxaAFr" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://x.com/digitaldrive001" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>Home</li>
              <li onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>About Us</li>
              <li onClick={() => handleNavigation('/services')} style={{ cursor: 'pointer' }}>Services</li>
              <li onClick={() => handleNavigation('/portfolio')} style={{ cursor: 'pointer' }}>Portfolio</li>
              <li onClick={() => handleNavigation('/technologies')} style={{ cursor: 'pointer' }}>Technologies</li>
              <li onClick={() => handleNavigation('/pricing')} style={{ cursor: 'pointer' }}>Pricing</li>
              <li onClick={() => handleNavigation('/Internship-Training')} style={{ cursor: 'pointer' }}>Internship & Training</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li onClick={() => handleNavigation('/services/website-development')} style={{ cursor: 'pointer' }}>Website Development</li>
              <li onClick={() => handleNavigation('/services/mobile-app-development')} style={{ cursor: 'pointer' }}>Mobile App Development</li>
              <li onClick={() => handleNavigation('/services/ui-ux-design')} style={{ cursor: 'pointer' }}>UI/UX Design</li>
              <li onClick={() => handleNavigation('/services/software-development')} style={{ cursor: 'pointer' }}>Software Development</li>
              <li onClick={() => handleNavigation('/services')} style={{ cursor: 'pointer' }}>E-Commerce Solutions</li>
              <li onClick={() => handleNavigation('/services/digital-marketing')} style={{ cursor: 'pointer' }}>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>+91 83606 86961</li>
              <li>admin@digitaldrivetech.com</li>
              <li>Office No. 507, 5th Floor, E-257, Veerji Tower, Phase 8B, Industrial Area, Sector 74, Mohali, Punjab</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Digital Drive Resource Tech Private Limited. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </Container>
    </footer>
  );
}
