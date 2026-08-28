'use client';

import React from 'react';
import Link from 'next/link';
import { LasCondesCAD, TemucoCAD, PlantaIndustrialCAD } from '@/components/svg/CaseStudyDrawings';
import { ArrowRight } from 'lucide-react';

const projectsList = [
  {
    slug: 'las-condes',
    tag: 'ESTUDIO DE IMPACTO VIAL',
    title: 'Proyecto Inmobiliario Las Condes',
    desc: 'Evaluación y mitigación de impacto vial para conjunto residencial de alta densidad.',
    CAD: LasCondesCAD,
  },
  {
    slug: 'temuco',
    tag: 'ESTUDIO DE MOVILIDAD',
    title: 'Plan de Movilidad Urbana Comuna de Temuco',
    desc: 'Diagnóstico y propuestas para una movilidad sustentable e integrada.',
    CAD: TemucoCAD,
  },
  {
    slug: 'san-bernardo',
    tag: 'EVALUACIÓN AMBIENTAL',
    title: 'Declaración de Impacto Ambiental Planta Industrial',
    desc: 'Elaboración de DIA y obtención de RCA para proyecto industrial.',
    CAD: PlantaIndustrialCAD,
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-2 block font-mono">
              PROYECTOS DESTACADOS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-md">
              EXPERIENCIA QUE AVALA RESULTADOS
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-polo-blue font-semibold text-sm flex items-center gap-2 hover:text-polo-blue-dark transition-colors group"
          >
            <span>VER TODOS LOS PROYECTOS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((p) => {
            const CadComponent = p.CAD;
            return (
              <div
                key={p.slug}
                className="group flex flex-col justify-between"
              >
                <div className="w-full h-48 bg-gray-100 rounded-t-xl overflow-hidden relative mb-0 border border-gray-200 border-b-0">
                  <CadComponent />
                </div>
                <div className="p-6 border border-gray-200 rounded-b-xl border-t-0 bg-white group-hover:shadow-md transition-shadow flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-polo-blue uppercase tracking-wider mb-2 block font-mono">
                      {p.tag}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-polo-blue transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 font-normal">
                      {p.desc}
                    </p>
                  </div>
                  
                  <Link
                    href={`/proyectos/${p.slug}`}
                    className="text-polo-blue font-semibold text-sm flex items-center gap-1 group-hover:text-polo-blue-dark transition-colors pt-2 border-t border-gray-100"
                  >
                    <span>VER PROYECTO</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
