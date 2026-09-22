import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import { projectsData } from '@/lib/data';
import { LasCondesCAD, TemucoCAD, PlantaIndustrialCAD } from '@/components/svg/CaseStudyDrawings';
import { ArrowRight, MapPin, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Proyectos & Casos de Estudio | Polosur Ingeniería 2',
  description: 'Portafolio de Informes de Mitigación Vial (IMIV), Planes de Movilidad Urbana y Evaluaciones Ambientales aprobadas en Chile.',
};

export default function ProyectosPage() {
  const projectsList = Object.values(projectsData);

  const getCADComponent = (slug: string) => {
    switch (slug) {
      case 'las-condes':
        return <LasCondesCAD />;
      case 'temuco':
        return <TemucoCAD />;
      case 'san-bernardo':
        return <PlantaIndustrialCAD />;
      default:
        return <LasCondesCAD />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between pb-16 md:pb-0">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00A3E0] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>VOLVER AL INICIO</span>
            </Link>

            <span className="text-[#00A3E0] font-bold tracking-wider text-xs uppercase mb-3 block font-mono">
              PORTAFOLIO DE PROYECTOS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              EXPERIENCIA & CASOS DE ÉXITO EN CHILE
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Conoce nuestros proyectos aprobados en el Sistema SEIM MTT, SECTRA y el Sistema de Evaluación de Impacto Ambiental (SEIA).
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((prj) => (
            <div
              key={prj.slug}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-polo-blue/50"
            >
              <div>
                {/* CAD Header Drawing */}
                <div className="w-full h-48 bg-slate-100 relative overflow-hidden border-b border-gray-200">
                  {getCADComponent(prj.slug)}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
                    <span className="font-bold text-polo-blue uppercase">{prj.tag}</span>
                    <span className="text-gray-400">{prj.year}</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-polo-blue transition-colors">
                    {prj.title}
                  </h2>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {prj.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-polo-blue shrink-0" />
                      <span>{prj.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href={`/proyectos/${prj.slug}`}
                    className="w-full flex items-center justify-between text-xs font-mono font-bold text-polo-blue group-hover:text-polo-blue-dark transition-colors py-1"
                  >
                    <span>VER EXPEDIENTE COMPLETO</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <MobileTabBar />
    </main>
  );
}
