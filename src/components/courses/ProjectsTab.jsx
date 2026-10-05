import React from 'react';
import { FolderKanban, ExternalLink } from 'lucide-react';
import './ProjectsTab.css';

export default function ProjectsTab({ projects }) {
  return (
    <div className="projects-tab">
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-card-icon">
              <FolderKanban size={18} />
            </div>
            <span className="project-card-title">{project}</span>
            <ExternalLink size={14} className="project-card-link" />
          </div>
        ))}
      </div>
    </div>
  );
}
