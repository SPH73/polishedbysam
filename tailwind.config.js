/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    fontFamily: {
      poiret: ["PoiretOne-Regular", "sans-serif"],
      questrial: ["Questrial-Regular", "sans-serif"],
      "raleway-regular": ["Raleway-Regular", "sans-serif"],
      "raleway-bold": ["Raleway-Bold", "sans-serif"],
      "raleway-medium": ["Raleway-Medium", "sans-serif"],
      "raleway-semibold": ["Raleway-SemiBold", "sans-serif"],
      "raleway-light": ["Raleway-Light", "sans-serif"],
    },
    screens: {
      sm: "390px", // mobile 1 UK
      md: "768px", // tablet 1 UK
      lg: "1280px", // tablet
      xl: "1366px", //desktop 3
      "2xl": "1536px", //desktop 2
      "3xl": "1920px", //Desktop 1
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "8rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "rgb(var(--color-primary) / 1)", //grey
        secondary: "rgb(var(--color-secondary) / 1)", //pink
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
