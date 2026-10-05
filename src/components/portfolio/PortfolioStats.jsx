import React from 'react';
import Container from '../ui/Container';
import { companyStats } from '../../data/stats';
import * as LucideIcons from 'lucide-react';
import './PortfolioStats.css';

const statsData = [
  ...companyStats.slice(0, 2),
  {
    id: 3,
    icon: 'Rocket',
    value: '100%',
    label: 'Client Satisfaction',
  },
  {
    id: 4,
    icon: 'Globe',
    value: '10+',
    label: 'Industries Served',
  },
];

export default function PortfolioStats() {
  return (
    <div className="portfolio-stats-wrap">
      <Container>
        <div className="portfolio-stats-heading">

          <h2>NUMBERS THAT SPEAK</h2>
        </div>
        <div className="portfolio-stats">
          {statsData.map((stat) => {
            const Icon = LucideIcons[stat.icon];
            return (
              <div key={stat.id} className="portfolio-stat">
                <div className="portfolio-stat-circle">
                  {Icon ? <Icon size={24} /> : stat.icon}
                </div>
                <div>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
