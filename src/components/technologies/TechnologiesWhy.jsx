import React from 'react';
import Container from '../ui/Container';
import { Gauge, ShieldCheck, Layers, Code2, Zap } from 'lucide-react';
import './TechnologiesWhy.css';

const whyData = [
  {
    id: 1,
    icon: <Gauge size={24} />,
    title: 'High Performance',
    description: 'Optimized solutions for speed and efficiency.',
  },
  {
    id: 2,
    icon: <ShieldCheck size={24} />,
    title: 'Security First',
    description: 'Built with the latest security standards.',
  },
  {
    id: 3,
    icon: <Layers size={24} />,
    title: 'Scalability',
    description: 'Easily scalable to grow with your business.',
  },
  {
    id: 4,
    icon: <Code2 size={24} />,
    title: 'Clean Code',
    description: 'Maintainable, efficient and well-structured code.',
  },
  {
    id: 5,
    icon: <Zap size={24} />,
    title: 'Better Experience',
    description: 'Enhanced user experience across all devices.',
  },
];

export default function TechnologiesWhy() {
  return (
    <div className="technologies-why-wrap">
      <Container>
        <div className="technologies-why">
          <h2>WHY WE CHOOSE <span>MODERN TECHNOLOGIES?</span></h2>
          <div className="technologies-why-grid">
            {whyData.map((item) => (
              <div key={item.id} className="technologies-why-item">
                <div className="technologies-why-circle">{item.icon}</div>
                <div>
                  <b>{item.title}</b>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
