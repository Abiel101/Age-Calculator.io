/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      colors:{
        accent: '#854DFF',
        textBlack: '#151515',
        borderGray: '#CCCCCC',
        dividLine: 'hsl(0, 0%, 94%)'
      },
      fontFamily:{
        poppins: 'Poppins'
      },
      borderRadius:{
        massive: '12.5rem',
        big: '10rem'
      }
    },
  },
  plugins: [],
}

