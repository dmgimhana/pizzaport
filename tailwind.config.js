/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // content: ['./src/**/*.{html,tsx}'],
  theme: {
    fontFamily: {
      heading: ['"Pacifico"', 'cursive'],
      sans: ['"Nunito"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#fce9e7',
          100: '#f8cfc9',
          200: '#f1a199',
          300: '#ea7369',
          400: '#e34639',
          500: '#D14D41',
          600: '#a53d33',
          700: '#792d26',
          800: '#4e1d19',
          900: '#230d0c',
        },
        secondary: {
          50: '#e9f3e9',
          100: '#cfe4d0',
          200: '#9fc9a2',
          300: '#6fad75',
          400: '#3f9247',
          500: '#4E944F',
          600: '#3d763f',
          700: '#2e592f',
          800: '#1e3b1f',
          900: '#0f1e10',
        },
        accent: {
          50: '#fffde8',
          100: '#fffbc1',
          200: '#fff68a',
          300: '#fff052',
          400: '#ffe91b',
          500: '#F4CE14',
          600: '#c3a610',
          700: '#927d0c',
          800: '#625508',
          900: '#312c04',
        },
      },
      height: {
        screen: '100dvh', // 100% of the viewport height
      },
    },
  },
  plugins: [],
}
