import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const buttonClass = `btn ${variant === 'outline' ? 'btn-outline' : ''} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
