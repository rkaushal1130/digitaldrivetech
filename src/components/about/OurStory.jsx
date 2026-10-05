import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import './OurStory.css';

const milestones = [
  {
    id: 1,
    icon: 'Building',
    year: '2021',
    title: 'Founded',
    description: 'Digital Drive Resource Tech Private Limited was founded with a small team and big ideas.',
  },
  {
    id: 2,
    icon: 'TrendingUp',
    year: '2022',
    title: 'Growth',
    description: 'We grew our team and delivered amazing projects.',
  },
  {
    id: 3,
    icon: 'Globe',
    year: '2023',
    title: 'Expansion',
    description: 'Expanded our services and worked with global clients.',
  },
  {
    id: 4,
    icon: 'Rocket',
    year: '2024+',
    title: 'Future',
    description: 'Continuing our journey to build digital products that inspire.',
  },
];

export default function OurStory() {
  const navigate = useNavigate();
  return (
    <section className="our-story-section">
      <Container>
        <div className="grid-2">
          <div className="story-copy">
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">The Journey Behind Digital Drive Resource Tech Private Limited</h2>
            <p className="section-desc">
              Digital Drive Resource Tech Private Limited was founded with a vision to help businesses succeed in digital world.
              We started as a small team of developers and designers and today we are proud to
              have delivered 50+ successful projects worldwide.
            </p>
            <p className="section-desc story-paragraph">
              We believe in innovation, quality and long-term partnerships. Our goal is to deliver
              solutions that create real impact.
            </p>
            <Button onClick={() => navigate('/contact')}>Let's Work Together</Button>
          </div>

          <div className="story-line">
            {milestones.map((milestone) => {
              const Icon = LucideIcons[milestone.icon];
              return (
                <div key={milestone.id} className="milestone">
                  <div className="mile-icon">
                    {Icon ? <Icon size={24} /> : milestone.icon}
                  </div>
                  <span className="year">{milestone.year}</span>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
