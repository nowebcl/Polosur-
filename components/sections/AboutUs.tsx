'use client';

import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const reasons = [
  {
    num: '01',
    title: 'Informes completos y bien fundamentados',
    desc: 'Anticipan las observaciones de la autoridad técnica para asegurar una tramitación fluida y sin contratiempos.',
  },
  {
    num: '02',
    title: 'Modelación con certificación Transyt 17',
    desc: 'Modelación de tránsito con herramientas y metodologías actualizadas y reconocidas formalmente por la autoridad.',
  },
  {
    num: '03',
    title: 'Propuestas de mitigación realistas y costo-eficientes',
    desc: 'Medidas proporcionales, viables constructivamente y alineadas con los objetivos y presupuesto de tu proyecto.',
  },
  {
    num: '04',
    title: 'Acompañamiento técnico continuo',
    desc: 'Soporte técnico durante todo el proceso de revisión y aprobación, dominando el marco actual y las modificaciones del DS N° 30.',
  },
  {
    num: '05',
    title: 'Cumplimiento estricto de plazos comprometidos',
    desc: 'Gestión profesional de cronogramas, con comunicación fluida, transparente y oportuna.',
  },
  {
    num: '06',
    title: '95% de aprobación',
    desc: 'Experiencia concreta y comprobada en la tramitación de Informes de Mitigación de Impacto Vial a lo largo de Chile.',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-2 block font-mono">
            NOSOTROS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            POLOSUR INGENIERÍA 2
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed font-normal">
            En Polosur Ingeniería 2 nos dedicamos a la elaboración de <strong>Informes de Mitigación de Impacto Vial (IMIV)</strong> y a informes viales asociados a DIA.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-sm">
          <div className="max-w-4xl space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Contamos con un equipo especialista en <strong>IMIV Básico e Intermedio</strong>, con experiencia previa en Estudios de Impacto sobre el Sistema de Transporte Urbano (EISTU) y, desde el cambio normativo de 2019, plenamente focalizado en los IMIV bajo el <strong>Decreto Supremo N° 30</strong> del Ministerio de Transportes y Telecomunicaciones.
            </p>

            <p>
              Trabajamos en <strong>todo Chile</strong>. Nuestro enfoque es simple y concreto: <strong>identificar desde la etapa inicial las medidas de mitigación que exigirá el proyecto</strong>, para que puedas incorporarlas a tiempo en el presupuesto y en el diseño. Así evitamos sorpresas, observaciones innecesarias y sobrecostos.
            </p>

            <p>
              Contamos con <strong>certificación en Transyt 17</strong> y modelamos con herramientas y metodologías actualizadas y reconocidas por la autoridad. Estamos permanentemente al día con las modificaciones del DS N° 30 y con el funcionamiento del Sistema de Evaluación de Impacto en la Movilidad (SEIM).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
              <CheckCircle2 className="w-5 h-5 text-polo-blue shrink-0" />
              <div className="font-mono text-xs">
                <span className="font-bold text-gray-900 block">IMIV Básico e Intermedio</span>
                <span className="text-gray-500">Decreto Supremo N° 30 MTT</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
              <Award className="w-5 h-5 text-polo-blue shrink-0" />
              <div className="font-mono text-xs">
                <span className="font-bold text-gray-900 block">Certificación Transyt 17</span>
                <span className="text-gray-500">Modelación reconocida por MTT</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
              <ShieldCheck className="w-5 h-5 text-polo-blue shrink-0" />
              <div className="font-mono text-xs">
                <span className="font-bold text-gray-900 block">+100 Proyectos Desarrollados</span>
                <span className="text-gray-500">95% de aprobación</span>
              </div>
            </div>
          </div>
        </div>

        {/* ¿Por qué trabajar con nosotros? */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-1 block font-mono">
              VALOR AGREGADO
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              ¿Por qué trabajar con nosotros?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-polo-blue hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-polo-blue bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md mb-3 inline-block">
                    {r.num}
                  </span>
                  <h4 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
                    {r.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout: Evaluación Inicial */}
          <div className="mt-8 bg-blue-50/80 border border-blue-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <h4 className="text-sm font-bold text-gray-900">
                Evaluación Inicial de Necesidades
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed font-normal">
                Entendemos que cada proyecto tiene sus particularidades. Por eso ofrecemos una evaluación inicial para analizar las necesidades específicas de tu iniciativa y proponer la mejor forma de abordar el IMIV.
              </p>
            </div>
            <a
              href="#contacto"
              className="w-full sm:w-auto shrink-0 px-5 py-3 rounded-lg bg-polo-blue hover:bg-polo-blue-dark text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm inline-flex items-center justify-center gap-2 text-center"
            >
              <span>SOLICITAR EVALUACIÓN</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
