'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const LogoPolosur: React.FC<LogoProps> = ({ className = 'h-14 sm:h-16', isDark = false }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ultima.png"
        alt="Polosur Ingeniería"
        className="h-full w-auto object-contain max-h-20 drop-shadow-md transition-transform duration-200 hover:scale-102"
      />
    </div>
  );
};
