'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  step: string; // e.g. "01", "02"
  tag: string; // e.g. "[ INGENIERÍA VIAL ]"
  title: string;
  subtitle?: string;
  titleHighlight?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  step,
  tag,
  title,
  subtitle,
  titleHighlight,
  dark = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 relative"
    >
      {/* Top micro engineering line */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`font-mono text-xs font-bold px-2 py-0.5 border ${
            dark
              ? 'bg-slate-900 border-slate-800 text-polosur-cyan'
              : 'bg-slate-100 border-slate-200 text-slate-700'
          }`}
        >
          {step}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-polosur-cyan font-semibold">
          {tag}
        </span>
        <div className={`h-px flex-1 ${dark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
      </div>

      {/* Main Title */}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-3xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-polosur-cyan underline decoration-polosur-cyan/30 underline-offset-8">
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
