/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Archivo', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        /* Utilise ces classes dans tes composants */
        /* Ex: className="bg-base text-text-1"    */
        base:     'var(--color-base)',
        surface:  'var(--color-surface)',
        elevated: 'var(--color-elevated)',
        card:     'var(--color-card)',
        border:   'var(--color-border)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          light:   'var(--color-accent-lt)',
          bg:      'var(--color-accent-bg)',
        },
        text: {
          '1': 'var(--color-text-1)',
          '2': 'var(--color-text-2)',
          '3': 'var(--color-text-3)',
        },
      },
    },
  },
  plugins: [],
};