'use client';

import React from 'react';

// Illustration 1: Ingenieros de Tránsito en Terreno y Levantamiento Fotogramétrico
export const FieldSurveyIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="500" height="320" fill="#FFFFFF" />
      {/* Background CAD grid */}
      <g stroke="#F1F5F9" strokeWidth="1">
        <line x1="0" y1="80" x2="500" y2="80" />
        <line x1="0" y1="160" x2="500" y2="160" />
        <line x1="0" y1="240" x2="500" y2="240" />
        <line x1="100" y1="0" x2="100" y2="320" />
        <line x1="200" y1="0" x2="200" y2="320" />
        <line x1="300" y1="0" x2="300" y2="320" />
        <line x1="400" y1="0" x2="400" y2="320" />
      </g>

      {/* Road Perspective and Measurement Lines */}
      <path d="M 50 300 L 220 180 L 280 180 L 450 300 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <line x1="250" y1="180" x2="250" y2="300" stroke="#00A3E0" strokeWidth="2" strokeDasharray="8 6" />

      {/* Total Station / Tripod Equipment */}
      <g transform="translate(130, 140)">
        {/* Tripod legs */}
        <line x1="30" y1="30" x2="10" y2="110" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="30" x2="30" y2="110" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="30" x2="50" y2="110" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        {/* Device body */}
        <rect x="20" y="10" width="20" height="24" rx="2" fill="#00A3E0" stroke="#0284C7" strokeWidth="1.5" />
        {/* Lens */}
        <circle cx="30" cy="20" r="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
        {/* Laser beam */}
        <line x1="30" y1="20" x2="240" y2="70" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
      </g>

      {/* Traffic Engineer Character (Minimal vector) */}
      <g transform="translate(80, 120)">
        {/* Helmet (Safety cyan/white) */}
        <path d="M 22 28 A 12 10 0 0 1 44 28 Z" fill="#00A3E0" stroke="#0284C7" strokeWidth="1" />
        <rect x="20" y="27" width="26" height="3" rx="1.5" fill="#00A3E0" />
        {/* Head */}
        <circle cx="33" cy="38" r="8" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
        {/* Safety Vest Body */}
        <path d="M 22 48 L 44 48 L 48 95 L 18 95 Z" fill="#0284C7" />
        <rect x="26" y="55" width="14" height="25" fill="#38BDF8" />
        <line x1="22" y1="65" x2="44" y2="65" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="20" y1="80" x2="46" y2="80" stroke="#FFFFFF" strokeWidth="2" />
        {/* Clipboard / Tablet */}
        <rect x="36" y="60" width="16" height="22" rx="2" fill="#0F172A" />
        <rect x="39" y="64" width="10" height="14" fill="#38BDF8" />
        {/* Legs */}
        <line x1="26" y1="95" x2="24" y2="150" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
        <line x1="40" y1="95" x2="42" y2="150" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Drone Aerial Survey (Top Right) */}
      <g transform="translate(360, 40)">
        <circle cx="30" cy="30" r="14" fill="#0F172A" stroke="#00A3E0" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="50" y2="50" stroke="#64748B" strokeWidth="2" />
        <line x1="50" y1="10" x2="10" y2="50" stroke="#64748B" strokeWidth="2" />
        {/* Rotors */}
        <ellipse cx="10" cy="10" rx="10" ry="3" fill="#00A3E0" opacity="0.7" />
        <ellipse cx="50" cy="10" rx="10" ry="3" fill="#00A3E0" opacity="0.7" />
        <ellipse cx="10" cy="50" rx="10" ry="3" fill="#00A3E0" opacity="0.7" />
        <ellipse cx="50" cy="50" rx="10" ry="3" fill="#00A3E0" opacity="0.7" />
        {/* Survey Cone to Ground */}
        <path d="M 30 35 L 200 240 L 400 240 Z" fill="url(#cyanCone)" opacity="0.15" />
      </g>

      {/* Target Crosshairs Marker */}
      <g transform="translate(240, 210)">
        <circle cx="0" cy="0" r="12" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        <circle cx="0" cy="0" r="4" fill="#EF4444" />
        <line x1="-16" y1="0" x2="16" y2="0" stroke="#00A3E0" strokeWidth="1" />
        <line x1="0" y1="-16" x2="0" y2="16" stroke="#00A3E0" strokeWidth="1" />
        <text x="18" y="4" fill="#00A3E0" fontSize="10" fontWeight="bold" fontFamily="monospace">PUNTO GPS: -33.4218, -70.6124</text>
      </g>

      <defs>
        <linearGradient id="cyanCone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00A3E0" />
          <stop offset="100%" stopColor="#00A3E0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Illustration 2: Modelación de Tránsito VISSIM y Synchro en Estación de Trabajo
