'use client';

import React from 'react';
import Link from 'next/link';
import { LogoPolosur } from '@/components/svg/LogoPolosur';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-polo-footer-bg pt-16 pb-8 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <LogoPolosur className="h-14 sm:h-16" isDark={true} />
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Consultora especializada en Informes de Mitigación de Impacto Vial (IMIV Básico e Intermedio) y estudios viales para proyectos en todo Chile.
            </p>

            <div className="flex space-x-3">
              <a
                className="px-3 py-1.5 rounded-md border border-emerald-600/60 bg-emerald-950/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5 hover:bg-emerald-600 hover:text-white transition-colors"
                href="https://wa.me/56997728978"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span>WhatsApp</span>
              </a>

              <a
                className="px-3 py-1.5 rounded-md border border-gray-700 bg-slate-900 text-gray-300 text-xs font-mono flex items-center gap-1.5 hover:text-white hover:border-gray-500 transition-colors"
                href="mailto:fernando.rolleri@polosuringenieria.cl"
                aria-label="Email"
              >
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider font-mono">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-gray-400 hover:text-white transition-colors" href="/">Inicio</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors" href="/#nosotros">Nosotros</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors" href="/#servicios">Servicios</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors" href="/#normativa">Normativa</Link></li>
              <li><Link className="text-gray-400 hover:text-white transition-colors" href="/#contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider font-mono">
              SERVICIOS
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors block" href="/#servicios">
                  Transporte – IMIV Básico e Intermedio
                </Link>
                <span className="text-[11px] font-mono text-gray-500">SEIM / D.S. N° 30 MTT</span>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors block" href="/#servicios">
                  Medioambiente – Informes Viales
                </Link>
                <span className="text-[11px] font-mono text-gray-500">Declaraciones de Impacto Ambiental (DIA)</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider font-mono">
              CONTACTO
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <div>
                  <span className="text-xs text-gray-500 block font-mono">TELÉFONO / WHATSAPP</span>
                  <a href="https://wa.me/56997728978" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 font-mono text-xs">
                    +56 9 9772 8978
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <div>
                  <span className="text-xs text-gray-500 block font-mono">CORREO ELECTRÓNICO</span>
                  <a href="mailto:fernando.rolleri@polosuringenieria.cl" className="text-gray-300 hover:text-white font-mono text-xs break-all">
                    fernando.rolleri@polosuringenieria.cl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <div>
                  <span className="text-xs text-gray-500 block font-mono">COBERTURA</span>
                  <span className="text-gray-300 text-xs">Trabajamos en todo Chile</span>
                  <span className="text-gray-500 text-[11px] block">Atención a proyectos en todas las regiones</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Polosur Ingeniería SpA. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link className="hover:text-white transition-colors" href="#">Política de Privacidad</Link>
            <span>|</span>
            <Link className="hover:text-white transition-colors" href="#">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
