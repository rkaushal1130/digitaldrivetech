import React from 'react';
import Container from '../../ui/Container';
import './UIUXTechStack.css';

export default function UIUXTechStack() {
  const toolCategories = [
    {
      category: 'DESIGN & LAYOUT',
      items: [
        { name: 'Figma', iconClass: 'fa-brands fa-figma' },
        { name: 'Adobe XD', iconClass: 'fa-brands fa-adobe' },
        { name: 'Photoshop', iconClass: 'fa-solid fa-image' },
        { name: 'Illustrator', iconClass: 'fa-solid fa-bezier-curve' },
      ],
    },
    {
      category: 'PROTOTYPING & TESTING',
      items: [
        { name: 'InVision / Marvel', iconClass: 'fa-solid fa-mobile-screen' },
        { name: 'Maze', iconClass: 'fa-solid fa-vial' },
        { name: 'Zeplin', iconClass: 'fa-solid fa-layer-group' },
        { name: 'Figma Mirror', iconClass: 'fa-solid fa-play' },
      ],
    },
    {
      category: 'COLLABORATION & RESEARCH',
      items: [
        { name: 'Miro', iconClass: 'fa-solid fa-diagram-project' },
        { name: 'Canva', iconClass: 'fa-solid fa-palette' },
        { name: 'Google Forms', iconClass: 'fa-solid fa-list-check' },
        { name: 'Slack / Teams', iconClass: 'fa-solid fa-comments' },
      ],
    },
  ];

  return (
    <section className="uiux-tech-section">
      <Container>
        <div className="uiux-tech-card">
          <div className="uiux-tech-header">
            <h2>TOOLS &amp; TECHNOLOGIES WE USE</h2>
          </div>

          <div className="uiux-tech-columns">
            {toolCategories.map((cat, idx) => (
              <div key={idx} className="uiux-tech-column">
                <div className="uiux-tech-cat-header">
                  <span className="uiux-tech-cat-title">{cat.category}</span>
                </div>
                <div className="uiux-tech-list">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="uiux-tech-item">
                      <div className="uiux-tech-icon-box">
                        <i className={item.iconClass}></i>
                      </div>
                      <span className="uiux-tech-name">{item.name}</span>
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
