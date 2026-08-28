'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const MitigationDiagram: React.FC = () => {
  return (
    <div className="w-full aspect-[16/9] bg-[#080C14] border border-slate-800 rounded p-4 relative overflow-hidden engineering-grid-dark">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span className="text-slate-400">IMIV - MITIGACIÓN DE CAPACIDAD DE RED (SIN PROYECTO vs CON PROYECTO)</span>
      </div>

      <svg viewBox="0 0 400 220" className="w-full h-full">
        {/* Grid lines */}
        <line x1="40" y1="30" x2="40" y2="180" stroke="#1E293B" strokeWidth="1" />
        <line x1="40" y1="180" x2="380" y2="180" stroke="#1E293B" strokeWidth="1" />

        {/* Y Axis markings */}
        <text x="35" y="40" textAnchor="end" fill="#64748B" fontSize="8" className="font-mono">100%</text>
        <text x="35" y="110" textAnchor="end" fill="#64748B" fontSize="8" className="font-mono">50%</text>
        <text x="35" y="180" textAnchor="end" fill="#64748B" fontSize="8" className="font-mono">0%</text>

        {/* X Axis markings */}
        <text x="50" y="195" fill="#64748B" fontSize="8">AÑO 0</text>
        <text x="150" y="195" fill="#64748B" fontSize="8">AÑO 5 (OPERACIÓN)</text>
        <text x="280" y="195" fill="#64748B" fontSize="8">AÑO 10 (HORIZONTE)</text>

        {/* Capacity Threshold Limit line */}
        <line x1="40" y1="70" x2="380" y2="70" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
        <text x="375" y="65" textAnchor="end" fill="#EF4444" fontSize="8">UMBRAL SATURACIÓN (LOS D/E)</text>

        {/* Path 1: Base without mitigation (Red curve climbing high) */}
        <path
          d="M 40 160 Q 150 130 280 50 L 370 35"
          fill="none"
          stroke="#F43F5E"
          strokeWidth="2"
          strokeDasharray="4 2"
          opacity="0.7"
        />

        {/* Path 2: Mitigated curve with Polosur Engineering (Cyan solid curve well under threshold) */}
        <motion.path
          d="M 40 160 Q 150 145 280 110 L 370 95"
          fill="none"
          stroke="#00A3E0"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Key nodes on Mitigated curve */}
        <circle cx="280" cy="110" r="4" fill="#00A3E0" />
        <circle cx="280" cy="110" r="9" fill="none" stroke="#00A3E0" strokeWidth="1" opacity="0.7" />

        {/* Tooltip callout node */}
        <g transform="translate(210, 80)">
          <rect x="0" y="0" width="130" height="24" rx="3" fill="#080C14" stroke="#00A3E0" strokeWidth="1" />
          <text x="8" y="15" fill="#00A3E0" fontSize="8" fontWeight="bold" fontFamily="Space Mono, monospace">
            CON MITIGACIÓN: LOS B
          </text>
        </g>
      </svg>
    </div>
  );
};
