/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          ermPurple: {
            DEFAULT: '#5A189A',
            dark: '#3C096C',
            light: '#7B2CBF',
          },
          ermGreen: {
            DEFAULT: '#006D42',
            dark: '#004B2D',
            light: '#008751',
          }
        }
      },
    },
    plugins: [],
  }