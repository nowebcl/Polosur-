'use client';

import React from 'react';

export const ContactCTABanner: React.FC = () => {
  return (
    <section id="contacto" className="bg-polo-blue relative overflow-hidden py-16">
      {/* Background Topographic Wave Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Icon + Text */}
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              HABLEMOS DE TU PROYECTO
            </h2>
            <p className="text-polo-blue-light text-sm max-w-md">
              Estamos listos para ayudarte a desarrollar soluciones técnicas que generen valor y conecten comunidades.
            </p>
          </div>
        </div>

        {/* Right Button */}
        <div>
          <a
            className="bg-white text-polo-blue px-8 py-3 rounded text-sm font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg cursor-pointer"
            href="mailto:contacto@polosur.cl"
          >
            <span>CONTÁCTANOS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};
