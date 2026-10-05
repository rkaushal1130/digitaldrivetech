import React from 'react';
import Container from '../../ui/Container';

import jsIcon from '../../../assets/icons/SVG ICONS/javascript-svgrepo-com.svg';
import nodeIcon from '../../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import mysqlIcon from '../../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';

import './SoftDevTechStack.css';

export default function SoftDevTechStack() {
  const techCategories = [
    {
      category: 'LANGUAGES',
      items: [
        { name: 'Python', iconClass: 'fa-brands fa-python' },
        { name: 'Java', iconClass: 'fa-brands fa-java' },
        { name: 'C#', iconClass: 'fa-solid fa-hashtag' },
        { name: 'C++', iconClass: 'fa-solid fa-code' },
        { name: 'Go', iconClass: 'fa-solid fa-gear' },
        { name: 'JavaScript', logo: jsIcon },
      ],
    },
    {
      category: 'FRAMEWORKS & RUNTIMES',
      items: [
        { name: 'Node.js', logo: nodeIcon },
        { name: 'Spring Boot', iconClass: 'fa-solid fa-leaf' },
        { name: '.NET Core', iconClass: 'fa-solid fa-cubes' },
        { name: 'Django', iconClass: 'fa-solid fa-code' },
        { name: 'FastAPI', iconClass: 'fa-solid fa-bolt' },
        { name: 'Express.js', iconClass: 'fa-solid fa-server' },
      ],
    },
    {
      category: 'DATABASES',
      items: [
        { name: 'PostgreSQL', iconClass: 'fa-solid fa-database' },
        { name: 'MySQL', logo: mysqlIcon },
        { name: 'MongoDB', iconClass: 'fa-solid fa-leaf' },
        { name: 'Redis', iconClass: 'fa-solid fa-memory' },
        { name: 'Microsoft SQL Server', iconClass: 'fa-solid fa-database' },
      ],
    },
    {
      category: 'CLOUD & DEVOPS',
      items: [
        { name: 'AWS', iconClass: 'fa-brands fa-aws' },
        { name: 'Microsoft Azure', iconClass: 'fa-brands fa-microsoft' },
        { name: 'Google Cloud', iconClass: 'fa-brands fa-google' },
        { name: 'Docker', iconClass: 'fa-brands fa-docker' },
        { name: 'Kubernetes', iconClass: 'fa-solid fa-dharmachakra' },
        { name: 'GitHub Actions', iconClass: 'fa-brands fa-github' },
      ],
    },
  ];

  return (
    <section className="softdev-tech-section">
      <Container>
        <div className="softdev-tech-card">
          <div className="softdev-tech-header">
            <h2>TECHNOLOGIES WE USE</h2>
          </div>

          <div className="softdev-tech-columns">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="softdev-tech-column">
                <div className="softdev-tech-cat-header">
                  <span className="softdev-tech-cat-title">{cat.category}</span>
                </div>
                <div className="softdev-tech-list">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="softdev-tech-item">
                      <div className="softdev-tech-icon-box">
                        {item.logo ? (
                          <img src={item.logo} alt={item.name} className="softdev-tech-logo-img" />
                        ) : (
                          <i className={item.iconClass || 'fa-solid fa-code'}></i>
                        )}
                      </div>
                      <span className="softdev-tech-name">{item.name}</span>
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
