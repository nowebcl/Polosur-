'use client';

import React from 'react';
import { ExternalLink, BookOpen, ShieldCheck, Scale, FileCode2 } from 'lucide-react';

interface NormativeItem {
  title: string;
  badge: string;
  org: string;
  description: string;
  link?: string;
  linkText?: string;
}

const normativeList: NormativeItem[] = [
  {
    title: 'Decreto Supremo N° 30, de 2017',
    badge: 'D.S. N° 30 MTT / MINVU',
    org: 'Ministerio de Transportes y Telecomunicaciones',
    description: 'Reglamento sobre mitigación de impactos al sistema de movilidad local derivados de proyectos de crecimiento urbano.',
    link: 'https://www.bcn.cl/leychile/navegar?idNorma=1131679',
    linkText: 'bcn.cl/leychile – Norma 1131679',
  },
  {
    title: 'Ley N° 20.958 de Aportes al Espacio Público',
    badge: 'LEY 20.958',
    org: 'Biblioteca del Congreso Nacional de Chile',
    description: 'Establece el sistema de aportes al espacio público e introduce las mitigaciones directas (IMIV) en la Ley General de Urbanismo y Construcciones.',
    link: 'https://www.bcn.cl/leychile/navegar?idNorma=1095541',
    linkText: 'bcn.cl/leychile – Norma 1095541',
  },
  {
    title: 'Sistema de Evaluación de Impacto en la Movilidad',
    badge: 'PLATAFORMA SEIM',
    org: 'Ministerio de Transportes y Telecomunicaciones',
    description: 'Plataforma oficial del MTT para el ingreso, tramitación, revisión y seguimiento de los IMIV Básico, Intermedio y Mayor.',
    link: 'https://seim.mtt.gob.cl/',
    linkText: 'seim.mtt.gob.cl',
  },
  {
    title: 'Manual de Carreteras',
    badge: 'VIALIDAD MOP',
    org: 'Dirección de Vialidad – Ministerio de Obras Públicas',
    description: 'Criterios técnicos oficiales para el diseño geométrico, construcción y operación de infraestructura vial y accesos.',
    link: 'https://mc.mop.gob.cl/',
    linkText: 'mc.mop.gob.cl',
  },
  {
    title: 'Manual de Señalización de Tránsito',
    badge: 'CONASET / MTT',
    org: 'Comisión Nacional de Seguridad de Tránsito',
    description: 'Normas y estándares de señalización vertical, demarcaciones viales y dispositivos de control de tránsito.',
    link: 'https://www.conaset.cl/area-infraestructura/manual-de-senalizacion-de-transito/',
    linkText: 'conaset.cl – Manual de Señalización',
  },
  {
    title: 'OGUC & Ordenanzas Comunales',
    badge: 'MARCO GENERAL',
    org: 'MINVU & Direcciones de Obras Municipales (DOM)',
    description: 'Ordenanza General de Urbanismo y Construcciones, ordenanzas municipales aplicables en cada comuna, resoluciones y fichas complementarias de mitigaciones obligatorias.',
  },
];

export const NormativeSection: React.FC = () => {
  return (
    <section id="normativa" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background blueprint grid subtle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#00A3E0] text-xs font-mono font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <Scale className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>MARCO TÉCNICO Y LEGAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            NORMATIVA VIGENTE & REGULACIÓN VIAL
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Trabajamos bajo el marco legal vigente y mantenemos actualizado nuestro conocimiento de las normas que rigen los IMIV y los estudios viales en Chile. Consideramos permanentemente las resoluciones y fichas complementarias de medidas de mitigación obligatorias que dicta el MTT, así como las actualizaciones continuas del DS N° 30.
          </p>
        </div>

        {/* Normative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {normativeList.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#00A3E0]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A3E0]/5 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#00A3E0] bg-[#00A3E0]/10 border border-[#00A3E0]/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-[#00A3E0] transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#00A3E0] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-[11px] font-mono text-slate-400 mb-3">
                  {item.org}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00A3E0] hover:text-white transition-colors group/link"
                  >
                    <span>{item.linkText || 'Consultar norma oficial'}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Aplicación y cumplimiento continuo</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-slate-950/60 border border-slate-800/90 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00A3E0]/10 border border-[#00A3E0]/30 flex items-center justify-center shrink-0 text-[#00A3E0] mt-0.5 sm:mt-0">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Tienes dudas sobre qué categoría de IMIV aplica a tu proyecto?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Realizamos una evaluación inicial técnica para identificar las exigencias del D.S. N° 30 y del SEIM.</p>
            </div>
          </div>
          <a
            href="#contacto"
            className="w-full sm:w-auto shrink-0 px-5 py-3 rounded-lg bg-[#00A3E0] hover:bg-[#00A3E0]/90 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider transition-all text-center justify-center inline-flex items-center"
          >
            CONSULTAR EVALUACIÓN INICIAL
          </a>
        </div>

      </div>
    </section>
  );
};
