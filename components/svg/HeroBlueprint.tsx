'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Vehicle {
  id: number;
  pathId: string;
  distance: number;
  speed: number; // in px/frame
  maxSpeed: number;
  type: 'car' | 'bus' | 'truck' | 'suv';
  color: string;
  trail: { x: number; y: number }[];
  isYielding: boolean;
  spawnDelay?: number;
}

export const HeroBlueprint: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Scenario and Simulation State
  const [scenario, setScenario] = useState<'AM' | 'PM' | 'FLUIDO'>('AM');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeSignal, setActiveSignal] = useState<'NS_GREEN' | 'EW_GREEN'>('NS_GREEN');

  // Real-time fluctuating telemetry
  const [telemetry, setTelemetry] = useState({
    avgSpeed: 42.4,
    flowVolume: 2180,
    delay: 15.8,
    activeVehicles: 8,
  });

  // State to hold rendered vehicles
  const [vehiclesState, setVehiclesState] = useState<
    {
      id: number;
      x: number;
      y: number;
      angle: number;
      type: 'car' | 'bus' | 'truck' | 'suv';
      color: string;
      trail: { x: number; y: number }[];
      speed: number;
    }[]
  >([]);

  // Telemetry fluctuation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => {
        const speedDelta = (Math.random() - 0.5) * 1.6;
        const volumeDelta = Math.floor((Math.random() - 0.5) * 25);
        const delayDelta = (Math.random() - 0.5) * 0.8;
        return {
          avgSpeed: Number(Math.max(34, Math.min(48, prev.avgSpeed + speedDelta)).toFixed(1)),
          flowVolume: Math.max(1800, Math.min(2600, prev.flowVolume + volumeDelta)),
          delay: Number(Math.max(11, Math.min(22, prev.delay + delayDelta)).toFixed(1)),
          activeVehicles: prev.activeVehicles,
        };
      });
    }, 800);
    return () => clearInterval(timer);
  }, []);

  // Traffic light cycle loop
  useEffect(() => {
    const cycleTime = scenario === 'FLUIDO' ? 3500 : 5000;
    const signalInterval = setInterval(() => {
      setActiveSignal((prev) => (prev === 'NS_GREEN' ? 'EW_GREEN' : 'NS_GREEN'));
    }, cycleTime);
    return () => clearInterval(signalInterval);
  }, [scenario]);

  // Main 60 FPS Physics & Path Animation Engine
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;

    // Cache SVG Path Elements
    const pathElements: Record<string, SVGPathElement | null> = {
      p_N_W: svg.querySelector('#p_N_W'),
      p_N_S: svg.querySelector('#p_N_S'),
      p_E_S: svg.querySelector('#p_E_S'),
      p_E_W: svg.querySelector('#p_E_W'),
      p_S_E: svg.querySelector('#p_S_E'),
      p_S_N: svg.querySelector('#p_S_N'),
      p_W_N: svg.querySelector('#p_W_N'),
      p_W_E: svg.querySelector('#p_W_E'),
      p_RING: svg.querySelector('#p_RING'),
    };

    const pathLengths: Record<string, number> = {};
    Object.keys(pathElements).forEach((k) => {
      const el = pathElements[k];
      if (el) pathLengths[k] = el.getTotalLength();
    });

    // Initialize vehicle fleet
    const vehicles: Vehicle[] = [
      { id: 1, pathId: 'p_N_W', distance: 10, speed: 2.2, maxSpeed: 2.8, type: 'car', color: '#0070F3', trail: [], isYielding: false },
      { id: 2, pathId: 'p_N_S', distance: 80, speed: 2.0, maxSpeed: 2.5, type: 'bus', color: '#0F172A', trail: [], isYielding: false },
      { id: 3, pathId: 'p_E_W', distance: 40, speed: 2.1, maxSpeed: 2.6, type: 'car', color: '#00A3E0', trail: [], isYielding: false },
      { id: 4, pathId: 'p_E_S', distance: 160, speed: 1.8, maxSpeed: 2.3, type: 'truck', color: '#0284C7', trail: [], isYielding: false },
      { id: 5, pathId: 'p_S_N', distance: 120, speed: 2.2, maxSpeed: 2.7, type: 'car', color: '#10B981', trail: [], isYielding: false },
      { id: 6, pathId: 'p_S_E', distance: 30, speed: 2.0, maxSpeed: 2.5, type: 'suv', color: '#38BDF8', trail: [], isYielding: false },
      { id: 7, pathId: 'p_W_E', distance: 90, speed: 2.2, maxSpeed: 2.8, type: 'car', color: '#0070F3', trail: [], isYielding: false },
      { id: 8, pathId: 'p_W_N', distance: 180, speed: 2.0, maxSpeed: 2.4, type: 'car', color: '#00A3E0', trail: [], isYielding: false },
      { id: 9, pathId: 'p_RING', distance: 60, speed: 1.6, maxSpeed: 2.0, type: 'car', color: '#F59E0B', trail: [], isYielding: false },
    ];

    let lastTime = performance.now();

    const renderLoop = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.666, 2.5); // normalized frame delta
      lastTime = time;

      const renderedList: {
        id: number;
        x: number;
        y: number;
        angle: number;
        type: 'car' | 'bus' | 'truck' | 'suv';
        color: string;
        trail: { x: number; y: number }[];
        speed: number;
      }[] = [];

      // Check roundabout conflict zone occupants
      const conflictVehicles = vehicles.filter((v) => {
        const len = pathLengths[v.pathId] || 1000;
        const norm = v.distance / len;
        return (norm > 0.35 && norm < 0.7) || v.pathId === 'p_RING';
      });

      vehicles.forEach((v) => {
        const pathEl = pathElements[v.pathId];
        const totalLen = pathLengths[v.pathId] || 500;

        // Determine target speed and braking
        const normPos = v.distance / totalLen;
        let targetSpeed = v.maxSpeed;

        // Is vehicle at approach / yield line?
        const isApproachingYield = normPos > 0.22 && normPos < 0.35;
        const isNorthSouth = v.pathId.startsWith('p_N') || v.pathId.startsWith('p_S');
        const isSignalRed = (isNorthSouth && activeSignal === 'EW_GREEN') || (!isNorthSouth && activeSignal === 'NS_GREEN');

        // Yield condition: Red light OR circulating car in roundabout conflict
        if (isApproachingYield) {
          if (isSignalRed) {
            targetSpeed = 0.3; // stop at stop line
            v.isYielding = true;
          } else if (conflictVehicles.some((cv) => cv.id !== v.id && Math.abs(cv.distance - v.distance) < 60)) {
            targetSpeed = 0.8; // yield right-of-way
            v.isYielding = true;
          } else {
            targetSpeed = 1.6; // pass at roundabout speed
            v.isYielding = false;
          }
        } else if (normPos >= 0.35 && normPos <= 0.65) {
          // Inside roundabout curve: comfortable safe turning speed
          targetSpeed = 1.7;
          v.isYielding = false;
        } else {
          // Open highway / departure straight: accelerate smoothly
          targetSpeed = v.maxSpeed;
          v.isYielding = false;
        }

        // Apply smooth physics acceleration/deceleration (inertia)
        const accelRate = targetSpeed > v.speed ? 0.04 : 0.08;
        v.speed += (targetSpeed - v.speed) * accelRate * dt * speedMultiplier;

        // Advance distance
        v.distance += v.speed * dt * speedMultiplier;

        // Loop / Respawn path
        if (v.distance >= totalLen) {
          v.distance = 0;
          v.speed = v.maxSpeed * 0.8;
          v.trail = [];
        }

        if (pathEl) {
          try {
            const p1 = pathEl.getPointAtLength(v.distance);
            const nextDist = Math.min(v.distance + 2, totalLen);
            const p2 = pathEl.getPointAtLength(nextDist);

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

            // Maintain trailing light pulse trail (last 6 coordinates)
            if (v.trail.length > 5) v.trail.shift();
            v.trail.push({ x: p1.x, y: p1.y });

            renderedList.push({
              id: v.id,
              x: p1.x,
              y: p1.y,
              angle,
              type: v.type,
              color: v.color,
              trail: [...v.trail],
              speed: Math.round(v.speed * 20),
            });
          } catch (e) {
            // fallback
          }
        }
      });

      setVehiclesState(renderedList);
      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeSignal, speedMultiplier, scenario]);

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex flex-col items-center justify-center select-none bg-white rounded-sm overflow-hidden border border-slate-200 shadow-sm">
      
      {/* Simulation Controls & Telemetry Header Bar */}
      <div className="w-full bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono z-20">
        
        {/* Signal Status and Mode */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded">
            <span className={`w-2 h-2 rounded-full ${activeSignal === 'NS_GREEN' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
            <span className="font-bold text-slate-700">SEMÁFORO: {activeSignal === 'NS_GREEN' ? 'NORTE/SUR' : 'ESTE/OESTE'}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={() => setScenario('AM')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                scenario === 'AM' ? 'bg-[#0070F3] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              Pico AM
            </button>
            <button
              onClick={() => setScenario('PM')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                scenario === 'PM' ? 'bg-[#0070F3] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              Pico PM
            </button>
            <button
              onClick={() => setScenario('FLUIDO')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                scenario === 'FLUIDO' ? 'bg-[#0070F3] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              Fluido
            </button>
          </div>
        </div>

        {/* Speed multiplier & Live HUD */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-[11px]">
            <span className="text-slate-400">VELOCIDAD:</span>
            <button
              onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 0.6 : 1))}
              className="text-[#0070F3] font-bold hover:underline"
            >
              {speedMultiplier}x
            </button>
          </div>

          <div className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded font-bold">
            60 FPS EN TIEMPO REAL
          </div>
        </div>
      </div>

      {/* SVG Canvas with Paths and Vehicles */}
      <div className="relative w-full flex-1 flex items-center justify-center p-2">
        <svg
          ref={svgRef}
          viewBox="0 0 700 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-[720px]"
        >
          <defs>
            <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* --- INVISIBLE/REFERENCE TRAJECTORY PATHS (Precise Math Curves) --- */}
          {/* North to West (Right turn) */}
          <path id="p_N_W" d="M 325 0 L 325 180 Q 325 245 285 245 L 0 245" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
          
          {/* North to South (Through Roundabout) */}
          <path id="p_N_S" d="M 345 0 L 345 180 Q 345 240 370 240 Q 395 275 375 320 Q 345 340 345 380 L 345 580" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* East to West (Through) */}
          <path id="p_E_W" d="M 700 245 L 430 245 Q 360 215 325 275 Q 300 305 280 305 L 0 305" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* East to South (Turn) */}
          <path id="p_E_S" d="M 700 245 L 430 245 Q 385 245 385 290 L 385 580" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* South to East (Turn) */}
          <path id="p_S_E" d="M 385 580 L 385 380 Q 385 305 430 305 L 700 305" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* South to North (Through) */}
          <path id="p_S_N" d="M 365 580 L 365 380 Q 365 315 335 315 Q 315 275 335 230 Q 365 210 385 180 L 385 0" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* West to North (Turn) */}
          <path id="p_W_N" d="M 0 305 L 280 305 Q 385 305 385 220 L 385 0" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* West to East (Through) */}
          <path id="p_W_E" d="M 0 305 L 280 305 Q 355 350 430 305 L 700 305" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

          {/* Roundabout Ring */}
          <path id="p_RING" d="M 355 215 A 60 60 0 1 1 354.9 215" fill="none" stroke="#00A3E0" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

          {/* --- BASE CAD DRAFTING (Architectural Layout) --- */}
          <g stroke="#CBD5E1" strokeWidth="0.8" opacity="0.6">
            <line x1="0" y1="90" x2="700" y2="90" strokeDasharray="3 3" />
            <line x1="0" y1="490" x2="700" y2="490" strokeDasharray="3 3" />
            <line x1="90" y1="0" x2="90" y2="580" strokeDasharray="3 3" />
            <line x1="610" y1="0" x2="610" y2="580" strokeDasharray="3 3" />

            <rect x="60" y="40" width="210" height="130" fill="#F8FAFC" stroke="#CBD5E1" />
            <rect x="430" y="40" width="210" height="130" fill="#F8FAFC" stroke="#CBD5E1" />
            <rect x="60" y="390" width="210" height="140" fill="#F8FAFC" stroke="#CBD5E1" />
            <rect x="430" y="390" width="210" height="140" fill="#F8FAFC" stroke="#CBD5E1" />
          </g>

          {/* --- ROAD CURBS, ROUNDABOUT & CROSSWALKS --- */}
          <g stroke="#64748B" strokeWidth="1.5">
            {/* North-South Corridors */}
            <line x1="290" y1="0" x2="290" y2="180" />
            <line x1="420" y1="0" x2="420" y2="180" />
            <line x1="290" y1="370" x2="290" y2="580" />
            <line x1="420" y1="370" x2="420" y2="580" />

            {/* East-West Corridors */}
            <line x1="0" y1="180" x2="280" y2="180" />
            <line x1="0" y1="370" x2="280" y2="370" />
            <line x1="430" y1="180" x2="700" y2="180" />
            <line x1="430" y1="370" x2="700" y2="370" />

            {/* Curb Radii */}
            <path d="M 280 180 Q 290 180 290 170" fill="none" />
            <path d="M 420 170 Q 420 180 430 180" fill="none" />
            <path d="M 280 370 Q 290 370 290 380" fill="none" />
            <path d="M 420 380 Q 420 370 430 370" fill="none" />

            {/* Central Roundabout Island */}
            <circle cx="355" cy="275" r="52" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="355" cy="275" r="32" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="355" cy="275" r="12" fill="#00A3E0" stroke="#0284C7" strokeWidth="1" />

            {/* Crosswalk Zebra Strips */}
            <line x1="295" y1="165" x2="415" y2="165" stroke="#94A3B8" strokeWidth="3" strokeDasharray="4 4" />
            <line x1="295" y1="385" x2="415" y2="385" stroke="#94A3B8" strokeWidth="3" strokeDasharray="4 4" />
            <line x1="265" y1="185" x2="265" y2="365" stroke="#94A3B8" strokeWidth="3" strokeDasharray="4 4" />
            <line x1="445" y1="185" x2="445" y2="365" stroke="#94A3B8" strokeWidth="3" strokeDasharray="4 4" />
          </g>

          {/* --- TRAFFIC SIGNAL LIGHTS WITH ACTIVE GLOW --- */}
          <g transform="translate(265, 140)">
            <rect x="0" y="0" width="18" height="24" rx="3" fill="#0F172A" />
            <circle cx="9" cy="8" r="4" fill={activeSignal === 'NS_GREEN' ? '#22C55E' : '#334155'} filter={activeSignal === 'NS_GREEN' ? 'url(#cyanGlow)' : undefined} />
            <circle cx="9" cy="16" r="4" fill={activeSignal === 'NS_GREEN' ? '#334155' : '#EF4444'} filter={activeSignal !== 'NS_GREEN' ? 'url(#cyanGlow)' : undefined} />
          </g>

          <g transform="translate(430, 390)">
            <rect x="0" y="0" width="18" height="24" rx="3" fill="#0F172A" />
            <circle cx="9" cy="8" r="4" fill={activeSignal === 'NS_GREEN' ? '#22C55E' : '#334155'} filter={activeSignal === 'NS_GREEN' ? 'url(#cyanGlow)' : undefined} />
            <circle cx="9" cy="16" r="4" fill={activeSignal === 'NS_GREEN' ? '#334155' : '#EF4444'} filter={activeSignal !== 'NS_GREEN' ? 'url(#cyanGlow)' : undefined} />
          </g>

          <g transform="translate(240, 380)">
            <rect x="0" y="0" width="24" height="18" rx="3" fill="#0F172A" />
            <circle cx="8" cy="9" r="4" fill={activeSignal === 'EW_GREEN' ? '#22C55E' : '#334155'} filter={activeSignal === 'EW_GREEN' ? 'url(#cyanGlow)' : undefined} />
            <circle cx="16" cy="9" r="4" fill={activeSignal === 'EW_GREEN' ? '#334155' : '#EF4444'} filter={activeSignal !== 'EW_GREEN' ? 'url(#cyanGlow)' : undefined} />
          </g>

          <g transform="translate(440, 160)">
            <rect x="0" y="0" width="24" height="18" rx="3" fill="#0F172A" />
            <circle cx="8" cy="9" r="4" fill={activeSignal === 'EW_GREEN' ? '#22C55E' : '#334155'} filter={activeSignal === 'EW_GREEN' ? 'url(#cyanGlow)' : undefined} />
            <circle cx="16" cy="9" r="4" fill={activeSignal === 'EW_GREEN' ? '#334155' : '#EF4444'} filter={activeSignal !== 'EW_GREEN' ? 'url(#cyanGlow)' : undefined} />
          </g>

          {/* --- VEHICLE TRAILS (Dotted dynamic vector trails) --- */}
          {vehiclesState.map((v) => {
            if (v.trail.length < 2) return null;
            const points = v.trail.map((p) => `${p.x},${p.y}`).join(' ');
            return (
              <polyline
                key={`trail-${v.id}`}
                points={points}
                fill="none"
                stroke={v.color}
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.4"
              />
            );
          })}

          {/* --- VEHICLE MODELS (Rotated along tangent with autoRotate) --- */}
          {vehiclesState.map((v) => (
            <g
              key={v.id}
              transform={`translate(${v.x}, ${v.y}) rotate(${v.angle})`}
            >
              {v.type === 'car' && (
                <g>
                  {/* Car Body */}
                  <rect x="-7.5" y="-14" width="15" height="28" rx="3.5" fill={v.color} stroke="#0F172A" strokeWidth="1.2" />
                  {/* Windshields */}
                  <rect x="-5.5" y="-7" width="11" height="6" rx="1.5" fill="#E0F2FE" />
                  <rect x="-5.5" y="5" width="11" height="4" rx="1" fill="#E0F2FE" />
                  {/* Headlights */}
                  <circle cx="-5" cy="-13" r="1.5" fill="#FEF08A" />
                  <circle cx="5" cy="-13" r="1.5" fill="#FEF08A" />
                </g>
              )}

              {v.type === 'bus' && (
                <g>
                  {/* Bus Body */}
                  <rect x="-9" y="-22" width="18" height="44" rx="4" fill="#0F172A" stroke="#00A3E0" strokeWidth="1.5" />
                  {/* Windows */}
                  <rect x="-7" y="-18" width="14" height="7" rx="1" fill="#38BDF8" opacity="0.9" />
                  <rect x="-7" y="-7" width="14" height="6" rx="1" fill="#38BDF8" opacity="0.9" />
                  <rect x="-7" y="3" width="14" height="6" rx="1" fill="#38BDF8" opacity="0.9" />
                  <rect x="-7" y="13" width="14" height="5" rx="1" fill="#38BDF8" opacity="0.9" />
                </g>
              )}

              {v.type === 'truck' && (
                <g>
                  {/* Truck Body */}
                  <rect x="-8.5" y="-18" width="17" height="36" rx="3" fill="#0284C7" stroke="#0F172A" strokeWidth="1.2" />
                  <rect x="-7.5" y="-16" width="15" height="10" rx="2" fill="#0F172A" />
                  <rect x="-5.5" y="-14" width="11" height="5" rx="1" fill="#BAE6FD" />
                </g>
              )}

              {v.type === 'suv' && (
                <g>
                  {/* SUV Body */}
                  <rect x="-8" y="-15" width="16" height="30" rx="3.5" fill={v.color} stroke="#0F172A" strokeWidth="1.2" />
                  <rect x="-6" y="-7" width="12" height="7" rx="1.5" fill="#FFFFFF" />
                  <rect x="-6" y="6" width="12" height="4" rx="1" fill="#FFFFFF" />
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Real-Time Live Telemetry HUD Bar */}
      <div className="w-full bg-slate-900 text-white px-5 py-3 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono z-20">
        <div>
          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Velocidad Media</span>
          <span className="text-[#00A3E0] font-bold text-sm">{telemetry.avgSpeed} km/h</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Carga Vehicular</span>
          <span className="text-white font-bold text-sm">{telemetry.flowVolume.toLocaleString()} veh/h</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Demora Media</span>
          <span className="text-emerald-400 font-bold text-sm">{telemetry.delay} s/veh</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Nivel Servicio</span>
          <span className="text-emerald-400 font-bold text-sm">LOS A (SEIM OK)</span>
        </div>
      </div>
    </div>
  );
};
