/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'polo-blue': '#0070F3',
        'polo-blue-light': '#E6F0FD',
        'polo-blue-dark': '#005BB5',
        'polo-gray-light': '#F8FAFC',
        'polo-text-dark': '#0F172A',
        'polo-text-light': '#64748B',
        'polo-footer-bg': '#0F172A',
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
