/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },

      borderWidth: {
        6: '6px'
      },

      colors: {
        violet: {
          25: '#fcfaff'
        },
        primary: {
          25: '#F4DFF3',
          50: '#E6BFE6',
          100: '#CC99CC',
          200: '#996699',
          300: '#7F4D7F',
          400: '#662066',
          500: '#9E2896',
          600: '#4D144D',
          700: '#3E113E',
          800: '#330E33',
          900: '#280A28',
          950: '#1A061A',
        },
        boschGreen: {
          500: '#00884A'
        },
        boschRed: {
          500: '#ED0007'
        },
        boschBlue: {
          500: '#007BC0'
        }

      },

      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A',
      },

      maxWidth: {
        app: '700px'
      },

    },
  },
  plugins: [],
}