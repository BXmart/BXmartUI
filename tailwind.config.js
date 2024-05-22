/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Barlow', 'sans-serif']
    },
    fontWeight: {
      thin: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
}