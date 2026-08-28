'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const RoundaboutDiagram: React.FC = () => {
  return (
    <div className="w-full aspect-[16/9] bg-[#080C14] border border-slate-800 rounded p-4 relative overflow-hidden engineering-grid-dark">
      {/* Micro Status Label */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-polosur-cyan animate-ping"></span>
        <span className="text-slate-400">ROTONDA MULTICARRIL - MODELACIÓN O-D</span>
      </div>

      <svg viewBox="0 0 400 220" className="w-full h-full">
        {/* Outer Ring & Arms */}
        {/* Central Island */}
        <circle cx="200" cy="110" r="34" fill="#0F172A" stroke="#00A3E0" strokeWidth="1.5" />
        <circle cx="200" cy="110" r="54" fill="none" stroke="#1E293B" strokeWidth="20" opacity="0.6" />
        <circle cx="200" cy="110" r="64" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" />

        {/* Access Arms */}
        {/* West Arm */}
        <rect x="0" y="96" width="136" height="28" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
        {/* East Arm */}
        <rect x="264" y="96" width="136" height="28" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
        {/* North Arm */}
        <rect x="186" y="0" width="28" height="46" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
        {/* South Arm */}
        <rect x="186" y="174" width="28" height="46" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />

        {/* Dynamic Circulating Vehicle Flow (Circular animation path) */}
        <motion.path
          d="M 200 46 A 64 64 0 1 1 199.9 46"
          fill="none"
          stroke="#00A3E0"
          strokeWidth="3"
          strokeDasharray="8 6"
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />

        {/* Entry trajectory from West */}
        <path d="M 0 116 L 136 116 Q 160 116 160 140" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Entry trajectory from East */}
        <path d="M 400 104 L 264 104 Q 240 104 240 80" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Center Node Tag */}
        <circle cx="200" cy="110" r="14" fill="#080C14" stroke="#00A3E0" strokeWidth="1" />
        <text x="200" y="113" textAnchor="middle" fill="#00A3E0" fontSize="8" fontWeight="bold" fontFamily="Space Mono, monospace">
          SIDRA
        </text>

        {/* Telemetry markers */}
        <g transform="translate(10, 190)">
          <text fill="#64748B" fontSize="8" fontFamily="Space Mono, monospace">CAPACIDAD RESERVA: +28%</text>
        </g>
        <g transform="translate(280, 190)">
          <text fill="#38BDF8" fontSize="8" fontFamily="Space Mono, monospace">GRADO SATURACIÓN: 0.68</text>
        </g>
      </svg>
    </div>
  );
};
