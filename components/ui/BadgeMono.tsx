import React from 'react';

interface BadgeMonoProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'dark' | 'outline' | 'success';
  className?: string;
}

export const BadgeMono: React.FC<BadgeMonoProps> = ({
  children,
  variant = 'outline',
  className = '',
}) => {
  const base = 'inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-sm border';

  const variants = {
    cyan: 'bg-polosur-cyan/10 border-polosur-cyan/40 text-polosur-cyan',
    dark: 'bg-slate-900 border-slate-800 text-slate-300',
    outline: 'bg-slate-50 border-slate-200 text-slate-600',
    success: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      <span className="w-1 h-1 rounded-full bg-current"></span>
      {children}
    </span>
  );
};
