module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ['"Source Sans Pro"', "sans-serif"],
        icon: ['"Material Icons"'],
      },
      colors: {
        "dkhd-purple": {
          DEFAULT: "#8682D9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#f3f2fb",
          300: "#D2D0F1",
          400: "#ACA9E5",
          500: "#8682D9",
          600: "#605BCD",
          700: "#3F39BC",
          800: "#322D95",
          900: "#25216E",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
