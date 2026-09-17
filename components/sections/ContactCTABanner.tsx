'use client';

import React from 'react';

export const ContactCTABanner: React.FC = () => {
  return (
    <section id="contacto" className="bg-polo-blue relative overflow-hidden py-16">
      {/* Background Topographic Wave Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Icon + Text */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
              HABLEMOS DE TU PROYECTO
            </h2>
            <p className="text-polo-blue-light text-xs sm:text-sm max-w-lg leading-relaxed">
              Trabajamos en todo Chile. Será un gusto colaborar contigo y contribuir al éxito de tus proyectos inmobiliarios, comerciales, industriales o de infraestructura.
            </p>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            className="bg-white text-polo-blue px-6 py-3.5 rounded-lg text-xs font-mono font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto text-center"
            href="mailto:fernando.rolleri@polosuringenieria.cl"
          >
            <span>ENVIAR CORREO</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </a>

          <a
            className="bg-emerald-600 text-white px-6 py-3.5 rounded-lg text-xs font-mono font-bold hover:bg-emerald-500 transition-colors inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto text-center"
            href="https://wa.me/56997728978"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>WHATSAPP (+56 9 9772 8978)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
