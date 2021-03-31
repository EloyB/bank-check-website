module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#050327",
        secondary: "#32EC8D",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
