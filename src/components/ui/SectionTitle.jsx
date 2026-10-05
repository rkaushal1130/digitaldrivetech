import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({ tag, title, description }) {
  return (
    <div className="section-header">
      {tag && <div className="section-tag">{tag}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
