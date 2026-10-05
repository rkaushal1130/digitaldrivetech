import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Search, MousePointer, Share2, Sparkles, ArrowRight } from 'lucide-react';
import './DigiMarkServicesList.css';

const servicesData = [
  {
    id: 1,
    num: '01',
    title: 'SEO (Search Engine Optimization)',
    description: 'Improve search rankings, organic traffic, and online visibility.',
    icon: <Search size={26} />,
    path: '/services/seo',
  },
  {
    id: 2,
    num: '02',
    title: 'PPC (Pay Per Click)',
    description: 'Reach potential customers through targeted, performance-focused paid advertising.',
    icon: <MousePointer size={26} />,
    path: '/contact',
  },
  {
    id: 3,
    num: '03',
    title: 'SMM (Social Media Marketing)',
    description: 'Build brand awareness and engage your target audience.',
    icon: <Share2 size={26} />,
    path: '/services/social-media-marketing',
  },
  {
    id: 4,
    num: '04',
    title: 'SMO (Social Media Optimization)',
    description: 'We optimize your social media to improve organic visibility, engagement, followers, and brand awareness organically.',
    icon: <Sparkles size={26} />,
    path: '/contact',
  },
];

export default function DigiMarkServicesList() {
  const navigate = useNavigate();

  return (
    <section className="digimark-services-section" id="digital-marketing-services">
      <Container>
        <div className="digimark-services-header">
          <div className="digimark-services-tag">OUR DIGITAL MARKETING SERVICES</div>
          <h2 className="digimark-services-title">Here are our digital marketing services:</h2>
          <p className="digimark-services-subtitle">
            At Digital Drive Resource Tech Private Limited (DigitalDriveTech), we provide digital marketing services that are designed to increase online visibility, reach the right audience, and support business growth.
          </p>
        </div>

        <div className="digimark-services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="digimark-service-card">
              <div className="digimark-service-top">
                <div className="digimark-service-icon">{service.icon}</div>
                <span className="digimark-service-num">{service.num}</span>
              </div>
              <h3 className="digimark-service-name">{service.title}</h3>
              <p className="digimark-service-desc">{service.description}</p>
              <div className="digimark-service-action">
                <Button
                  variant="outline"
                  onClick={() => navigate(service.path)}
                  className="digimark-explore-btn"
                >
                  Explore more <ArrowRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
