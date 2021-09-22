module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        button: "#61acb3"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
