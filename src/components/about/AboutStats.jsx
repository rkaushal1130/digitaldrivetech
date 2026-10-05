import React from 'react';
import Container from '../ui/Container';
import { companyStats as stats } from '../../data/stats';
import * as LucideIcons from 'lucide-react';
import './AboutStats.css';

export default function AboutStats() {
  return (
    <div className="floating-stats">
      <Container>
        <div className="stats-card">
          {stats.map((stat) => {
            const Icon = LucideIcons[stat.icon];
            return (
              <div key={stat.id} className="stat-item">
                <div className="stat-icon">
                  {Icon ? <Icon size={24} /> : stat.icon}
                </div>
                <div className="stat-content">
                  <strong>{stat.value}</strong>
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
