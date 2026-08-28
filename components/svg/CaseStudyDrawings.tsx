'use client';

import React from 'react';

export const LasCondesCAD: React.FC = () => {
  return (
    <div className="w-full h-44 bg-slate-50 border-b border-slate-200 overflow-hidden flex items-center justify-center relative">
      <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background cad grid */}
        <g stroke="#E2E8F0" strokeWidth="0.6">
          <line x1="0" y1="45" x2="340" y2="45" />
          <line x1="0" y1="90" x2="340" y2="90" />
          <line x1="0" y1="135" x2="340" y2="135" />
          <line x1="85" y1="0" x2="85" y2="180" />
          <line x1="170" y1="0" x2="170" y2="180" />
          <line x1="255" y1="0" x2="255" y2="180" />
        </g>

        {/* Green landscape zones */}
        <path d="M 20 20 Q 90 40 110 80 L 30 80 Z" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="0.8" />
        <path d="M 230 100 Q 280 90 320 140 L 230 140 Z" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="0.8" />

        {/* Roads and Roundabout */}
        <g stroke="#64748B" strokeWidth="1.2">
          {/* Main Roundabout */}
          <circle cx="170" cy="90" r="45" fill="#FFFFFF" />
          <circle cx="170" cy="90" r="28" fill="#F1F5F9" stroke="#94A3B8" />
          <circle cx="170" cy="90" r="14" fill="#E2E8F0" />

          {/* Radial Access Roads */}
          <line x1="0" y1="75" x2="125" y2="75" />
          <line x1="0" y1="105" x2="125" y2="105" />
          <line x1="215" y1="75" x2="340" y2="75" />
          <line x1="215" y1="105" x2="340" y2="105" />

          <line x1="155" y1="0" x2="155" y2="45" />
          <line x1="185" y1="0" x2="185" y2="45" />
          <line x1="155" y1="135" x2="155" y2="180" />
          <line x1="185" y1="135" x2="185" y2="180" />
        </g>

        {/* Building footprint wireframes */}
        <rect x="30" y="110" width="70" height="50" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <line x1="30" y1="110" x2="100" y2="160" stroke="#CBD5E1" strokeWidth="0.8" />
        <rect x="240" y="20" width="70" height="50" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        <line x1="240" y1="20" x2="310" y2="70" stroke="#CBD5E1" strokeWidth="0.8" />
      </svg>
    </div>
  );
};

export const TemucoCAD: React.FC = () => {
  return (
    <div className="w-full h-44 bg-slate-50 border-b border-slate-200 overflow-hidden flex items-center justify-center relative">
      <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background Network Grid */}
        <g stroke="#E2E8F0" strokeWidth="0.6">
          <circle cx="170" cy="90" r="70" strokeDasharray="3 3" />
          <circle cx="170" cy="90" r="40" strokeDasharray="3 3" />
        </g>

        {/* Node connections */}
        <g strokeWidth="1.5" strokeLinecap="round">
          <line x1="50" y1="70" x2="110" y2="120" stroke="#38BDF8" />
          <line x1="110" y1="120" x2="170" y2="80" stroke="#00A3E0" strokeWidth="2" />
          <line x1="170" y1="80" x2="230" y2="50" stroke="#00A3E0" strokeWidth="2" />
          <line x1="230" y1="50" x2="290" y2="110" stroke="#38BDF8" />
          <line x1="170" y1="80" x2="220" y2="130" stroke="#10B981" />
          <line x1="220" y1="130" x2="290" y2="110" stroke="#10B981" />
          <line x1="110" y1="120" x2="160" y2="150" stroke="#F59E0B" />
          <line x1="160" y1="150" x2="220" y2="130" stroke="#F59E0B" />
          <line x1="100" y1="40" x2="170" y2="80" stroke="#6366F1" />
        </g>

        {/* Nodes */}
        <g fill="#FFFFFF" strokeWidth="2">
          <circle cx="170" cy="80" r="7" stroke="#00A3E0" fill="#00A3E0" />
          <circle cx="110" cy="120" r="5" stroke="#38BDF8" />
          <circle cx="230" cy="50" r="5" stroke="#38BDF8" />
          <circle cx="220" cy="130" r="5" stroke="#10B981" />
          <circle cx="290" cy="110" r="5" stroke="#10B981" />
          <circle cx="50" cy="70" r="4" stroke="#64748B" />
          <circle cx="160" cy="150" r="4" stroke="#F59E0B" />
          <circle cx="100" cy="40" r="4" stroke="#6366F1" />
        </g>
      </svg>
    </div>
  );
};

export const PlantaIndustrialCAD: React.FC = () => {
  return (
    <div className="w-full h-44 bg-slate-50 border-b border-slate-200 overflow-hidden flex items-center justify-center relative">
      <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Site Boundary */}
        <polygon points="40,20 290,15 310,160 30,165" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.2" />

        {/* Green buffer zone around property */}
        <path d="M 45 25 L 285 20 L 305 155 L 35 160 Z" stroke="#86EFAC" strokeWidth="4" strokeDasharray="4 2" fill="none" opacity="0.6" />

        {/* Warehouse Buildings */}
        <rect x="70" y="45" width="100" height="90" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.2" />
        <line x1="70" y1="45" x2="170" y2="135" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="70" y1="135" x2="170" y2="45" stroke="#E2E8F0" strokeWidth="1" />

        <rect x="190" y="45" width="90" height="60" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.2" />

        {/* Parking and Loading Bays */}
        <g stroke="#94A3B8" strokeWidth="0.8">
          <line x1="190" y1="120" x2="280" y2="120" />
          <line x1="190" y1="128" x2="280" y2="128" />
          <line x1="190" y1="136" x2="280" y2="136" />
          <line x1="190" y1="144" x2="280" y2="144" />
        </g>

        {/* Internal circulation road */}
        <path d="M 50 150 L 50 35 L 280 30 L 295 145 Z" stroke="#00A3E0" strokeWidth="1" strokeDasharray="4 2" fill="none" />
      </svg>
    </div>
  );
};
