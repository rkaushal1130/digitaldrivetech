import React from 'react';
import * as LucideIcons from 'lucide-react';
import './CurriculumTab.css';

export default function CurriculumTab({ curriculum }) {
  return (
    <div className="curriculum-tab">
      <div className="curriculum-grid">
        {curriculum.map((module, i) => {
          const ModIcon = LucideIcons[module.icon] || LucideIcons.BookOpen;
          return (
            <div key={i} className="curriculum-card">
              <div className="curriculum-card-number">0{i + 1}</div>
              <div className="curriculum-card-icon">
                <ModIcon size={20} />
              </div>
              <h4 className="curriculum-card-title">{module.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
