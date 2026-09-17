'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Layers, MapPin, PhoneCall, FileText } from 'lucide-react';

export const MobileTabBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 sm:px-4 py-2 safe-area-pb">
      <div className="flex items-center justify-around text-[10px] font-mono text-slate-400">
        
        {/* Tab 1: Inicio */}
        <Link href="/" className="flex flex-col items-center gap-1 hover:text-[#00A3E0] transition-colors py-1 px-1">
          <Home className="w-5 h-5" />
          <span>Inicio</span>
        </Link>

        {/* Tab 2: Servicios */}
        <Link href="/#servicios" className="flex flex-col items-center gap-1 hover:text-[#00A3E0] transition-colors py-1 px-1">
          <Layers className="w-5 h-5" />
          <span>Servicios</span>
        </Link>

        {/* Center Primary Action: Solicitar IMIV */}
        <Link
          href="/#contacto"
          className="flex flex-col items-center justify-center -mt-5 w-12 h-12 rounded-full bg-[#00A3E0] text-slate-950 shadow-lg shadow-[#00A3E0]/40 border-2 border-slate-950 font-bold active:scale-95 transition-transform shrink-0"
          aria-label="Solicitar IMIV"
        >
          <FileText className="w-5 h-5" />
        </Link>

        {/* Tab 3: Normativa */}
        <Link href="/#normativa" className="flex flex-col items-center gap-1 hover:text-[#00A3E0] transition-colors py-1">
          <MapPin className="w-5 h-5" />
          <span>Normativa</span>
        </Link>

        {/* Tab 4: Contacto */}
        <Link href="/#contacto" className="flex flex-col items-center gap-1 hover:text-[#00A3E0] transition-colors py-1">
          <PhoneCall className="w-5 h-5" />
          <span>Contacto</span>
        </Link>

      </div>
    </div>
  );
};
