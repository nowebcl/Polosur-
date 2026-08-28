'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const HeroVisualizer: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'AM' | 'PM'>('AM');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const scenarioData = {
    AM: {
      volumeNorth: '1.850 veh/h',
      volumeEast: '1.240 veh/h',
      los: 'LOS B',
      delay: '18.4 s/veh',
      queue: '34 m',
    },
    PM: {
      volumeNorth: '2.310 veh/h',
      volumeEast: '1.980 veh/h',
      los: 'LOS C',
      delay: '26.8 s/veh',
      queue: '52 m',
    },
  };

  const current = scenarioData[activeScenario];

  return (
    <div className="relative w-full bg-[#080C14] border border-slate-800 rounded-lg p-5 font-mono text-slate-300 shadow-2xl overflow-hidden group">
      {/* Header telemetry bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-400 font-semibold tracking-wider">SIMULACIÓN VISSIM 24.0</span>
          <span className="bg-slate-900 border border-slate-700 text-polosur-cyan text-[10px] px-2 py-0.5 rounded">
            NUDO VIAL - SEIM ID #8492
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setActiveScenario('AM')}
            className={`px-2 py-1 text-[10px] rounded transition-colors ${
              activeScenario === 'AM'
                ? 'bg-polosur-cyan text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            PICO AM
          </button>
          <button
            onClick={() => setActiveScenario('PM')}
            className={`px-2 py-1 text-[10px] rounded transition-colors ${
              activeScenario === 'PM'
                ? 'bg-polosur-cyan text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            PICO PM
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full aspect-[4/3] bg-[#0A0F1D] border border-slate-800/80 rounded flex items-center justify-center overflow-hidden engineering-grid-dark">
        {/* Background blueprint grid crosshairs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        <svg viewBox="0 0 500 380" className="w-full h-full relative z-10">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00A3E0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
            </linearGradient>

            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Grid lines */}
          <rect width="500" height="380" fill="url(#grid)" opacity="0.3" />

          {/* Main Road Cross Geometry */}
          {/* North-South Roadway */}
          <rect x="210" y="0" width="80" height="380" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
          {/* East-West Roadway */}
          <rect x="0" y="150" width="500" height="80" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />

          {/* Lane Centerlines & Markings */}
          <line x1="250" y1="0" x2="250" y2="150" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
          <line x1="250" y1="230" x2="250" y2="380" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
          <line x1="0" y1="190" x2="210" y2="190" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
          <line x1="290" y1="190" x2="500" y2="190" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />

          {/* Stop Lines & Crosswalk Pedestrian Strips */}
          <line x1="210" y1="140" x2="290" y2="140" stroke="#F8FAFC" strokeWidth="3" opacity="0.8" />
          <line x1="210" y1="240" x2="290" y2="240" stroke="#F8FAFC" strokeWidth="3" opacity="0.8" />
          <line x1="200" y1="150" x2="200" y2="230" stroke="#F8FAFC" strokeWidth="3" opacity="0.8" />
          <line x1="300" y1="150" x2="300" y2="230" stroke="#F8FAFC" strokeWidth="3" opacity="0.8" />

          {/* Dynamic Vector Traffic Flow Paths */}
          {/* Flow 1: North to South straight */}
          <motion.path
            d="M 230 0 L 230 380"
            stroke="url(#flowGradient)"
            strokeWidth="4"
            strokeDasharray="12 8"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ repeat: Infinity, duration: activeScenario === 'AM' ? 2 : 1.2, ease: "linear" }}
          />

          {/* Flow 2: East to West straight */}
          <motion.path
            d="M 500 170 L 0 170"
            stroke="url(#flowGradient)"
            strokeWidth="4"
            strokeDasharray="12 8"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ repeat: Infinity, duration: activeScenario === 'AM' ? 2.5 : 1.5, ease: "linear" }}
          />

          {/* Flow 3: Turning Radius Vector Arc (Right turn North to West) */}
          <motion.path
            d="M 230 110 Q 230 170 170 170"
            stroke="#00A3E0"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />

          {/* Vehicle Node Sensors */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('Norte')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx="230" cy="80" r="14" fill="#080C14" stroke="#00A3E0" strokeWidth="1.5" />
            <circle cx="230" cy="80" r="4" fill="#00A3E0" />
            <text x="250" y="84" fill="#94A3B8" fontSize="10" fontWeight="bold">S-01 [Norte]</text>
          </g>

          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('Este')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx="380" cy="170" r="14" fill="#080C14" stroke="#00A3E0" strokeWidth="1.5" />
            <circle cx="380" cy="170" r="4" fill="#00A3E0" />
            <text x="360" y="148" fill="#94A3B8" fontSize="10" fontWeight="bold">S-02 [Este]</text>
          </g>

          {/* Intersection Central Node (Signalized Hub) */}
          <circle cx="250" cy="190" r="28" fill="#080C14" stroke="#00A3E0" strokeWidth="2" />
          <circle cx="250" cy="190" r="38" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" />
          
          <text x="250" y="186" textAnchor="middle" fill="#00A3E0" fontSize="10" fontWeight="bold">SEIM</text>
          <text x="250" y="198" textAnchor="middle" fill="#F8FAFC" fontSize="9">{current.los}</text>

          {/* Signal Light Vector Icons */}
          <circle cx="200" cy="130" r="5" fill="#22C55E" />
          <circle cx="300" cy="130" r="5" fill="#EF4444" />
          <circle cx="200" cy="250" r="5" fill="#EF4444" />
          <circle cx="300" cy="250" r="5" fill="#22C55E" />

          {/* Measurement Annotations */}
          <g transform="translate(15, 330)">
            <line x1="0" y1="0" x2="60" y2="0" stroke="#64748B" strokeWidth="1" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#64748B" strokeWidth="1" />
            <line x1="60" y1="-4" x2="60" y2="4" stroke="#64748B" strokeWidth="1" />
            <text x="30" y="-6" textAnchor="middle" fill="#64748B" fontSize="9">25 METROS</text>
          </g>

          <g transform="translate(360, 330)">
            <text x="0" y="0" fill="#38BDF8" fontSize="9">FLUJO MATRIZ O-D</text>
            <text x="0" y="12" fill="#94A3B8" fontSize="8">CAPACIDAD VIAL OK</text>
          </g>
        </svg>

        {/* Hover info overlay */}
        {hoveredNode && (
          <div className="absolute top-4 left-4 bg-slate-950/90 border border-polosur-cyan p-2 rounded text-[11px] shadow-lg">
            <p className="text-polosur-cyan font-bold">SENSOR ACTIVO: {hoveredNode}</p>
            <p className="text-slate-300">Conteo Tasa: {hoveredNode === 'Norte' ? current.volumeNorth : current.volumeEast}</p>
          </div>
        )}
      </div>

      {/* Telemetry Footer Grid */}
      <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-800 text-[11px]">
        <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
          <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Volumen Total</span>
          <span className="text-white font-bold">{current.volumeNorth}</span>
        </div>
        <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
          <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Nivel Servicio</span>
          <span className="text-emerald-400 font-bold">{current.los}</span>
        </div>
        <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
          <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Demora Media</span>
          <span className="text-polosur-cyan font-bold">{current.delay}</span>
        </div>
        <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
          <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Cola Máxima</span>
          <span className="text-amber-400 font-bold">{current.queue}</span>
        </div>
      </div>
    </div>
  );
};
