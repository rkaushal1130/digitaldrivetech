import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import CourseTabs from './CourseTabs';
import * as LucideIcons from 'lucide-react';
import './CourseModal.css';

export default function CourseModal({ course, onClose }) {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);
  const iconKey = course.icon;
  const CourseIcon = LucideIcons[iconKey] || LucideIcons.BookOpen;

  // Focusable elements selector
  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  // Open animation
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    previousActiveElement.current = document.activeElement;
    return () => {
      previousActiveElement.current?.focus();
    };
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  // ESC and outside click
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') handleClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // Focus trap
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    function handleFocusTrap(e) {
      const focusable = modal.querySelectorAll(focusableSelector);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', handleFocusTrap);
    // Focus first focusable element
    const firstFocusable = modal.querySelector(focusableSelector);
    firstFocusable?.focus();

    return () => document.removeEventListener('keydown', handleFocusTrap);
  }, []);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  function handleApplyNow() {
    setVisible(false);
    setTimeout(() => {
      onClose();
      requestAnimationFrame(() => {
        document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }, 200);
  }

  const infoCards = [
    { label: 'Duration', value: course.duration, icon: 'Clock' },
    { label: 'Mode', value: course.mode, icon: 'Monitor' },
    { label: 'Skill Level', value: course.level, icon: 'BarChart3' },
    { label: 'Certificate', value: course.certificate, icon: 'Award' },
    { label: 'Internship', value: course.internship, icon: 'Briefcase' },
    { label: 'Placement', value: course.placement, icon: 'Target' },
  ];

  const InfoIconComponent = {
    Clock: LucideIcons.Clock,
    Monitor: LucideIcons.Monitor,
    BarChart3: LucideIcons.BarChart3,
    Award: LucideIcons.Award,
    Briefcase: LucideIcons.Briefcase,
    Target: LucideIcons.Target,
  };

  return createPortal(
    <div
      className={`course-modal-backdrop ${visible ? 'course-modal-backdrop--visible' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${course.title} course details`}
    >
      <div
        ref={modalRef}
        className={`course-modal ${visible ? 'course-modal--visible' : ''}`}
      >
        {/* Close button */}
        <button
          className="course-modal-close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Top section */}
        <div className="course-modal-header">
          <div className="course-modal-header-icon">
            <CourseIcon size={36} />
          </div>
          <h2 className="course-modal-title">{course.title}</h2>
          <p className="course-modal-desc">{course.description}</p>
        </div>

        {/* Info cards */}
        <div className="course-modal-info">
          {infoCards.map((info) => {
            const InfoIcon = InfoIconComponent[info.icon];
            return (
              <div key={info.label} className="course-modal-info-card">
                <div className="course-modal-info-icon">
                  {InfoIcon && <InfoIcon size={16} />}
                </div>
                <div className="course-modal-info-text">
                  <span className="course-modal-info-label">{info.label}</span>
                  <span className="course-modal-info-value">{info.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <CourseTabs course={course} />

        {/* CTA Section */}
        <div className="course-modal-cta">
          <div className="course-modal-cta-text">
            <h4>Ready to Start Your Journey?</h4>
            <p>Take the first step toward your dream career today.</p>
          </div>
          <div className="course-modal-cta-buttons">
            <button className="course-modal-cta-btn course-modal-cta-btn--primary" onClick={handleApplyNow}>
              <LucideIcons.Send size={16} />
              Apply Now
            </button>
            <button className="course-modal-cta-btn course-modal-cta-btn--outline">
              <LucideIcons.Download size={16} />
              Download Syllabus
            </button>
            <button className="course-modal-cta-btn course-modal-cta-btn--ghost">
              <LucideIcons.Phone size={16} />
              Call Now
            </button>
            <button className="course-modal-cta-btn course-modal-cta-btn--whatsapp">
              <LucideIcons.MessageCircle size={16} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
