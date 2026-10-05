import React from 'react';
import Container from '../../ui/Container';
import { Search, ThumbsUp, Mail, BarChart2, MousePointer, FileText, Filter, ShieldCheck } from 'lucide-react';
import logoImage from '../../../assets/icons/logo.png';
import './DigiMarkAbout.css';

export default function DigiMarkAbout() {
  const aboutFeatures = [
    {
      id: 1,
      icon: <Search size={28} />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your website ranking on search engines and drive organic traffic that converts.',
    },
    {
      id: 2,
      icon: <ThumbsUp size={28} />,
      title: 'Social Media Marketing (SMM)',
      description: 'Build your brand presence, engage your audience, and grow your business across social platforms.',
    },
    {
      id: 3,
      icon: <Mail size={28} />,
      title: 'Email Marketing',
      description: 'Nurture leads and drive conversions with personalized email campaigns that deliver results.',
    },
    {
      id: 4,
      icon: <BarChart2 size={28} />,
      title: 'Web Analytics & Reporting',
      description: 'Track performance, analyze data, and make informed decisions to improve your marketing ROI.',
    },
    {
      id: 5,
      icon: <MousePointer size={28} />,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Target the right audience with high-converting ads and achieve maximum ROI on your ad spend.',
    },
    {
      id: 6,
      icon: <FileText size={28} />,
      title: 'Content Marketing',
      description: 'Create valuable, relevant content that attracts, engages, and converts your target audience.',
    },
    {
      id: 7,
      icon: <Filter size={28} />,
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Optimize your website and landing pages to increase conversions and maximize business outcomes.',
    },
    {
      id: 8,
      icon: <ShieldCheck size={28} />,
      title: 'Online Reputation Management',
      description: 'Build trust and credibility by managing your online reputation and brand perception.',
    },
  ];

  return (
    <section className="digimark-about-section">
      <Container>
        <div className="digimark-about-card">
          <div className="digimark-about-grid">
            <div className="digimark-about-brand-col">
              <div className="digimark-about-logo-wrapper">
                <img src={logoImage} alt="Digital Drive Resource Tech Logo" className="digimark-about-logo" />
                <h2 className="digimark-about-company-name">DIGITAL DRIVE</h2>
                <span className="digimark-about-company-sub">RESOURCE TECH PRIVATE LIMITED</span>
                <div className="digimark-about-divider"></div>
                <p className="digimark-about-slogan">Driving Digital Innovation</p>
              </div>
            </div>

            <div className="digimark-about-content-col">
              <div className="digimark-about-header">
                <span className="digimark-about-eyebrow">ABOUT OUR DIGITAL MARKETING SERVICES</span>
                <p className="digimark-about-intro">
                  Comprehensive digital marketing solutions designed to increase visibility, engage your audience, and drive measurable business growth.
                </p>
              </div>

              <div className="digimark-about-features-grid">
                {aboutFeatures.map((feature) => (
                  <div key={feature.id} className="digimark-about-feature-item">
                    <div className="digimark-about-feature-icon">{feature.icon}</div>
                    <div className="digimark-about-feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
