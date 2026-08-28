'use client';

import React from 'react';

interface ProjectWireframeProps {
  type: 'urban' | 'highway' | 'industrial';
  title: string;
  code: string;
}

export const ProjectWireframe: React.FC<ProjectWireframeProps> = ({ type, title, code }) => {
  return (
    <div className="w-full h-44 bg-[#080C14] border-b border-slate-800 relative overflow-hidden engineering-grid-dark flex flex-col justify-between p-4 group-hover:border-polosur-cyan/40 transition-colors">
      {/* Header bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
        <span className="bg-slate-900 border border-slate-800 text-polosur-cyan px-2 py-0.5 rounded">
          {code}
        </span>
        <span className="tracking-widest uppercase text-slate-500">CAD WIREFRAME v2.4</span>
      </div>

      {/* Vector Wireframe content based on project type */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
        <svg viewBox="0 0 320 140" className="w-full h-full p-2">
          {type === 'urban' && (
            <g>
              {/* Urban Grid Blocks */}
              <rect x="20" y="20" width="80" height="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="120" y="20" width="80" height="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="220" y="20" width="80" height="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="20" y="80" width="80" height="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="120" y="80" width="80" height="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="220" y="80" width="80" height="40" fill="none" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />

              {/* Main Corridor lines */}
              <line x1="0" y1="70" x2="320" y2="70" stroke="#00A3E0" strokeWidth="2" />
              <line x1="110" y1="0" x2="110" y2="140" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="210" y1="0" x2="210" y2="140" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Signalized nodes */}
              <circle cx="110" cy="70" r="8" fill="#080C14" stroke="#00A3E0" strokeWidth="1.5" />
              <circle cx="210" cy="70" r="8" fill="#080C14" stroke="#00A3E0" strokeWidth="1.5" />
            </g>
          )}

          {type === 'highway' && (
            <g>
              {/* Highway Interchange Curves */}
              <path d="M 10 120 Q 160 10 310 120" fill="none" stroke="#00A3E0" strokeWidth="2" />
              <path d="M 10 20 Q 160 130 310 20" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="160" cy="70" r="30" fill="none" stroke="#1E293B" strokeWidth="2" />
              <circle cx="160" cy="70" r="6" fill="#00A3E0" />
            </g>
          )}

          {type === 'industrial' && (
            <g>
              {/* Logistics Hub Dock Turning Radii */}
              <rect x="30" y="20" width="260" height="80" fill="none" stroke="#1E293B" strokeWidth="1.5" />
              {/* Swept Path Arcs for WB-20 Truck */}
              <path d="M 50 100 Q 100 40 180 40" fill="none" stroke="#00A3E0" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M 70 100 Q 120 60 180 60" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Dock Bays */}
              <rect x="180" y="30" width="20" height="40" fill="none" stroke="#00A3E0" strokeWidth="1" />
              <rect x="210" y="30" width="20" height="40" fill="none" stroke="#00A3E0" strokeWidth="1" />
              <rect x="240" y="30" width="20" height="40" fill="none" stroke="#00A3E0" strokeWidth="1" />
            </g>
          )}
        </svg>
      </div>

      {/* Footer code overlay */}
      <div className="z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="text-white font-bold tracking-wider">{title}</span>
        <span className="text-emerald-400 font-semibold">APROBADO SEIM</span>
      </div>
    </div>
  );
};
