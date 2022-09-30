/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkPink: '#CD104D',
        purple: '#9C2C77',
        midLightBrown: '#D0B8A8',
        lightBrown: '#F8EDE3',
        midBrown: '#DFD3C3',
      veryLightGray: '#7F7C82',
      darkGrey:'#343A40'
      },
    },
  },
  plugins: [],
}