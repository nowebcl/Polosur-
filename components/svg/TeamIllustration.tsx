'use client';

import React from 'react';

export const TeamIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Clean White Background */}
      <rect width="600" height="360" fill="#FFFFFF" />

      {/* Subtle CAD Background Reference Grid */}
      <g stroke="#F1F5F9" strokeWidth="1">
        <line x1="0" y1="90" x2="600" y2="90" />
        <line x1="0" y1="180" x2="600" y2="180" />
        <line x1="0" y1="270" x2="600" y2="270" />
        <line x1="120" y1="0" x2="120" y2="360" />
        <line x1="240" y1="0" x2="240" y2="360" />
        <line x1="360" y1="0" x2="360" y2="360" />
        <line x1="480" y1="0" x2="480" y2="360" />
      </g>

      {/* Central Blueprint Workstation Table */}
      <ellipse cx="300" cy="270" rx="220" ry="45" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
      <ellipse cx="300" cy="270" rx="160" ry="30" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="1" strokeDasharray="6 4" />

      {/* Blueprint Plans on the Table */}
      <g transform="translate(230, 248)">
        <rect x="0" y="0" width="140" height="40" rx="2" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" transform="rotate(-4 70 20)" />
        <circle cx="70" cy="20" r="12" stroke="#00A3E0" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="20" x2="120" y2="20" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 2" />
      </g>

      {/* Digital Tablet / Hologram Projector */}
      <rect x="280" y="235" width="40" height="26" rx="3" fill="#0F172A" stroke="#00A3E0" strokeWidth="1.5" />
      <line x1="300" y1="235" x2="300" y2="160" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="300" cy="160" r="16" fill="none" stroke="#00A3E0" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="300" y="164" textAnchor="middle" fill="#00A3E0" fontSize="8" fontWeight="bold" fontFamily="monospace">SEIM</text>

      {/* Engineer 1: Lead Engineer (Left) */}
      <g transform="translate(140, 100)">
        {/* Safety Helmet (White/Cyan) */}
        <path d="M 22 28 A 14 11 0 0 1 48 28 Z" fill="#0070F3" />
        <rect x="19" y="27" width="32" height="4" rx="2" fill="#005BB5" />
        {/* Head */}
        <circle cx="35" cy="40" r="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        {/* Professional Suit / Blazer */}
        <path d="M 20 52 L 50 52 L 56 140 L 14 140 Z" fill="#0F172A" />
        <path d="M 31 52 L 35 70 L 39 52 Z" fill="#FFFFFF" />
        <path d="M 33 56 L 37 56 L 36 68 L 34 68 Z" fill="#00A3E0" />
        {/* Arm holding clipboard */}
        <path d="M 50 62 L 68 85 L 60 95" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
        <rect x="62" y="75" width="18" height="24" rx="2" fill="#FFFFFF" stroke="#00A3E0" strokeWidth="1.5" />
      </g>

      {/* Engineer 2: Simulation Specialist (Center-Left) */}
      <g transform="translate(240, 75)">
        <path d="M 22 28 A 14 11 0 0 1 48 28 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="19" y="27" width="32" height="4" rx="2" fill="#00A3E0" />
        <circle cx="35" cy="40" r="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
        {/* Navy Technical Vest */}
        <path d="M 20 52 L 50 52 L 55 140 L 15 140 Z" fill="#1E293B" />
        <line x1="20" y1="75" x2="50" y2="75" stroke="#38BDF8" strokeWidth="2" />
        <line x1="20" y1="95" x2="50" y2="95" stroke="#38BDF8" strokeWidth="2" />
      </g>

      {/* Engineer 3: Environmental Consultant (Center-Right) */}
      <g transform="translate(325, 75)">
        <path d="M 22 28 A 14 11 0 0 1 48 28 Z" fill="#10B981" />
        <rect x="19" y="27" width="32" height="4" rx="2" fill="#059669" />
        <circle cx="35" cy="40" r="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
        {/* Green Accent Technical Blazer */}
        <path d="M 20 52 L 50 52 L 55 140 L 15 140 Z" fill="#0F172A" />
        <path d="M 31 52 L 35 70 L 39 52 Z" fill="#10B981" />
      </g>

      {/* Engineer 4: Geometric Design Senior (Right) */}
      <g transform="translate(415, 100)">
        <path d="M 22 28 A 14 11 0 0 1 48 28 Z" fill="#0070F3" />
        <rect x="19" y="27" width="32" height="4" rx="2" fill="#005BB5" />
        <circle cx="35" cy="40" r="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        {/* Technical Vest */}
        <path d="M 20 52 L 50 52 L 56 140 L 14 140 Z" fill="#1E293B" />
        <line x1="20" y1="75" x2="50" y2="75" stroke="#00A3E0" strokeWidth="2" />
        {/* Arm pointing to blueprint */}
        <path d="M 20 62 L 5 88 L -15 95" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Floating Micro Labels */}
      <g transform="translate(40, 40)">
        <rect x="0" y="0" width="130" height="26" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="12" cy="13" r="4" fill="#0070F3" />
        <text x="24" y="17" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EQUIPO MULTIDISCIPLINARIO</text>
      </g>

      <g transform="translate(420, 40)">
        <rect x="0" y="0" width="140" height="26" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="12" cy="13" r="4" fill="#10B981" />
        <text x="24" y="17" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="sans-serif">+10 AÑOS EN INGENIERÍA</text>
      </g>
    </svg>
  );
};
