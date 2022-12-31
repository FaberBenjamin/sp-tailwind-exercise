/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Outfit']
    },
    extend: {
      colors: {
        'body-BG': 'hsl(217, 54%, 11%)',
        'card-BG': 'hsl(216, 50%, 16%)',
        'cyan': 'hsl(178, 100%, 50%)',
        'white': 'hsl(0, 0%, 100%)',
        'line': 'hsl(215, 32%, 27%)',
        'text': 'hsl(215, 51%, 70%)'
      }
    },
  },
  plugins: [],
}
