'use client';

import React from 'react';

export const MetricsBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:divide-x lg:divide-gray-100">
          
          {/* Stat 1 */}
          <div className="text-center px-1 sm:px-4">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-polo-blue mb-1.5">+100</div>
            <div className="font-bold text-gray-900 text-xs sm:text-sm">Proyectos desarrollados</div>
            <div className="text-gray-500 text-[11px] sm:text-xs">en todo Chile</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center px-1 sm:px-4">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-polo-blue mb-1.5">95%</div>
            <div className="font-bold text-gray-900 text-xs sm:text-sm">Tasa de aprobación</div>
            <div className="text-gray-500 text-[11px] sm:text-xs">ante la autoridad revisora</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center px-1 sm:px-4">
            <div className="text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-polo-blue mb-1.5 tracking-tight whitespace-nowrap">
              TRANSYT 17
            </div>
            <div className="font-bold text-gray-900 text-xs sm:text-sm">Certificación oficial</div>
            <div className="text-gray-500 text-[11px] sm:text-xs">en modelación de tránsito</div>
          </div>

          {/* Stat 4 */}
          <div className="text-center px-1 sm:px-4">
            <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-polo-blue mb-1.5 tracking-tight whitespace-nowrap">
              D.S. N° 30
            </div>
            <div className="font-bold text-gray-900 text-xs sm:text-sm">Especialistas SEIM</div>
            <div className="text-gray-500 text-[11px] sm:text-xs">tramitación ágil y rigurosa</div>
          </div>

        </div>
      </div>
    </section>
  );
};
