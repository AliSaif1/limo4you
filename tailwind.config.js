// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        secondary: {
          DEFAULT: '#F59E0B', 
          light: '#FBBF24',
        },
        accent: {
          DEFAULT: '#10B981', 
          light: '#34D399', 
        },
        background: '#F8FAFC',
        text: {
          primary: '#1E293B', 
          secondary: '#64748B',
        },
        error: '#EF4444', 
        success: '#10B981', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}