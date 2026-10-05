import React from 'react';
import Container from '../../ui/Container';

import nodeIcon from '../../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import mysqlIcon from '../../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';
import firebaseIcon from '../../../assets/icons/SVG ICONS/firebase-1-logo-svgrepo-com.svg';

import './MobileDevTechStack.css';

export default function MobileDevTechStack() {
  const techCategories = [
    {
      category: 'FRONTEND',
      items: [
        { name: 'Flutter', iconClass: 'fa-solid fa-mobile-screen' },
        { name: 'React Native', iconClass: 'fa-brands fa-react' },
        { name: 'Swift', iconClass: 'fa-brands fa-apple' },
        { name: 'Kotlin', iconClass: 'fa-brands fa-android' },
      ],
    },
    {
      category: 'BACKEND',
      items: [
        { name: 'Node.js', logo: nodeIcon },
        { name: 'Express.js', iconClass: 'fa-solid fa-server' },
        { name: 'Firebase', logo: firebaseIcon },
        { name: 'Django', iconClass: 'fa-solid fa-code' },
      ],
    },
    {
      category: 'DATABASES',
      items: [
        { name: 'Firebase Firestore', logo: firebaseIcon },
        { name: 'MySQL', logo: mysqlIcon },
        { name: 'MongoDB', iconClass: 'fa-solid fa-leaf' },
        { name: 'PostgreSQL', iconClass: 'fa-solid fa-database' },
      ],
    },
    {
      category: 'APIS & SERVICES',
      items: [
        { name: 'REST API', iconClass: 'fa-solid fa-plug' },
        { name: 'GraphQL', iconClass: 'fa-solid fa-diagram-project' },
        { name: 'Firebase Auth', logo: firebaseIcon },
        { name: 'Google Maps API', iconClass: 'fa-solid fa-location-dot' },
      ],
    },
    {
      category: 'TOOLS & PLATFORMS',
      items: [
        { name: 'Android Studio', iconClass: 'fa-brands fa-android' },
        { name: 'Xcode', iconClass: 'fa-brands fa-apple' },
        { name: 'VS Code', iconClass: 'fa-solid fa-code' },
        { name: 'Figma', iconClass: 'fa-brands fa-figma' },
      ],
    },
    {
      category: 'CLOUD & DEVOPS',
      items: [
        { name: 'AWS', iconClass: 'fa-brands fa-aws' },
        { name: 'Google Cloud', iconClass: 'fa-brands fa-google' },
        { name: 'Docker', iconClass: 'fa-brands fa-docker' },
        { name: 'GitHub', iconClass: 'fa-brands fa-github' },
      ],
    },
  ];

  return (
    <section className="mobiledev-tech-section">
      <Container>
        <div className="mobiledev-tech-card">
          <div className="mobiledev-tech-header">
            <h2>TECHNOLOGIES WE USE</h2>
          </div>

          <div className="mobiledev-tech-columns">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="mobiledev-tech-column">
                <div className="mobiledev-tech-cat-header">
                  <span className="mobiledev-tech-cat-title">{cat.category}</span>
                </div>
                <div className="mobiledev-tech-list">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="mobiledev-tech-item">
                      <div className="mobiledev-tech-icon-box">
                        {item.logo ? (
                          <img src={item.logo} alt={item.name} className="mobiledev-tech-logo-img" />
                        ) : (
                          <i className={item.iconClass || 'fa-solid fa-code'}></i>
                        )}
                      </div>
                      <span className="mobiledev-tech-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
