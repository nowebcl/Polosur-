'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FieldSurveyIllustration, ModelingWorkstationIllustration, ApprovalWorkflowIllustration } from '@/components/svg/MinimalIllustrations';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, ShieldCheck, Activity, Layers } from 'lucide-react';

const slides = [
  {
    tag: 'LEVANTAMIENTO & TELEMETRÍA',
    title: 'Ingeniería en Terreno y Fotogrametría Aérea',
    desc: 'Medición de flujos vehiculares con cámaras IA, conteos clasificados y levantamiento topográfico de precisión para calibrar matrices de origen-destino.',
    stats: 'Precisión GPS Submétrica / Cobertura Nacional',
    component: FieldSurveyIllustration,
    icon: Activity,
  },
  {
    tag: 'MODELACIÓN 3D & DINÁMICA VIAL',
    title: 'Simulación Microscópica de Tránsito VISSIM',
    desc: 'Modelamos intersecciones críticas, rotondas y accesos complejos. Optimizamos ciclos semafóricos y verificamos niveles de servicio en horas punta.',
    stats: 'Software: VISSIM 24.0 + Synchro 11 + SIDRA',
    component: ModelingWorkstationIllustration,
    icon: Layers,
  },
  {
    tag: 'EXPEDIENTES & MITIGACIÓN VIAL',
    title: 'Aprobación Integral en Plataforma SEIM MTT',
    desc: 'Elaboración rigurosa de Informes de Mitigación de Impacto Vial (IMIV Básico, Intermedio y Mayor) según la Ley 20.958, garantizando cero sobrecostos.',
    stats: '98% Aprobación en 1ª Revisión Sectorial',
    component: ApprovalWorkflowIllustration,
    icon: ShieldCheck,
  },
];

export const EngineeringSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const SlideComponent = slides[current].component;
  const SlideIcon = slides[current].icon;

  return (
    <section className="bg-slate-50/70 py-16 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider Controls Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#00A3E0] font-bold tracking-widest">[ PROCESO DE INGENIERÍA VIAL ]</span>
            <span className="text-slate-400">FASE 0{current + 1} / 0{slides.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
              title={isPlaying ? 'Pausar slider' : 'Reproducir slider'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={prevSlide}
              className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider Card Container */}
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Left Text and Details (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sky-50 border border-sky-100 text-[#00A3E0] rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                  <SlideIcon className="w-3.5 h-3.5" />
                  <span>{slides[current].tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {slides[current].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {slides[current].desc}
                </p>

                <div className="pt-2 text-[11px] font-mono text-slate-500 font-medium">
                  <span className="text-slate-400">ESTÁNDAR: </span>
                  <span className="text-slate-800 font-bold">{slides[current].stats}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Pagination Dots */}
            <div className="pt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === idx ? 'w-8 bg-[#0070F3]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Ir al slide ${idx + 1}`}
                  />
                ))}
              </div>

              <a
                href="#servicios"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0070F3] hover:text-[#005BDB] uppercase tracking-wider group"
              >
                <span>VER SERVICIOS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Vector Illustration (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-8 flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full max-w-[500px] aspect-[16/10] flex items-center justify-center"
              >
                <SlideComponent />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
