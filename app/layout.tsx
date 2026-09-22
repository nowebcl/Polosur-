import type { Metadata } from 'next';
import { Inter, Montserrat, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Polosur Ingeniería 2 | IMIV Básico e Intermedio & Estudios Viales en Chile',
  description: 'Consultora especializada en Informes de Mitigación de Impacto Vial (IMIV Básico e Intermedio) y estudios viales para todo Chile. 95% de aprobación, certificación TRANSYT 17 y tramitación SEIM.',
  keywords: ['IMIV Básico', 'IMIV Intermedio', 'Informes de Mitigación de Impacto Vial', 'Polosur Ingeniería 2', 'SEIM', 'TRANSYT 17', 'DS 30 MTT', 'Ley 20.958', 'DIA Informes Viales', 'Chile'],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${spaceMono.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 antialiased selection:bg-polosur-cyan/20 selection:text-polosur-cyan">
        {children}
      </body>
    </html>
  );
}
