'use client';

import React from 'react';
import { RoundaboutCAD } from '@/components/svg/RoundaboutCAD';
import { NetworkMapCAD } from '@/components/svg/NetworkMapCAD';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesBento: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-2 block font-mono">
            SERVICIOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            NUESTROS SERVICIOS ESPECIALIZADOS
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Elaboración y tramitación integral en todo Chile para proyectos inmobiliarios, comerciales, industriales y de infraestructura.
          </p>
        </div>

        {/* Services Grid (2 Core Services from official spec) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Service 1: Transporte – IMIV Básico e Intermedio */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-all hover:border-polo-blue">
            <div className="p-5 sm:p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-polo-blue text-xs font-mono font-bold uppercase mb-4">
                <span>TRANSPORTE • SEIM MTT</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                Transporte – IMIV Básico e Intermedio
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                Elaboramos y tramitamos <strong>IMIV Básico</strong> e <strong>IMIV Intermedio</strong> para proyectos inmobiliarios, comerciales, industriales y de infraestructura en todo Chile.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-200/80">
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-polo-blue shrink-0" />
                    <span>IMIV Básico</span>
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Para proyectos de menor impacto. Revisamos el cumplimiento de las medidas de mitigación obligatorias (accesos, veredas, estacionamientos, visibilidad, etc.) y preparamos el expediente completo para su ingreso y seguimiento en el SEIM.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-gray-200/80">
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-polo-blue shrink-0" />
                    <span>IMIV Intermedio</span>
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Para proyectos con mayor generación de viajes. Incluye caracterización de la situación actual, mediciones, modelación de tránsito, análisis de impactos y propuesta de medidas de mitigación obligatorias y adicionales, proporcionales y costo-eficientes.
                  </p>
                </div>

                <p className="text-xs text-gray-600 pt-2 italic">
                  Identificamos desde el inicio las medidas que serán exigibles, de modo que puedas incorporarlas en el diseño y en el presupuesto antes de tramitar. Acompañamos todo el proceso hasta la resolución final.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-gray-100 flex items-center justify-between gap-2">
              <a
                href="#contacto"
                className="text-xs font-mono font-bold text-polo-blue hover:text-polo-blue-dark flex items-center gap-1.5"
              >
                <span>COTIZAR ESTUDIO IMIV</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-gray-500 shrink-0">TODO CHILE</span>
            </div>
          </div>

          {/* Service 2: Medioambiente – Informes Viales */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-all hover:border-polo-blue">
            <div className="p-5 sm:p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-mono font-bold uppercase mb-4">
                <span>MEDIOAMBIENTE • SEIA</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                Medioambiente – Informes Viales
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                Elaboramos Informes Viales requeridos en el marco de <strong>Declaraciones de Impacto Ambiental (DIA)</strong> y otros procedimientos ambientales.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-200/80">
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Antecedentes Técnicos Sólidos</span>
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Entregamos antecedentes técnicos rigurosos y respaldados sobre el sistema de movilidad local y su comportamiento frente a las etapas de construcción y operación.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-gray-200/80">
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Compatibilidad Normativa Total</span>
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Plena compatibilidad con las exigencias del SEIM (Sistema de Evaluación de Impacto en la Movilidad) y de la normativa ambiental vigente.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-gray-200/80">
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Acompañamiento Sectorial</span>
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Respuestas técnicas a observaciones de los organismos evaluadores del Estado durante la tramitación de la DIA.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-gray-100 flex items-center justify-between gap-2">
              <a
                href="#contacto"
                className="text-xs font-mono font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5"
              >
                <span>SOLICITAR INFORME VIAL (DIA)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-gray-500 shrink-0">TODO CHILE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
