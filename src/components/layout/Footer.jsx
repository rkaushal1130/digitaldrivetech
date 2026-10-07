import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import logoImage from '../../assets/icons/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} aria-label="Digital Drive Resource Tech Home">
              <img src={logoImage} alt="Digital Drive Resource Tech Private Limited" className="logo-image" />
            </Link>

            <p style={{ marginTop: '20px' }}>
              We build modern websites, mobile apps and digital solutions
              that help businesses grow and succeed.
            </p>

            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61591777337881" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/ddrtech_official?igsh=MThrOGNid2I1NWFocQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com/@digitaldriveresourcetech?si=ha-Frqya_pAxaAFr" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://x.com/digitaldrive001" target="_blank" rel="noopener noreferrer" aria-label="X Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li style={{ cursor: 'pointer' }}><Link to="/" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/about" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/services" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/portfolio" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Portfolio</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/technologies" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Technologies</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/pricing" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Pricing</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/blog" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Blog &amp; Insights</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/internship-training-in-mohali" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Internship &amp; Training</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li style={{ cursor: 'pointer' }}><Link to="/website-development" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Website Development</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/services/mobile-app-development" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Mobile App Development</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/services/ui-ux-design" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>UI/UX Design</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/services/software-development" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Software Development</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/services" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>E-Commerce Solutions</Link></li>
              <li style={{ cursor: 'pointer' }}><Link to="/services/digital-marketing" className="footer-nav-link" onClick={() => window.scrollTo(0, 0)}>Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li><a href="tel:+918360686961" style={{ color: 'inherit', textDecoration: 'none' }} title="Call Digital Drive">+91 83606 86961</a></li>
              <li><a href="mailto:admin@digitaldrivetech.com" style={{ color: 'inherit', textDecoration: 'none' }} title="Email Digital Drive">admin@digitaldrivetech.com</a></li>
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
