import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import { projectsData } from '@/lib/data';
import { LasCondesCAD, TemucoCAD, PlantaIndustrialCAD } from '@/components/svg/CaseStudyDrawings';
import { ArrowLeft, CheckCircle2, ShieldCheck, MapPin, Calendar, Building2, ChevronRight, FileText, PhoneCall } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default async function ProyectoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const getCADComponent = () => {
    switch (project.slug) {
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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#00A3E0] transition-colors">INICIO</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/proyectos" className="hover:text-[#00A3E0] transition-colors">PROYECTOS</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#00A3E0] uppercase font-bold">{project.slug}</span>
            </div>

            <span className="text-[#00A3E0] font-bold tracking-wider text-xs uppercase mb-3 block font-mono">
              {project.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: CAD & Study Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* High-Res Technical CAD Header */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 font-mono text-xs text-gray-500">
                <span className="font-bold text-polo-blue flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-polo-blue" />
                  <span>PLANO DE INGENIERÍA VIAL APROBADO</span>
                </span>
                <span>ESCALA 1:500</span>
              </div>
              <div className="w-full h-80 bg-slate-50 rounded-xl overflow-hidden">
                {getCADComponent()}
              </div>
            </div>

            {/* Challenge & Solution Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
                <span className="text-[10px] font-bold font-mono text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded">
                  DESAFÍO TÉCNICO
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
                <span className="text-[10px] font-bold font-mono text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                  SOLUCIÓN IMPLEMENTADA
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Methodology */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                Metodología y Software de Análisis
              </h2>
              <div className="space-y-3">
                {project.methodology.map((step, idx) => (
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
                Expedientes Aprobados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-gray-200/80 text-xs text-gray-800 font-medium">
                    <FileText className="w-4 h-4 text-polo-blue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Project Metadata Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Metadata Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3">
                DETALLES DEL EXPEDIENTE
              </h3>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="border-b border-gray-100 pb-2">
                  <span className="text-gray-400 block text-[10px] uppercase">Mandante</span>
                  <span className="text-gray-900 font-bold">{project.client}</span>
                </div>

                <div className="border-b border-gray-100 pb-2">
                  <span className="text-gray-400 block text-[10px] uppercase">Ubicación</span>
                  <span className="text-gray-900 font-bold">{project.location}</span>
                </div>

                <div className="border-b border-gray-100 pb-2">
                  <span className="text-gray-400 block text-[10px] uppercase">Categoría</span>
                  <span className="text-gray-900 font-bold">{project.category}</span>
                </div>

                <div className="border-b border-gray-100 pb-2">
                  <span className="text-gray-400 block text-[10px] uppercase">Resolución Oficial</span>
                  <span className="text-[#00A3E0] font-bold">{project.resolution}</span>
                </div>
              </div>
            </div>

            {/* Metrics Counter Box */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-2">
                MÉTRICAS DEL PROYECTO
              </h3>

              <div className="space-y-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-slate-50 p-3 rounded-lg border border-gray-100">
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">{m.label}</span>
                    <span className="text-base font-bold text-polo-blue font-mono">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Quotation CTA Box */}
            <div className="bg-polo-blue text-white rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-lg font-bold">
                ¿Desarrollas un proyecto similar?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed font-normal">
                Cotiza el Informe de Mitigación Vial (IMIV) de tu obra con el equipo de Polosur Ingeniería.
              </p>

              <Link
                href="/#contacto"
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-polo-blue font-mono font-bold text-xs uppercase rounded-lg shadow hover:bg-gray-100 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>COTIZAR ESTUDIO</span>
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
