'use client';

import React from 'react';
import Link from 'next/link';
import { RoundaboutCAD } from '@/components/svg/RoundaboutCAD';
import { NetworkMapCAD } from '@/components/svg/NetworkMapCAD';
import { ArrowRight } from 'lucide-react';

export const ServicesBento: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-polo-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-2 block font-mono">
              SERVICIOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              SOLUCIONES INTEGRALES PARA CADA PROYECTO
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-sm">
              Ofrecemos servicios especializados en ingeniería de tránsito y evaluación ambiental, cumpliendo con la normativa y estándares más exigentes.
            </p>
          </div>
        </div>

        {/* Main Services Cards (Bento) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: IMIV */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 text-polo-blue mb-6">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">IMIV</h3>
              <h4 className="font-semibold text-gray-700 mb-4">Informe de Mitigación de Impacto Vial</h4>
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                Evaluamos el impacto que generan los proyectos en el sistema de transporte, proponiendo medidas de mitigación eficientes.
              </p>
              <Link
                href="/servicios/imiv"
                className="text-polo-blue font-semibold text-sm flex items-center gap-2 group-hover:text-polo-blue-dark transition-colors cursor-pointer text-left"
              >
                <span>SABER MÁS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-50 relative overflow-hidden flex items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-100">
              <RoundaboutCAD />
            </div>
          </div>

          {/* Card 2: Estudios de Movilidad */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 text-polo-blue mb-6">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Estudios de<br/>Movilidad</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                Analizamos y diseñamos estrategias de movilidad sustentable para ciudades y proyectos.
              </p>
              <Link
                href="/servicios/movilidad"
                className="text-polo-blue font-semibold text-sm flex items-center gap-2 group-hover:text-polo-blue-dark transition-colors cursor-pointer text-left"
              >
                <span>SABER MÁS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-50 relative overflow-hidden flex items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-100">
              <NetworkMapCAD />
            </div>
          </div>

        </div>

        {/* Additional Services Grid with Direct Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service 1 */}
          <Link
            href="/servicios/modelacion"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 text-polo-blue mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-polo-blue transition-colors">Modelación de Tránsito</h4>
              <p className="text-sm text-gray-500 mb-4">Simulamos escenarios para una toma de decisiones informada.</p>
            </div>
            <span className="text-polo-blue text-xs font-mono font-bold flex items-center gap-1 group-hover:underline">
              <span>VER SERVICIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Service 2 */}
          <Link
            href="/servicios/ambiental"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 text-polo-blue mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-polo-blue transition-colors">Evaluación Ambiental</h4>
              <p className="text-sm text-gray-500 mb-4">Estudios de impacto ambiental y asesoría en obtención de permisos sectoriales.</p>
            </div>
            <span className="text-polo-blue text-xs font-mono font-bold flex items-center gap-1 group-hover:underline">
              <span>VER SERVICIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Service 3 */}
          <Link
            href="/servicios/normativa"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 text-polo-blue mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-polo-blue transition-colors">Asesoría Normativa</h4>
              <p className="text-sm text-gray-500 mb-4">Cumplimiento de normativa nacional y local en transporte y medio ambiente.</p>
            </div>
            <span className="text-polo-blue text-xs font-mono font-bold flex items-center gap-1 group-hover:underline">
              <span>VER SERVICIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Service 4 */}
          <Link
            href="/servicios/diseno"
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 text-polo-blue mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-polo-blue transition-colors">Diseño de Soluciones</h4>
              <p className="text-sm text-gray-500 mb-4">Propuestas técnicas a medida para mejorar la operación y seguridad vial.</p>
            </div>
            <span className="text-polo-blue text-xs font-mono font-bold flex items-center gap-1 group-hover:underline">
              <span>VER SERVICIO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-polo-blue hover:text-polo-blue-dark border border-polo-blue px-6 py-3 rounded-lg hover:bg-polo-blue hover:text-white transition-all shadow-sm"
          >
            <span>VER TODOS LOS SERVICIOS DE POLOSUR</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
