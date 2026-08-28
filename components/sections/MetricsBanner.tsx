'use client';

import React from 'react';

export const MetricsBanner: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          
          {/* Stat 1 */}
          <div className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-polo-blue mb-2">120+</div>
            <div className="font-bold text-gray-900 text-sm">Proyectos realizados</div>
            <div className="text-gray-500 text-sm">en Chile</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-polo-blue mb-2">35+</div>
            <div className="font-bold text-gray-900 text-sm">Comunas</div>
            <div className="text-gray-500 text-sm">donde hemos trabajado</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-polo-blue mb-2">10+</div>
            <div className="font-bold text-gray-900 text-sm">Años de experiencia</div>
            <div className="text-gray-500 text-sm">entregando soluciones</div>
          </div>

          {/* Stat 4 */}
          <div className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-polo-blue mb-2">98%</div>
            <div className="font-bold text-gray-900 text-sm">Clientes satisfechos</div>
            <div className="text-gray-500 text-sm">con nuestros servicios</div>
          </div>

        </div>
      </div>
    </section>
  );
};
