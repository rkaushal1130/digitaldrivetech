import React from 'react';
import Container from '../ui/Container';
import { companyStats } from '../../data/stats';
import * as LucideIcons from 'lucide-react';
import './AchievementsBar.css';

const achievements = [
  ...companyStats,
  {
    id: 5,
    icon: 'ThumbsUp',
    value: '100%',
    label: 'Client Satisfaction',
  },
];

export default function AchievementsBar() {
  return (
    <section className="achievements-section">

      <Container><p>Our Achievements</p>

        <div className="achievement-bar">

          <div className="achievement-grid">
            {achievements.map((achievement) => {
              const Icon = LucideIcons[achievement.icon];
              return (
                <div key={achievement.id} className="achievement">
                  <div className="stat-icon">
                    {Icon ? <Icon size={24} /> : achievement.icon}
                  </div>
                  <div>
                    <strong>{achievement.value}</strong>
                    <span>{achievement.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
