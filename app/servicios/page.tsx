import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import { servicesData } from '@/lib/data';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Servicios de Ingeniería de Tránsito & IMIV | Polosur Ingeniería 2',
  description: 'Catálogo de servicios especializados en Informes de Mitigación Vial (IMIV), Simulación VISSIM, Evaluación Ambiental y Diseño Vial en Chile.',
};

export default function ServiciosPage() {
  const servicesList = Object.values(servicesData);

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
              CATÁLOGO DE SERVICIOS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              SOLUCIONES DE INGENIERÍA VIAL & MOVILIDAD
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Cumplimiento estricto de la Ley 20.958, tramitación en plataforma SEIM del Ministerio de Transportes y modelación computacional avanzada para desarrollos de cualquier escala.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv) => (
            <div
              key={srv.slug}
              className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-polo-blue/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold font-mono text-polo-blue bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase">
                    {srv.category}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {srv.slug.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-polo-blue transition-colors">
                  {srv.title}
                </h2>

                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-normal">
                  {srv.shortDesc}
                </p>

                {/* Specs List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-gray-100 font-mono text-[11px] text-gray-700">
                  {srv.specs.slice(0, 2).map((sp) => (
                    <div key={sp.label} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-polo-blue shrink-0" />
                      <span><strong>{sp.label}:</strong> {sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={`/servicios/${srv.slug}`}
                  className="w-full flex items-center justify-between text-xs font-mono font-bold text-polo-blue group-hover:text-polo-blue-dark transition-colors py-2"
                >
                  <span>VER DETALLE TÉCNICO</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
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
