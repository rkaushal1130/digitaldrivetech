import React from 'react';
import Container from '../../ui/Container';

import html5Icon from '../../../assets/icons/SVG ICONS/html-5.svg';
import css3Icon from '../../../assets/icons/SVG ICONS/css3.svg';
import jsIcon from '../../../assets/icons/SVG ICONS/javascript-svgrepo-com.svg';
import reactIcon from '../../../assets/icons/SVG ICONS/react-svgrepo-com.svg';
import nextIcon from '../../../assets/icons/SVG ICONS/next-dot-js-svgrepo-com.svg';
import nodeIcon from '../../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import laravelIcon from '../../../assets/icons/SVG ICONS/Laravel.svg';
import phpIcon from '../../../assets/icons/SVG ICONS/php-svgrepo-com.svg';
import mysqlIcon from '../../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';
import firebaseIcon from '../../../assets/icons/SVG ICONS/firebase-1-logo-svgrepo-com.svg';

import './WebDevTechStack.css';

export default function WebDevTechStack() {
  const techCategories = [
    {
      category: 'FRONTEND',
      items: [
        { name: 'HTML5', logo: html5Icon },
        { name: 'CSS3', logo: css3Icon },
        { name: 'JavaScript (ES6+)', logo: jsIcon },
        { name: 'React.js', logo: reactIcon },
        { name: 'Next.js', logo: nextIcon },
        { name: 'Tailwind CSS', iconClass: 'fa-brands fa-css3-alt' },
      ],
    },
    {
      category: 'BACKEND',
      items: [
        { name: 'Node.js', logo: nodeIcon },
        { name: 'Express.js', iconClass: 'fa-solid fa-server' },
        { name: 'Laravel', logo: laravelIcon },
        { name: 'Python', iconClass: 'fa-brands fa-python' },
        { name: 'Django', iconClass: 'fa-solid fa-code' },
        { name: 'PHP', logo: phpIcon },
      ],
    },
    {
      category: 'DATABASES',
      items: [
        { name: 'MongoDB', iconClass: 'fa-solid fa-leaf' },
        { name: 'MySQL', logo: mysqlIcon },
        { name: 'PostgreSQL', iconClass: 'fa-solid fa-database' },
        { name: 'Firebase', logo: firebaseIcon },
        { name: 'Redis', iconClass: 'fa-solid fa-memory' },
      ],
    },
    {
      category: 'CMS & PLATFORMS',
      items: [
        { name: 'WordPress', iconClass: 'fa-brands fa-wordpress' },
        { name: 'Shopify', iconClass: 'fa-brands fa-shopify' },
        { name: 'Webflow', iconClass: 'fa-solid fa-globe' },
        { name: 'Strapi', iconClass: 'fa-solid fa-cubes' },
        { name: 'Wix', iconClass: 'fa-solid fa-w' },
      ],
    },
    {
      category: 'CLOUD & DEVOPS',
      items: [
        { name: 'AWS', iconClass: 'fa-brands fa-aws' },
        { name: 'Google Cloud', iconClass: 'fa-brands fa-google' },
        { name: 'Docker', iconClass: 'fa-brands fa-docker' },
        { name: 'GitHub', iconClass: 'fa-brands fa-github' },
        { name: 'Vercel', iconClass: 'fa-solid fa-triangle-circle-square' },
      ],
    },
  ];

  return (
    <section className="webdev-tech-section">
      <Container>
        <div className="webdev-tech-card">
          <div className="webdev-tech-header">
            <h2>TECHNOLOGIES WE USE</h2>
          </div>

          <div className="webdev-tech-columns">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="webdev-tech-column">
                <div className="webdev-tech-cat-header">
                  <span className="webdev-tech-cat-title">{cat.category}</span>
                </div>
                <div className="webdev-tech-list">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="webdev-tech-item">
                      <div className="webdev-tech-icon-box">
                        {item.logo ? (
                          <img src={item.logo} alt={item.name} className="webdev-tech-logo-img" />
                        ) : (
                          <i className={item.iconClass || 'fa-solid fa-code'}></i>
                        )}
                      </div>
                      <span className="webdev-tech-name">{item.name}</span>
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
