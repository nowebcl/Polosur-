'use client';

import React from 'react';
import { ExternalLink, BookOpen, ShieldCheck, Scale, FileCode2, FileText, Download, AlertCircle } from 'lucide-react';

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

        {/* --- BLOQUE DESTACADO: ACTUALIZACIÓN NORMATIVA Y CONSULTA TRANSPARENCIA --- */}
        <div className="mb-14 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-[#00A3E0]/40 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Top Row: Title, Subtitle, External Link */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
                <AlertCircle className="w-3.5 h-3.5 text-[#00A3E0]" />
                <span>PROCESO EN CURSO • MTT CHILE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Actualización Normativa
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-[#00A3E0] mt-1">
                Modificación DS Nº30 /2017 del MTT.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                Participación ciudadana y observaciones sectoriales respecto al nuevo proceso de modificación al Decreto Supremo N° 30 de 2017 del Ministerio de Transportes y Telecomunicaciones.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://www.subtrans.gob.cl/participacion-ciudadana/modificacion2026-ds30de2017/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00A3E0] hover:bg-[#00A3E0]/90 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#00A3E0]/20 active:scale-98"
              >
                <span>VER PROCESO OFICIAL SUBTRANS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sub-bloque: Consulta Transparencia Polosur Ingeniería 2 */}
          <div className="mt-8 relative z-10">
            <div className="mb-6">
              <span className="text-[#00A3E0] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                PARTICIPACIÓN TÉCNICA & TRANSPARENCIA
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Consulta Transparencia Polosur Ingeniería 2 sobre modificación al DS Nº30/2017 del MTT
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Documentos oficiales correspondientes a la recepción formal y respuestas del Ministerio:
              </p>
            </div>

            {/* Grid of 2 Downloadable PDFs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* PDF 1: Recepción de la Consulta */}
              <div className="bg-slate-900/90 border border-slate-800 hover:border-[#00A3E0]/60 rounded-xl p-5 flex flex-col justify-between transition-all group">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00A3E0]/10 border border-[#00A3E0]/30 flex items-center justify-center shrink-0 text-[#00A3E0] group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00A3E0] font-bold block mb-0.5">
                      DOCUMENTO 1
                    </span>
                    <h5 className="text-sm font-bold text-white group-hover:text-[#00A3E0] transition-colors">
                      Recepción de la Consulta
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Comprobante de ingreso y recepción formal de consulta técnica emitida por Polosur Ingeniería 2 ante el MTT.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <a
                    href="/docs/recepcion-consulta-ds30-polosur.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-[#00A3E0] text-slate-200 hover:text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>DESCARGAR / VER PDF</span>
                  </a>
                </div>
              </div>

              {/* PDF 2: Respuestas a la Consulta */}
              <div className="bg-slate-900/90 border border-slate-800 hover:border-[#00A3E0]/60 rounded-xl p-5 flex flex-col justify-between transition-all group">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                      DOCUMENTO 2
                    </span>
                    <h5 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Respuestas a la Consulta
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Oficio y respuestas técnicas oficiales de la autoridad sectorial (MTT) a los requerimientos planteados.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <a
                    href="/docs/respuestas-consulta-ds30-polosur.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>DESCARGAR / VER PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
