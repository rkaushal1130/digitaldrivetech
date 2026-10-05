import React from 'react';
import { CheckCircle, Users, Target, Star, Zap } from 'lucide-react';
import './OverviewTab.css';

export default function OverviewTab({ overview }) {
  const outcomeIcons = [Target, Zap, Star, CheckCircle, Users];

  return (
    <div className="overview-tab">
      {/* Who is this for */}
      <div className="overview-section">
        <h4 className="overview-section-title">
          <Users size={18} />
          Who Is This Course For?
        </h4>
        <p className="overview-for-whom">{overview.forWhom}</p>
      </div>

      {/* Learning outcomes */}
      <div className="overview-section">
        <h4 className="overview-section-title">
          <Target size={18} />
          Learning Outcomes
        </h4>
        <div className="overview-outcomes">
          {overview.outcomes.map((outcome, i) => {
            const IconComp = outcomeIcons[i % outcomeIcons.length];
            return (
              <div key={i} className="overview-outcome-item">
                <div className="overview-outcome-icon">
                  <IconComp size={15} />
                </div>
                <span>{outcome}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlights */}
      <div className="overview-section">
        <h4 className="overview-section-title">
          <Star size={18} />
          Course Highlights
        </h4>
        <div className="overview-highlights">
          {overview.highlights.map((item, i) => (
            <div key={i} className="overview-highlight-item">
              <CheckCircle size={14} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
