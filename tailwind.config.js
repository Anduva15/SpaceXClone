/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp1: 'fadeInUp 0.5s ease-in-out 0.2s',
        fadeInUp2: 'fadeInUp 0.5s ease-in-out 0.4s',
        fadeInUp3: 'fadeInUp 0.5s ease-in-out 0.6s',
        fadeIn: 'fadeIn 2s cubic-bezier(0.4, 0, 0.6, 1)',
        animateFill: 'both'
      },
      keyframes: {
        'fadeInUp' : {
          '0%' : {
            opacity: 0,
            transform: 'translateY(140px)',
          },
          '100%' : {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'fadeIn' : {
          '0%' : {
            opacity: 0
          },
          '100%' : {
            opacity: 1,
          }
        }
      },
      fontFamily: {
        familjen: ['Familjen-Grotesk']
    }
    },
  },
  plugins: [],
}
