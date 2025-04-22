/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf4',
          100: '#ccd5e9',
          200: '#99abd3',
          300: '#6682bd',
          400: '#3358a7',
          500: '#002e91',
          600: '#002260',
          700: '#001b4d',
          800: '#00133a',
          900: '#000c27',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: '#EA501D',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '1rem',
        '2xl': '2rem',
      }
    },
  },
  plugins: [],
}
