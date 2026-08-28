import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import { servicesData } from '@/lib/data';
import { RoundaboutCAD } from '@/components/svg/RoundaboutCAD';
import { NetworkMapCAD } from '@/components/svg/NetworkMapCAD';
import { ArrowLeft, CheckCircle2, Shield, FileText, Cpu, ChevronRight, PhoneCall } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServicioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between pb-16 md:pb-0">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#00A3E0] transition-colors">INICIO</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/servicios" className="hover:text-[#00A3E0] transition-colors">SERVICIOS</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#00A3E0] uppercase font-bold">{service.slug}</span>
            </div>

            <span className="text-[#00A3E0] font-bold tracking-wider text-xs uppercase mb-3 block font-mono">
              {service.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Technical Description & Methodology (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Long Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                Alcance y Justificación Técnica
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                {service.longDesc}
              </p>
            </div>

            {/* Interactive CAD Diagram if IMIV / Movilidad */}
            {service.slug === 'imiv' && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 font-mono text-xs text-gray-500">
                  <span className="font-bold text-polo-blue">ESQUEMA DE MITIGACIÓN CAD</span>
                  <span>ROTonda TÉCNICA</span>
                </div>
                <div className="w-full h-72">
                  <RoundaboutCAD />
                </div>
              </div>
            )}

            {service.slug === 'movilidad' && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 font-mono text-xs text-gray-500">
                  <span className="font-bold text-polo-blue">ESQUEMA DE RED MULTIMODAL</span>
                  <span>GIS & RUTAS</span>
                </div>
                <div className="w-full h-72">
                  <NetworkMapCAD />
                </div>
              </div>
            )}

            {/* Methodology Step-by-Step */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                Metodología de Trabajo & Etapas
              </h2>
              <div className="space-y-3">
                {service.methodology.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-polo-blue font-mono font-bold flex items-center justify-center shrink-0 text-xs border border-blue-100">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                Entregables Oficiales Incluidos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-gray-200/80 text-xs text-gray-800 font-medium">
                    <FileText className="w-4 h-4 text-polo-blue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Key Technical Specs Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Specs Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3">
                FICHA TÉCNICA DEL SERVICIO
              </h3>

              <div className="space-y-3.5 text-xs font-mono">
                {service.specs.map((sp) => (
                  <div key={sp.label} className="border-b border-gray-100 pb-2">
                    <span className="text-gray-400 block text-[10px] uppercase">{sp.label}</span>
                    <span className="text-gray-900 font-bold">{sp.value}</span>
                  </div>
                ))}

                <div className="border-b border-gray-100 pb-2">
                  <span className="text-gray-400 block text-[10px] uppercase">Normativa Aplicable</span>
                  <span className="text-gray-900 font-bold">{service.normative}</span>
                </div>

                <div>
                  <span className="text-gray-400 block text-[10px] uppercase mb-2">Software Especializado</span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.software.map((sw) => (
                      <span key={sw} className="px-2 py-0.5 bg-slate-100 border border-gray-200 rounded text-[10px] text-gray-700">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quotation CTA Box */}
            <div className="bg-polo-blue text-white rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-lg font-bold">
                ¿Necesitas cotizar este servicio?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed font-normal">
                Nuestros ingenieros analizan la cabida técnica de tu proyecto y preparan una propuesta económica personalizada en menos de 24 hrs.
              </p>

              <Link
                href="/#contacto"
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-polo-blue font-mono font-bold text-xs uppercase rounded-lg shadow hover:bg-gray-100 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>SOLICITAR COTIZACIÓN</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      <Footer />
      <MobileTabBar />
    </main>
  );
}
