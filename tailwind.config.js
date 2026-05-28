/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#030712',      // Deep dark base
          card: 'rgba(255, 255, 255, 0.03)', // Glassmorphic card base
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          cardHover: 'rgba(255, 255, 255, 0.05)',
        },
        solutions: {
          bg: '#050816',
          primary: '#6366f1',   // Indigo
          accent: '#8b5cf6',    // Purple
          glow: '#22d3ee',      // Cyan glow
        },
        tradehub: {
          bg: '#020205',
          primary: '#10b981',   // Emerald
          accent: '#059669',    // Green
          glow: '#34d399',      // Mint glow
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'grid-move': 'gridMove 40s linear infinite',
        'orb-slow-1': 'orbSlow1 25s ease-in-out infinite',
        'orb-slow-2': 'orbSlow2 20s ease-in-out infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
        orbSlow1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(10%, 15%) scale(1.15)' },
        },
        orbSlow2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.1)' },
          '50%': { transform: 'translate(-12%, -8%) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}

