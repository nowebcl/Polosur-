'use client';

import React from 'react';
import { Linkedin, Instagram, ArrowUpRight, Award, CheckCircle, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ing. Cristóbal Valenzuela',
    role: 'Director Técnico & Especialista IMIV Senior',
    specialty: 'Ley 20.958 & Plataforma SEIM',
    bio: 'Ingeniero Civil en Transportes con más de 12 años liderando la aprobación de Informes de Mitigación Vial complejos.',
    linkedin: 'https://linkedin.com/in/cristobal-valenzuela-polosur',
    instagram: 'https://instagram.com/polosur.ingenieria',
    image: '/team-cristobal.jpg',
  },
  {
    name: 'Ing. Valentina Morales',
    role: 'Líder de Simulación de Tránsito (VISSIM 3D)',
    specialty: 'Modelación Micro & Synchro 11',
    bio: 'Especialista en calibración de redes complejas, optimización de tiempos de despeje y programación de fases semafóricas.',
    linkedin: 'https://linkedin.com/in/valentina-morales-polosur',
    instagram: 'https://instagram.com/polosur.ingenieria',
    image: '/team-valentina.jpg',
  },
  {
    name: 'Ing. Matías Sepúlveda',
    role: 'Especialista en Diseño Geométrico & Pavimentación',
    specialty: 'AutoTURN & Manual REDEVU',
    bio: 'Diseño de detalle en trazados viales, empalmes de accesos sobre calzadas nacionales y análisis de vehículos pesados (WB-20).',
    linkedin: 'https://linkedin.com/in/matias-sepulveda-polosur',
    instagram: 'https://instagram.com/polosur.ingenieria',
    image: '/team-matias.jpg',
  },
  {
    name: 'Dra. Camila Navarrete',
    role: 'Consultora Ambiental & Tramitación SEIA',
    specialty: 'DIA / EIA & Permisos Sectoriales',
    bio: 'Líder de evaluación ambiental, modelación de emisiones atmosféricas y gestión de resoluciones RCA favorables ante el SEA.',
    linkedin: 'https://linkedin.com/in/camila-navarrete-polosur',
    instagram: 'https://instagram.com/polosur.ingenieria',
    image: '/team-camila.jpg',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-2 block font-mono">
            QUIÉNES SOMOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            EQUIPO DE INGENIERÍA & EXCELENCIA TÉCNICA
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
            Somos una consultora técnica chilena multidisciplinaria enfocada en la modelación avanzada de transporte, mitigación vial y sostenibilidad urbana para el sector inmobiliario e industrial.
          </p>
        </div>

        {/* Top Hero Banner of Team (Realistic Photography on Clean White Background) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-gray-200/80 rounded-2xl p-6 sm:p-10 mb-16 overflow-hidden">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-mono font-bold text-polo-blue shadow-sm">
              <Shield className="w-3.5 h-3.5 text-polo-blue" />
              <span>CONSULTORA ACREDITADA SEIM</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Soluciones de transporte de alto estándar con respaldo legal garantizado
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              En Polosur Ingeniería combinamos más de una década de experiencia con el uso de herramientas de modelación computacional de última generación. Nuestro equipo acompaña cada proyecto desde el anteproyecto hasta la recepción final de obras.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-gray-700">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200/70 shadow-sm">
                <CheckCircle className="w-4 h-4 text-polo-blue shrink-0" />
                <span>Equipo Multidisciplinario</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200/70 shadow-sm">
                <Award className="w-4 h-4 text-polo-blue shrink-0" />
                <span>+120 Informes Aprobados</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-[540px] rounded-xl overflow-hidden border border-gray-200 shadow-md group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/team-engineers.jpg"
                alt="Equipo de Ingenieros Polosur"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-white border border-slate-700/60">
                SANTIAGO, CHILE • POLOSUR INGENIERÍA
              </div>
            </div>
          </div>

        </div>

        {/* Team Members Grid with Realistic Portraits, LinkedIn & Instagram Links */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-100">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900">
              PROFESIONALES DESTACADOS
            </h3>
            <span className="font-mono text-xs text-gray-400">INGENIERÍA POLOSUR</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-polo-blue/50"
              >
                <div>
                  {/* Member Photo on Clean Background */}
                  <div className="w-full aspect-square bg-slate-100 overflow-hidden relative border-b border-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Social Quick Links */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#0070F3] hover:bg-white shadow-sm transition-all"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:text-pink-600 hover:bg-white shadow-sm transition-all"
                        aria-label={`Instagram de ${member.name}`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-bold font-mono text-polo-blue uppercase tracking-wider block mb-1">
                      {member.specialty}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-polo-blue transition-colors leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mb-3">
                      {member.role}
                    </p>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-polo-blue font-semibold">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <span>CONECTAR</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
