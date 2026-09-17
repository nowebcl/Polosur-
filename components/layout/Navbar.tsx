'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoPolosur } from '@/components/svg/LogoPolosur';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'INICIO', href: '/' },
  { name: 'NOSOTROS', href: '/#nosotros' },
  { name: 'SERVICIOS', href: '/#servicios' },
  { name: 'NORMATIVA', href: '/#normativa' },
  { name: 'CONTACTO', href: '/#contacto' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo Prominente y Más Grande */}
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <LogoPolosur className="h-12 sm:h-16 lg:h-18" isDark={true} />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex space-x-8 items-center font-mono text-xs tracking-wider">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-200 hover:text-[#00A3E0] transition-colors uppercase font-semibold drop-shadow-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/#contacto"
                className="border border-[#00A3E0] text-[#00A3E0] hover:bg-[#00A3E0] hover:text-slate-950 px-6 py-2.5 rounded-sm text-xs font-mono font-bold tracking-wider transition-all duration-200 backdrop-blur-sm bg-slate-950/40 shadow-sm"
              >
                SOLICITAR IMIV
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="https://wa.me/56997728978"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#00A3E0]/20 text-[#00A3E0] border border-[#00A3E0]/40 text-xs"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2.5 rounded-lg bg-slate-900/60 backdrop-blur-md border border-slate-700/60 focus:outline-none"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-sm font-mono tracking-wider text-slate-200 shadow-2xl">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-slate-900 hover:text-[#00A3E0] flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-slate-600 text-xs">→</span>
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-[#00A3E0] text-slate-950 py-3.5 rounded-lg font-bold font-sans uppercase tracking-wider mt-2 shadow-lg"
            >
              COTIZAR INFORME IMIV
            </Link>
          </div>
        )}
      </header>
    </>
  );
};
