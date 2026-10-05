import React from 'react';
import Container from '../ui/Container';
import './TechStack.css';
import html5Icon from '../../assets/icons/SVG ICONS/html-5.svg';
import css3Icon from '../../assets/icons/SVG ICONS/css3.svg';
import jsIcon from '../../assets/icons/SVG ICONS/javascript-svgrepo-com.svg';
import reactIcon from '../../assets/icons/SVG ICONS/react-svgrepo-com.svg';
import nextIcon from '../../assets/icons/SVG ICONS/next-dot-js-svgrepo-com.svg';
import nodeIcon from '../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import laravelIcon from '../../assets/icons/SVG ICONS/Laravel.svg';
import phpIcon from '../../assets/icons/SVG ICONS/php-svgrepo-com.svg';
import mysqlIcon from '../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';
import firebaseIcon from '../../assets/icons/SVG ICONS/firebase-1-logo-svgrepo-com.svg';

const technologies = [
  { id: 1, logo: html5Icon, name: 'HTML' },
  { id: 2, logo: css3Icon, name: 'CSS' },
  { id: 3, logo: jsIcon, name: 'JavaScript' },
  { id: 4, logo: reactIcon, name: 'React' },
  { id: 5, logo: nextIcon, name: 'Next.js' },
  { id: 6, logo: nodeIcon, name: 'Node.js' },
  { id: 7, logo: laravelIcon, name: 'Laravel' },
  { id: 8, logo: phpIcon, name: 'PHP' },
  { id: 9, logo: mysqlIcon, name: 'MySQL' },
  { id: 10, logo: firebaseIcon, name: 'Firebase' },
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <Container>
        <div className="tech-stack-header">
          <span className="tech-stack-eyebrow">Technologies We Use</span>
          <h2>Our Tech Stack</h2>
        </div>
        <div className="tech-stack-grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="tech-stack-item">
              <div className="tech-stack-logo">
                <img src={tech.logo} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
