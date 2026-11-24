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
      backgroundColor: {
        base:     'rgb(var(--color-base-rgb) / <alpha-value>)',
        surface:  'rgb(var(--color-surface-rgb) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated-rgb) / <alpha-value>)',
        card:     'rgb(var(--color-card-rgb) / <alpha-value>)',
      },
      gradientColorStops: {
        base:     'rgb(var(--color-base-rgb) / <alpha-value>)',
        surface:  'rgb(var(--color-surface-rgb) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated-rgb) / <alpha-value>)',
      },
      borderColor: {
        DEFAULT: 'rgb(var(--color-border-rgb) / 0.65)',
        border:  'rgb(var(--color-border-rgb) / <alpha-value>)',
      },
      colors: {
        /* Utilise ces classes dans tes composants */
        /* Ex: className="bg-base text-text-1"    */
        surface:  'rgb(var(--color-surface-rgb) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated-rgb) / <alpha-value>)',
        card:     'rgb(var(--color-card-rgb) / <alpha-value>)',
        border:   'rgb(var(--color-border-rgb) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
          light:   'rgb(var(--color-accent-lt-rgb) / <alpha-value>)',
          bg:      'var(--color-accent-bg)',
          solid:   'rgb(var(--color-accent-solid-rgb) / <alpha-value>)',
          'solid-hover': 'rgb(var(--color-accent-solid-hover-rgb) / <alpha-value>)',
        },
        'text-1': 'rgb(var(--color-text-1-rgb) / <alpha-value>)',
        'text-2': 'rgb(var(--color-text-2-rgb) / <alpha-value>)',
        'text-3': 'rgb(var(--color-text-3-rgb) / <alpha-value>)',
        veil:     'rgb(var(--color-veil-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};