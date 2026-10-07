import React from 'react';
import { Link } from 'react-router-dom';
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
  const services = [
    {
      id: 1,
      icon: <Code2 size={26} />,
      title: 'Custom Website Development',
      description: (
        <>
          We engineer tailored websites designed around your unique business workflows, audience needs and brand identity. Our custom frontend and backend architecture eliminates template bloat, improving page speed and long-term maintainability.
        </>
      )
    },
    {
      id: 2,
      icon: <ShoppingCart size={26} />,
      title: 'E-commerce Website Development',
      description: (
        <>
          Build a dependable online store with customized catalog browsing, intuitive shopping carts, secure payment gateway integrations and order management optimized for desktop and mobile shoppers.
        </>
      )
    },
    {
      id: 3,
      icon: <Globe2 size={26} />,
      title: 'CMS & WordPress Development',
      description: (
        <>
          Structured WordPress and content management systems featuring intuitive administration dashboards, flexible layout controls, responsive design and clean semantic code for effortless content publishing.
        </>
      )
    },
    {
      id: 4,
      icon: <Smartphone size={26} />,
      title: 'Responsive Website Development',
      description: (
        <>
          Mobile-first website development ensuring fast rendering, intuitive touch interactions, and consistent visual layouts that deliver a seamless{' '}
          <Link to="/ui-ux-design" title="UI/UX Design Services" className="webdev-inline-link">
            user experience
          </Link>{' '}
          across smartphones, tablets and desktops.
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
          and business portals engineered with scalable databases, secure authentication and API integrations to streamline internal processes.
        </>
      )
    },
    {
      id: 6,
      icon: <RefreshCw size={26} />,
      title: 'Website Redesign & Maintenance',
      description: (
        <>
          Revitalize an outdated web presence with modern responsive layouts, faster loading speeds, security updates and technical SEO improvements while preserving your established content and brand reputation.
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
          <Button to="/contact">
            Discuss Your Website Project <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
