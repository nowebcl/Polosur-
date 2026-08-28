'use client';

import React from 'react';

export const KeyPoints: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-gray-200">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-4 px-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-polo-blue">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ENFOQUE TÉCNICO</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Soluciones basadas en datos y normativa vigente.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 px-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-polo-blue">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">SOSTENIBILIDAD</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Proyectos que consideran el entorno y las personas.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 px-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-polo-blue">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">COMPROMISO</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Acompañamiento experto en todas las etapas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
