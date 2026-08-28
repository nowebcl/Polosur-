'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92dvh] lg:min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      
      {/* --- CINEMATIC IMMERSIVE VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40 lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/70 lg:to-slate-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,12,20,0.3)_100%)] pointer-events-none" />
      </div>

      {/* --- MAIN HERO CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-2xl">
          
          {/* Minimal Monospace Micro-Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[#00A3E0] text-[11px] font-mono font-semibold tracking-wider uppercase mb-5 shadow-sm"
          >
            <span>INGENIERÍA VIAL & SEIM MTT</span>
          </motion.div>

          {/* Refined & Clean Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-sm"
          >
            CONECTA <br />
            <span className="text-[#00A3E0]">
              SOLUCIONES
            </span> <br />
            CON MOVILIDAD
          </motion.h1>

          {/* Clean Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-lg drop-shadow"
          >
            Especialistas en Informes de Mitigación de Impacto Vial (IMIV) y Evaluación Ambiental para proyectos sostenibles, seguros y eficientes en Chile.
          </motion.p>

          {/* Quick Feature Chips (Mobile App Style) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-300"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Ley 20.958 (SEIM)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Simulación VISSIM 3D</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 backdrop-blur-md border border-slate-700/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>98% Aprobación</span>
            </div>
          </motion.div>

          {/* Dual CTAs Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider font-bold px-7 py-3.5 bg-polo-blue hover:bg-polo-blue-dark text-white rounded-lg shadow-lg shadow-blue-500/25 transition-all active:scale-98 text-center group"
            >
              <FileText className="w-4 h-4" />
              <span>COTIZAR INFORME IMIV</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider font-bold px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-lg transition-all text-center"
            >
              <span>EXPLORAR SERVICIOS</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer pb-6 md:pb-0">
        <a href="#servicios" className="flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-widest uppercase">Deslizar</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
