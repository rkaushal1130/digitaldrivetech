import React from 'react';
import { Briefcase, IndianRupee } from 'lucide-react';
import './CareerTab.css';

export default function CareerTab({ career }) {
  return (
    <div className="career-tab">
      <div className="career-grid">
        {career.map((job, i) => (
          <div key={i} className="career-card">
            <div className="career-card-icon">
              <Briefcase size={18} />
            </div>
            <div className="career-card-info">
              <span className="career-card-title">{job.title}</span>
              <span className="career-card-salary">
                <IndianRupee size={12} />
                {job.salary}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="career-note">
        * Salary ranges are indicative and vary based on skills, experience, and company.
      </div>
    </div>
  );
}
