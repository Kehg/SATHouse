import React from 'react';

export default function SATHouseLogo({ className = '', style = {}, ...props }) {
  return (
    <span className={`inline-flex items-center font-bold text-2xl select-none ${className}`} style={style} aria-label="SATHouse Logo" {...props}>
      <span style={{ color: '#3887FF' }}>SAT</span>
      <span style={{ color: '#222', marginLeft: 2 }}>House</span>
      <svg
        viewBox="0 0 64 64"
        width="32"
        height="32"
        className="ml-2"
        aria-hidden="true"
        focusable="false"
        style={{ display: 'inline', verticalAlign: 'middle' }}
      >
        <path
          d="M8 28L32 8l24 20v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V28z"
          fill="#E2A93B"
        />
        <rect x="26" y="36" width="12" height="16" rx="2" fill="#fff" />
      </svg>
    </span>
  );
} 