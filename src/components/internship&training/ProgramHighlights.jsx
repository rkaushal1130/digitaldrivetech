import React from 'react';
import Container from '../ui/Container';
import './ProgramHighlights.css';

export default function ProgramHighlights() {
  const highlights = [
    { icon: 'fas fa-laptop-code', label: 'Live Project Training' },
    { icon: 'fas fa-industry', label: 'Industry Certificate' },
    { icon: 'fas fa-file-alt', label: 'Internship Completion Letter' },
    { icon: 'fas fa-chalkboard-teacher', label: 'Expert Mentorship' },
    { icon: 'fas fa-handshake', label: 'Placement Assistance' },
    { icon: 'fas fa-file-alt', label: 'Resume Building Support' }
  ];

  return (
    <section className="highlights">
      <Container>
        <div className="section-title">
          <p>Program Highlights</p>
          <h2>What You Get</h2>
        </div>
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-icon-wrapper">
                <i className={item.icon}></i>
              </div>
              <h3 className="highlight-title">{item.label}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
