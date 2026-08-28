'use client';

import React from 'react';

export const NetworkMapCAD: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[220px] flex items-center justify-center p-2 select-none overflow-hidden bg-slate-50/50 rounded-r-lg">
      <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[260px]">
        {/* Background Subtle Street Grid */}
        <g stroke="#E2E8F0" strokeWidth="0.8">
          <line x1="20" y1="40" x2="300" y2="40" strokeDasharray="4 2" />
          <line x1="20" y1="100" x2="300" y2="100" strokeDasharray="4 2" />
          <line x1="20" y1="160" x2="300" y2="160" strokeDasharray="4 2" />
          <line x1="20" y1="220" x2="300" y2="220" strokeDasharray="4 2" />

          <line x1="60" y1="20" x2="60" y2="260" strokeDasharray="4 2" />
          <line x1="140" y1="20" x2="140" y2="260" strokeDasharray="4 2" />
          <line x1="220" y1="20" x2="220" y2="260" strokeDasharray="4 2" />
        </g>

        {/* Green/Cyan Transit Route Corridors */}
        <g strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Transit Arterial (Blue) */}
          <path d="M 40 240 L 110 170 L 180 140 L 260 70 L 290 40" stroke="#00A3E0" />
          {/* Secondary Corridor (Emerald Green) */}
          <path d="M 50 60 L 120 100 L 180 140 L 220 210 L 280 230" stroke="#10B981" strokeDasharray="4 3" />
          {/* Feeder Connector Line */}
          <path d="M 110 170 L 140 220 L 220 210" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M 120 100 L 180 60 L 260 70" stroke="#38BDF8" strokeWidth="1.5" />
        </g>

        {/* Transit Nodes & Intermodal Stations */}
        <g>
          {/* Central Interchange Node */}
          <circle cx="180" cy="140" r="8" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="2.5" />
          <circle cx="180" cy="140" r="3.5" fill="#00A3E0" />

          {/* Node 1 */}
          <circle cx="110" cy="170" r="6" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="2" />
          <circle cx="110" cy="170" r="2.5" fill="#00A3E0" />

          {/* Node 2 */}
          <circle cx="260" cy="70" r="6" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="2" />
          <circle cx="260" cy="70" r="2.5" fill="#00A3E0" />

          {/* Node 3 (Green) */}
          <circle cx="120" cy="100" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          <circle cx="120" cy="100" r="2" fill="#10B981" />

          {/* Node 4 (Green) */}
          <circle cx="220" cy="210" r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          <circle cx="220" cy="210" r="2" fill="#10B981" />
        </g>

        {/* Micro coordinate markers */}
        <text x="195" y="144" fill="#64748B" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="bold">
          ESTACIÓN INTERMODAL
        </text>
      </svg>
    </div>
  );
};
