import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import {
  Code2,
  ShoppingCart,
  Globe2,
  Smartphone,
  Layers,
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import './WebDevServicesList.css';

export default function WebDevServicesList() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: <Code2 size={26} />,
      title: 'Custom Website Development',
      description: (
        <>
          Get a website built around your brand, business goals and customer requirements instead of relying on a generic template. Our custom website development approach provides flexibility for future growth and new features.
        </>
      )
    },
    {
      id: 2,
      icon: <ShoppingCart size={26} />,
      title: 'E-commerce Website Development',
      description: (
        <>
          Build an online store with product management, shopping cart, secure checkout and payment integration. We create e-commerce websites designed to provide a smooth shopping experience across desktop and mobile devices.
        </>
      )
    },
    {
      id: 3,
      icon: <Globe2 size={26} />,
      title: 'WordPress Website Development',
      description: (
        <>
          Professional WordPress websites with a flexible content structure, responsive design and SEO-friendly implementation. Suitable for businesses that need an easy-to-manage website.
        </>
      )
    },
    {
      id: 4,
      icon: <Smartphone size={26} />,
      title: 'Responsive Website Development',
      description: (
        <>
          We build mobile-friendly websites that adapt to smartphones, tablets, laptops and desktop screens while maintaining usability and a consistent{' '}
          <Link to="/ui-ux-design" title="UI/UX Design Services" className="webdev-inline-link">
            user experience
          </Link>
          .
        </>
      )
    },
    {
      id: 5,
      icon: <Layers size={26} />,
      title: 'Web Application Development',
      description: (
        <>
          <Link to="/software-development" title="Software & Web Application Development" className="webdev-inline-link">
            Custom web applications
          </Link>{' '}
          and business portals designed around specific workflows, functionality and business requirements.
        </>
      )
    },
    {
      id: 6,
      icon: <RefreshCw size={26} />,
      title: 'Website Redesign & Maintenance',
      description: (
        <>
          Improve an outdated website with a modern responsive interface, better usability and technical improvements while maintaining the existing business content and SEO considerations where possible.
        </>
      )
    }
  ];

  return (
    <section className="webdev-services-list-section" id="website-development-services">
      <Container>
        <div className="webdev-services-list-header">
          <span className="webdev-section-eyebrow">WHAT WE DELIVER</span>
          <h2>Our Website Development Services</h2>
          <p className="webdev-services-list-intro">
            We build professional websites for businesses, startups and organizations with a focus on usability, performance, responsive design and long-term scalability. Choose the website development solution that best fits your business requirements.
          </p>
        </div>

        <div className="webdev-services-cards-grid">
          {services.map((item) => (
            <div key={item.id} className="webdev-service-item-card">
              <div className="webdev-service-item-top">
                <div className="webdev-service-item-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="webdev-service-item-num">0{item.id}</span>
              </div>
              <h3 className="webdev-service-item-title">{item.title}</h3>
              <p className="webdev-service-item-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="webdev-services-list-cta">
          <Button onClick={() => navigate('/contact')}>
            Discuss Your Website Project <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