export const ModelingWorkstationIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="500" height="320" fill="#FFFFFF" />
      
      {/* Desk and Dual High-Tech Monitors */}
      <rect x="50" y="220" width="400" height="12" rx="2" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
      
      {/* Monitor 1 (VISSIM 3D Simulation) */}
      <rect x="70" y="70" width="170" height="125" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
      <rect x="145" y="195" width="20" height="25" fill="#64748B" />
      <rect x="130" y="220" width="50" height="4" rx="2" fill="#94A3B8" />
      
      {/* Inside Monitor 1: 3D Roundabout & Traffic flow */}
      <circle cx="155" cy="130" r="30" stroke="#00A3E0" strokeWidth="2" strokeDasharray="6 3" fill="#1E293B" />
      <circle cx="155" cy="130" r="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M 80 130 L 125 130" stroke="#22C55E" strokeWidth="2" />
      <path d="M 185 130 L 230 130" stroke="#22C55E" strokeWidth="2" />
      <path d="M 155 75 L 155 100" stroke="#EAB308" strokeWidth="2" />
      <path d="M 155 160 L 155 185" stroke="#EAB308" strokeWidth="2" />
      <rect x="78" y="78" width="50" height="12" rx="2" fill="#00A3E0" opacity="0.8" />
      <text x="82" y="87" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="monospace">VISSIM 24.0</text>

      {/* Monitor 2 (Synchro Signal Timings & Capacity Curves) */}
      <rect x="260" y="70" width="170" height="125" rx="4" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
      <rect x="335" y="195" width="20" height="25" fill="#64748B" />
      <rect x="320" y="220" width="50" height="4" rx="2" fill="#94A3B8" />

      {/* Inside Monitor 2: Split Timings & Curves */}
      <g transform="translate(275, 90)">
        <rect x="0" y="0" width="140" height="14" rx="2" fill="#1E293B" />
        <rect x="2" y="2" width="40" height="10" fill="#22C55E" />
        <rect x="44" y="2" width="20" height="10" fill="#EAB308" />
        <rect x="66" y="2" width="70" height="10" fill="#EF4444" />
        <text x="2" y="24" fill="#38BDF8" fontSize="8" fontFamily="monospace">CICLO SEMAFÓRICO: 90s</text>

        {/* Capacity Curve */}
        <line x1="0" y1="80" x2="140" y2="80" stroke="#334155" strokeWidth="1" />
        <path d="M 0 75 Q 50 60 90 30 T 140 10" fill="none" stroke="#00A3E0" strokeWidth="2" />
        <circle cx="90" cy="30" r="3" fill="#00A3E0" />
      </g>

      {/* Engineer Hands and Keyboard */}
      <rect x="180" y="228" width="90" height="20" rx="3" fill="#334155" stroke="#475569" strokeWidth="1" />
      <ellipse cx="300" cy="238" rx="8" ry="12" fill="#00A3E0" />
      
      {/* Floating Blueprint Dimension Tag */}
      <g transform="translate(190, 20)">
        <rect x="0" y="0" width="120" height="24" rx="3" fill="#00A3E0" />
        <text x="60" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">
          LOS: NIVEL A (SEIM OK)
        </text>
      </g>
    </svg>
  );
};

// Illustration 3: Expediente Técnico IMIV & Aprobación SEIM
export const ApprovalWorkflowIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="500" height="320" fill="#FFFFFF" />

      {/* Blueprint Sheet in Center */}
      <rect x="70" y="40" width="360" height="240" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      <rect x="85" y="55" width="330" height="210" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="1" strokeDasharray="4 4" />

      {/* Title Box of Document */}
      <rect x="100" y="70" width="300" height="35" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
      <text x="115" y="86" fill="#0F172A" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
        INFORME DE MITIGACIÓN DE IMPACTO VIAL (IMIV)
      </text>
      <text x="115" y="98" fill="#64748B" fontSize="9" fontFamily="monospace">
        LEY 20.958 - EXPEDIENTE TÉCNICO APROBADO SEIM MTT
      </text>

      {/* Technical Schematic inside Blueprint */}
      <g transform="translate(110, 125)">
        <rect x="0" y="0" width="130" height="110" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="65" y1="0" x2="65" y2="110" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="0" y1="55" x2="130" y2="55" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="65" cy="55" r="22" stroke="#00A3E0" strokeWidth="2" fill="#E0F2FE" />
        <circle cx="65" cy="55" r="10" fill="#00A3E0" />
      </g>

      {/* Checkmarks and Status Badges */}
      <g transform="translate(260, 125)">
        <g className="flex items-center gap-2">
          <circle cx="12" cy="12" r="10" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
          <path d="M 8 12 L 11 15 L 16 9" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
          <text x="28" y="16" fill="#1E293B" fontSize="10" fontWeight="bold">Capacidad Vial & Demoras</text>
        </g>

        <g transform="translate(0, 32)">
          <circle cx="12" cy="12" r="10" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
          <path d="M 8 12 L 11 15 L 16 9" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
          <text x="28" y="16" fill="#1E293B" fontSize="10" fontWeight="bold">Área de Influencia (AI)</text>
        </g>

        <g transform="translate(0, 64)">
          <circle cx="12" cy="12" r="10" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
          <path d="M 8 12 L 11 15 L 16 9" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
          <text x="28" y="16" fill="#1E293B" fontSize="10" fontWeight="bold">Medidas de Mitigación</text>
        </g>
      </g>

      {/* Official Approval Stamp in Teal/Cyan */}
      <g transform="translate(320, 195) rotate(-8)">
        <rect x="0" y="0" width="100" height="42" rx="4" fill="none" stroke="#00A3E0" strokeWidth="2.5" strokeDasharray="6 2" />
        <text x="50" y="18" textAnchor="middle" fill="#00A3E0" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          SEIM MTT
        </text>
        <text x="50" y="32" textAnchor="middle" fill="#00A3E0" fontSize="8" fontWeight="bold" fontFamily="monospace">
          APROBADO #2026
        </text>
      </g>
    </svg>
  );
};
