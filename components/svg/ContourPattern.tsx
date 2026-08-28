'use client';

import React from 'react';

export const ContourPattern: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
      <g stroke="#00A3E0" strokeWidth="1" fill="none">
        <path d="M -100 100 Q 200 50 400 200 T 900 150" />
        <path d="M -100 150 Q 200 100 400 250 T 900 200" />
        <path d="M -100 200 Q 200 150 400 300 T 900 250" />
        <path d="M -100 250 Q 200 200 400 350 T 900 300" />
        <path d="M -100 300 Q 200 250 400 400 T 900 350" />
      </g>
    </svg>
  );
};
