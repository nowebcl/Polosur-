'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck, Cpu, Clock } from 'lucide-react';

export interface DetailModalData {
  title: string;
  tag: string;
  category: 'servicio' | 'proyecto';
  description: string;
  longDescription: string;
  specs: { label: string; value: string }[];
  methodology: string[];
  deliverables: string[];
  normative: string;
  diagramComponent?: React.ReactNode;
}

interface DetailModalProps {
  data: DetailModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ data, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'detalle' | 'metodologia' | 'entregables'>('detalle');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 flex items-start justify-between border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#00A3E0] mb-2 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></span>
                <span>{data.tag}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                {data.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-50 px-6 font-mono text-xs overflow-x-auto">
            <button
              onClick={() => setActiveTab('detalle')}
              className={`py-3 px-4 font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'detalle'
                  ? 'border-[#0070F3] text-[#0070F3] bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              FICHA TÉCNICA
            </button>
            <button
              onClick={() => setActiveTab('metodologia')}
              className={`py-3 px-4 font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'metodologia'
                  ? 'border-[#0070F3] text-[#0070F3] bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              METODOLOGÍA & SOFTWARE
            </button>
            <button
              onClick={() => setActiveTab('entregables')}
              className={`py-3 px-4 font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'entregables'
                  ? 'border-[#0070F3] text-[#0070F3] bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              ENTREGABLES & SEIM
            </button>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {activeTab === 'detalle' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">
                    Alcance del Proyecto / Servicio
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {data.longDescription || data.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="bg-slate-50 border border-slate-200 rounded p-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                    <Cpu className="w-4 h-4 text-[#00A3E0]" />
                    Parámetros Técnicos Clave
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    {data.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-200/70 last:border-0">
                        <span className="text-slate-500">{spec.label}:</span>
                        <span className="font-bold text-slate-800">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Embedded CAD Diagram */}
                {data.diagramComponent && (
                  <div className="border border-slate-200 rounded overflow-hidden">
                    {data.diagramComponent}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'metodologia' && (
              <div className="space-y-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">
                  Procedimiento de Modelación & Simulación
                </h4>
                <div className="space-y-3">
                  {data.methodology.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                      <span className="w-6 h-6 rounded-full bg-[#0070F3] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'entregables' && (
              <div className="space-y-6">
                <div className="bg-sky-50 border border-sky-100 p-4 rounded text-xs text-sky-950 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#00A3E0] shrink-0" />
                  <div>
                    <span className="font-bold block">Marco Regulatorio Vigente</span>
                    <span className="text-sky-800">{data.normative}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">
                    Documentos y Archivos Entregables
                  </h4>
                  <div className="space-y-2">
                    {data.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-mono">
              ASESORÍA TÉCNICA DIRECTA POLOSUR INGENIERÍA 2
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-slate-300 text-slate-700 text-xs font-bold rounded-[2px] hover:bg-slate-100 transition-colors w-full sm:w-auto"
              >
                CERRAR
              </button>
              <a
                href="#contacto"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0070F3] hover:bg-[#005BDB] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
              >
                <span>SOLICITAR COTIZACIÓN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
