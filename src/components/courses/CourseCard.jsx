import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import './CourseCard.css';

export default function CourseCard({ course, onClick, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = LucideIcons[course.icon];

  return (
    <div
      className="course-card"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${course.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      style={{ '--card-index': index }}
    >
      <div className={`course-card-icon ${isHovered ? 'course-card-icon--hovered' : ''}`}>
        {IconComponent ? <IconComponent size={28} /> : null}
      </div>

      <h3 className="course-card-title">{course.title}</h3>

      <ul className="course-card-skills">
        {course.curriculum.slice(0, 4).map((mod, i) => (
          <li key={i}>{mod.title}</li>
        ))}
      </ul>

      <div className={`course-card-action ${isHovered ? 'course-card-action--visible' : ''}`}>
        <span>Learn More</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}
