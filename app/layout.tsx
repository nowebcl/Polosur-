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
  title: 'POLOSUR INGENIERÍA | Informes IMIV & Ingeniería de Tránsito en Chile',
  description: 'Consultora especializada en Informes de Mitigación de Impacto Vial (IMIV), simulación de tránsito (VISSIM/Synchro) y modelos de movilidad urbana en Chile. Aprobación SEIM.',
  keywords: ['IMIV', 'Mitigación Impacto Vial', 'Ingeniería de Tránsito', 'SEIM', 'Chile', 'Polosur Ingeniería', 'VISSIM', 'Synchro', 'Ley 20.958'],
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
