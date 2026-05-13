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
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#082f49',
        },
        weather: {
          clear: '#fbbf24',
          cloud: '#9ca3af',
          rain: '#60a5fa',
          snow: '#f3f4f6',
          storm: '#7c3aed',
        },
      },
      backgroundImage: {
        'gradient-sunny': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-cloudy': 'linear-gradient(135deg, #667eea 0%, #90a4ae 100%)',
        'gradient-rainy': 'linear-gradient(135deg, #4c63d2 0%, #bc34a6 100%)',
      },
      boxShadow: {
        'weather': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
