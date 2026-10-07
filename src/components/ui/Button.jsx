import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ children, variant = 'primary', href, to, onClick, className = '' }) {
  const buttonClass = `btn ${variant === 'outline' ? 'btn-outline' : ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick}>
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
