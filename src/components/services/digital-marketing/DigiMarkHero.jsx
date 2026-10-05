import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { MapPin, Award, FileCheck, Handshake, Globe2, ArrowRight } from 'lucide-react';
import digiMarkHeroImg from '../../../assets/images/services-new-addons/Digital Marketing (2).webp';
import './DigiMarkHero.css';

export default function DigiMarkHero() {
  const navigate = useNavigate();

  const heroPillars = [
    {
      id: 1,
      icon: <Award size={24} />,
      title: 'Top Digital Marketing Company in Mohali',
      description:
        'Are you looking for a Top Digital Marketing Company in Mohali? At Digital Drive Resource Tech Private Limited (DigitalDriveTech), we know that each business has different needs and objectives. We analyse your business objectives and accordingly develop a business-specific strategy for you.',
    },
    {
      id: 2,
      icon: <FileCheck size={24} />,
      title: 'Transparent Digital Marketing Agency',
      description:
        'Transparency is one of the major elements of Digital Drive Resource Tech Private Limited (DigitalDriveTech). As a digital marketing company, we provide you with transparent reports so that you can understand the performance of your campaigns. This will enable you to have a clear picture of the performance of your campaign.',
    },
    {
      id: 3,
      icon: <Handshake size={24} />,
      title: 'Digital Marketing Partner for Your Business',
      description:
        'No matter whether your business is in the initial stages of its digital marketing or needs to improve its digital presence, you need to find a company that can offer you the best services and strategies for digital marketing. At Digital Drive Resource Tech Private Limited (DigitalDriveTech), our team understands your business needs and works towards developing the digital presence of your business through appropriate digital marketing strategies.',
    },
    {
      id: 4,
      icon: <Globe2 size={24} />,
      title: 'Digital Marketing Services in Mohali',
      description:
        'At Digital Drive Resource Tech Private Limited (DigitalDriveTech), we offer Complete Digital Marketing Services in Mohali in order to help businesses reach their target audience effectively. Whether you wish to target your audience within the city, other cities, states or even countries, we develop a strategy for you according to your business requirements. We work towards reaching the right target audience through result-oriented strategies and techniques. Although results can take time, consistent digital marketing can bring positive results for your business.',
    },
  ];

  const handleExploreClick = () => {
    const el = document.getElementById('digital-marketing-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <section className="digimark-hero">
      <div className="digimark-hero-bg-glow"></div>
      <Container>
        <div className="digimark-hero-grid">
          <div className="digimark-hero-content">
            <div className="digimark-keyword-badge">
              <MapPin size={16} />
              <span>Digital Marketing Company in Mohali</span>
            </div>

            <h1 className="digimark-main-title">
              DIGITAL <span>MARKETING</span>
            </h1>

            <div className="digimark-description">
              <p>
                Are you looking for a <strong>Digital Marketing Company in Mohali</strong> that can understand your business needs and help your business grow digitally?
              </p>
              <p>
                Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a leading company that aims to grow your business and develop an online presence for your business. We understand your business needs and develop appropriate digital marketing strategies for you.
              </p>
              <p>
                If you are looking for the Best Digital Marketing Company in Mohali with a professional approach and effective strategies, then Digital Drive Resource Tech Private Limited (DigitalDriveTech) is a solution for you. We help businesses develop an online presence through effective and strategic digital marketing.
              </p>
            </div>

            <div className="digimark-hero-btns">
              <Button onClick={() => navigate('/contact')}>
                Get Free Consultation <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </Button>
              <Button variant="outline" onClick={handleExploreClick}>
                Explore Services
              </Button>
            </div>
          </div>

          <div className="digimark-hero-visual">
            <div className="digimark-glow-sphere"></div>
            <div className="digimark-hero-image-container">
              <img
                src={digiMarkHeroImg}
                alt="Digital Marketing Digital Drive"
                className="digimark-hero-right-img"
              />
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars within the Hero section */}
        <div className="digimark-hero-pillars">
          {heroPillars.map((pillar) => (
            <div key={pillar.id} className="digimark-pillar-card">
              <div className="digimark-pillar-icon-box">
                {pillar.icon}
              </div>
              <div className="digimark-pillar-body">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
