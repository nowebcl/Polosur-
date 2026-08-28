'use client';

import React from 'react';

export const RoundaboutCAD: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[220px] flex items-center justify-center p-2 select-none overflow-hidden bg-slate-50/50 rounded-r-lg">
      <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]">
        {/* Background CAD Grid */}
        <g stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3">
          <line x1="0" y1="70" x2="320" y2="70" />
          <line x1="0" y1="140" x2="320" y2="140" />
          <line x1="0" y1="210" x2="320" y2="210" />
          <line x1="80" y1="0" x2="80" y2="280" />
          <line x1="160" y1="0" x2="160" y2="280" />
          <line x1="240" y1="0" x2="240" y2="280" />
        </g>

        {/* CAD Drafting Building Blocks & Plots */}
        <g stroke="#CBD5E1" strokeWidth="1" fill="#F8FAFC">
          <rect x="20" y="20" width="80" height="70" />
          <rect x="220" y="20" width="80" height="70" />
          <rect x="20" y="190" width="80" height="70" />
          <rect x="220" y="190" width="80" height="70" />
        </g>

        {/* Roundabout Geometry */}
        <g stroke="#94A3B8" strokeWidth="1.2">
          {/* Approach Arms */}
          <rect x="135" y="0" width="50" height="85" fill="#FFFFFF" />
          <rect x="135" y="195" width="50" height="85" fill="#FFFFFF" />
          <rect x="0" y="115" width="85" height="50" fill="#FFFFFF" />
          <rect x="235" y="115" width="85" height="50" fill="#FFFFFF" />

          {/* Outer Ring */}
          <circle cx="160" cy="140" r="65" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Circulating Lane Marking */}
          <circle cx="160" cy="140" r="50" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 3" fill="none" />
          {/* Center Island */}
          <circle cx="160" cy="140" r="32" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="160" cy="140" r="18" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        </g>

        {/* Blue Traffic Flow Trajectories & Arrows */}
        <g stroke="#00A3E0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* North entry into circle */}
          <path d="M 150 10 L 150 85 Q 150 100 130 115" markerEnd="url(#rbArrow)" />
          {/* Circular circulating flow */}
          <path d="M 160 88 A 52 52 0 1 1 159 88" strokeDasharray="5 3" fill="none" />
          {/* South entry and right turn */}
          <path d="M 170 270 L 170 195 Q 170 170 200 150 L 300 150" markerEnd="url(#rbArrow)" />
          {/* West through flow */}
          <path d="M 20 130 L 100 130 Q 140 130 150 170 L 150 270" markerEnd="url(#rbArrow)" />
        </g>

        <defs>
          <marker id="rbArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#00A3E0" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};
