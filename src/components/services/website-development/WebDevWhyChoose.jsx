import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import {
  Briefcase,
  Smartphone,
  TrendingUp,
  Gauge,
  Code2,
  Rocket,
  MessageSquare,
  Headphones,
  ArrowRight
} from 'lucide-react';
import './WebDevWhyChoose.css';

export default function WebDevWhyChoose() {
  const whyCards = [
    {
      id: 1,
      title: 'Business & Conversion Focused',
      description: (
        <>
          We develop websites around your business goals, target audience and clear user actions. Every layout is planned to present information clearly and generate genuine inquiries.{' '}
          <Link to="/portfolio" title="View our portfolio" className="webdev-why-inline-link">
            Explore our work
          </Link>{' '}
          to see recent projects.
        </>
      ),
      icon: <Briefcase size={28} />,
    },
    {
      id: 2,
      title: 'Responsive & Mobile Usability',
      description: 'Mobile-first layouts ensure consistent navigation, clear typography and effortless usability across smartphones, tablets and desktop screens.',
      icon: <Smartphone size={28} />,
    },
    {
      id: 3,
      title: 'Search-Engine-Friendly Structure',
      description: (
        <>
          We integrate clean semantic HTML, structured metadata and{' '}
          <Link to="/digital-marketing-company-in-mohali" title="Digital Marketing & SEO Services" className="webdev-why-inline-link">
            SEO fundamentals
          </Link>{' '}
          so search engines can easily discover and index your content.
        </>
      ),
      icon: <TrendingUp size={28} />,
    },
    {
      id: 4,
      title: 'Fast Performance & Optimization',
      description: 'Lean code execution, asset compression and optimized page delivery keep page load times fast, reducing bounce rates and improving user retention.',
      icon: <Gauge size={28} />,
    },
    {
      id: 5,
      title: 'Custom Architecture & Security',
      description: 'From secure database handling and protected forms to clean API connections, we engineer custom solutions built with modern web security practices.',
      icon: <Code2 size={28} />,
    },
    {
      id: 6,
      title: 'Scalable & Future-Ready',
      description: 'Our modular code standards make it easy to introduce new features, add pages, or integrate third-party tools as your business grows over time.',
      icon: <Rocket size={28} />,
    },
    {
      id: 7,
      title: 'Transparent Communication',
      description: 'We keep communication direct and structured throughout the development process, with clear project milestones and realistic delivery timelines.',
      icon: <MessageSquare size={28} />,
    },
    {
      id: 8,
      title: 'Ongoing Maintenance & Support',
      description: 'We offer post-launch technical assistance, system updates, and continuous improvements to ensure your website remains reliable and secure.',
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <section className="webdev-why-section" id="why-choose">
      <Container>
        <div className="webdev-why-card">
          <div className="webdev-why-header">
            <h2>Why Choose Digital Drive for Website Development?</h2>
            <p className="webdev-why-intro">
              A properly developed website does more than look modern—it serves as a core business tool that supports user trust, search visibility and customer conversions. We deliver professional website development services in Mohali and across India, focusing on technical standards, responsive usability and long-term scalability.
            </p>
          </div>

          <div className="webdev-why-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="webdev-why-item">
                <div className="webdev-why-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="webdev-why-title">{card.title}</h3>
                <p className="webdev-why-desc">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="webdev-why-cta">
            <Button to="/contact">
              Discuss Your Website Project <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
