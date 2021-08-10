module.exports = {
  purge: [
    "src/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif'],
      'mosaic': ["'Palette Mosaic'", 'cursive'],
      'quicksand': ["'Quicksand'", 'sans-serif'],
      'delius': ["'Delius Swash Caps'", 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
