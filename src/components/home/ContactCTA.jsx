// import React from 'react';
// import Container from '../ui/Container';
// import Button from '../ui/Button';
// import { scrollToSection } from '../../utils/scrollUtils';
// import './ContactCTA.css';
// import { useNavigate, useLocation } from 'react-router-dom';
// export default function ContactCTA() {
//   const navigate = useNavigate();
//    const handleContactClick = () => {
//     navigate('/contact');
//     window.scrollTo(0, 0);
//   };
//   const handleNavClick = (sectionId) => {
//       if (location.pathname === '/') {
//         scrollToSection(sectionId);
//       } else {
//         navigate('/');
//         setTimeout(() => scrollToSection(sectionId), 100);
//       }
//     };
//   return (
//      <div className="pricing-cta-wrap">
//           <Container>
//             <div className="pricing-cta">
//               <div className="pricing-cta-left">
//                 <div className="pricing-cta-rocket">🚀</div>
//                 <div>
//                   <h2>Have a project in mind?</h2>
//                   <p>Let's build something amazing together.</p>
//                 </div>
//               </div>
//               <div className="pricing-cta-right">
//                 <Button>Get a Free Quote</Button>
//                 <Button variant="outline"onClick={handleContactClick} className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Button>
//               </div>
//             </div>
//           </Container>
//         </div>
   
//   );
// }

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
// import { scrollToSection } from '../../utils/scrollUtils';
import './ContactCTA.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ContactCTA() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // const handleQuoteClick = () => {
  //   if (location.pathname === '/') {
  //     scrollToSection('contact');
  //   } else {
  //     navigate('/');
  //     setTimeout(() => {
  //       scrollToSection('contact');
  //     }, 100);
  //   }
  // };

  return (
    <div className="pricing-cta-wrap">
      <Container>
        <div className="pricing-cta">
          <div className="pricing-cta-left">
            <div className="pricing-cta-rocket">🚀</div>
            <div>
              <h2>Have a project in mind?</h2>
              <p>Let's build something amazing together.</p>
            </div>
          </div>

          <div className="pricing-cta-right">
            <Button onClick={() => navigate('/contact#contact-form')}>
              Get a Free Quote
            </Button>

            <Button
              variant="outline"
              onClick={handleContactClick}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>  
    </div>
  );
}