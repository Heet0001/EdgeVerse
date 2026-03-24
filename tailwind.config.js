/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        deep: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
        },
        accent: {
          cyan: '#00e5ff',
          emerald: '#00c896',
          violet: '#71717a',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'dropdown-in': 'dropdownIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dropdownIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(0, 0, 0, 0.15)',
        'glow-lg': '0 0 60px -15px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(0, 0, 0, 0.12)',
        'dropdown': '0 20px 60px -15px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255,255,255,0.05)',
        'cta-glow': '0 0 20px rgba(0, 229, 255, 0.25), 0 0 40px rgba(0, 200, 150, 0.15)',
      },
    },
  },
  plugins: [],
}
