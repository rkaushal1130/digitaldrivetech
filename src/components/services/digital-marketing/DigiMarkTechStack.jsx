import React from 'react';
import Container from '../../ui/Container';
import './DigiMarkTechStack.css';

export default function DigiMarkTechStack() {
  const tools = [
    { name: 'Google Analytics', iconClass: 'fa-solid fa-chart-simple' },
    { name: 'Google Ads', iconClass: 'fa-solid fa-rectangle-ad' },
    { name: 'Search Console', iconClass: 'fa-solid fa-magnifying-glass-chart' },
    { name: 'SEMrush', iconClass: 'fa-solid fa-fire' },
    { name: 'Ahrefs', iconClass: 'fa-solid fa-magnifying-glass-dollar' },
    { name: 'Meta Business Suite', iconClass: 'fa-brands fa-meta' },
    { name: 'HubSpot', iconClass: 'fa-solid fa-circle-nodes' },
    { name: 'Mailchimp', iconClass: 'fa-solid fa-envelope-open-text' },
    { name: 'Canva', iconClass: 'fa-solid fa-palette' },
    { name: 'Hootsuite', iconClass: 'fa-solid fa-share-nodes' },
  ];

  return (
    <section className="digimark-tech-section">
      <Container>
        <div className="digimark-tech-card">
          <div className="digimark-tech-header">
            <h2>TOOLS & TECHNOLOGIES WE USE</h2>
          </div>

          <div className="digimark-tech-grid">
            {tools.map((tool, idx) => (
              <div key={idx} className="digimark-tech-item">
                <div className="digimark-tech-icon-box">
                  <i className={tool.iconClass}></i>
                </div>
                <span className="digimark-tech-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
