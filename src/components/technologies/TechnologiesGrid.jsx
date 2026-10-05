import React from 'react';
import Container from '../ui/Container';
import './TechnologiesGrid.css';
import html5Icon from '../../assets/icons/SVG ICONS/html-5.svg';
import css3Icon from '../../assets/icons/SVG ICONS/css3.svg';
import jsIcon from '../../assets/icons/SVG ICONS/javascript-svgrepo-com.svg';
import reactIcon from '../../assets/icons/SVG ICONS/react-svgrepo-com.svg';
import nextIcon from '../../assets/icons/SVG ICONS/next-dot-js-svgrepo-com.svg';
import nodeIcon from '../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import phpIcon from '../../assets/icons/SVG ICONS/php-svgrepo-com.svg';
import laravelIcon from '../../assets/icons/SVG ICONS/Laravel.svg';
import mysqlIcon from '../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';
import firebaseIcon from '../../assets/icons/SVG ICONS/firebase-1-logo-svgrepo-com.svg';

const technologiesData = [
  {
    id: 1,
    name: 'HTML5',
    description: 'For building the structure of modern and responsive web applications.',
    icon: html5Icon,
    //color: '#e44d26',
  },
  {
    id: 2,
    name: 'CSS3',
    description: 'For styling, animations and creating beautiful user interfaces.',
    icon: css3Icon,
    //color: '#1572b6',
  },
  {
    id: 3,
    name: 'JavaScript',
    description: 'For adding interactivity and dynamic behavior to web applications.',
    icon: jsIcon,
   // color: '#f7df1e',
  },
  {
    id: 4,
    name: 'React',
    description: 'For building fast, scalable and interactive user interfaces.',
    icon: reactIcon,
    //color: '#61dafb',
  },
  {
    id: 5,
    name: 'Next.js',
    description: 'For building powerful web applications with server-side rendering.',
    icon: nextIcon,
    //color: '#000',
  },
  {
    id: 6,
    name: 'Node.js',
    description: 'For building fast, scalable and efficient server-side applications.',
    icon: nodeIcon,
    //color: '#3c873a',
  },
  {
    id: 7,
    name: 'PHP',
    description: 'For server-side scripting and building dynamic web solutions.',
    icon: phpIcon,
    //color: '#777bb3',
  },
  {
    id: 8,
    name: 'Laravel',
    description: 'For building secure and elegant PHP web applications.',
    icon: laravelIcon,
    //color: '#ff2d20',
  },
  {
    id: 9,
    name: 'MySQL',
    description: 'For managing and storing data in reliable databases.',
    icon: mysqlIcon,
    //color: '#00618a',
  },
  {
    id: 10,
    name: 'Firebase',
    description: 'For real-time databases, authentication and cloud services.',
    icon: firebaseIcon,
   // color: '#ffca28',
  },
];

export default function TechnologiesGrid() {
  return (
    <section className="technologies-section">
      <Container>
        <div className="technologies-sec-label">Technologies We Use</div>
        <h2 className="technologies-sec-title">Modern Technologies For Modern Solutions</h2>
        <p className="technologies-sec-sub">
          We work with a wide range of technologies and frameworks to deliver robust, scalable and
          future-ready solutions.
        </p>
        <div className="technologies-tgrid">
          {technologiesData.map((tech) => (
            <div key={tech.id} className="technologies-tcard">
              <div
                className="technologies-badge"
                style={{
                  background: tech.color,
                }}
              >
                <img src={tech.icon} alt={tech.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
