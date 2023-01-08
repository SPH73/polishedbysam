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
    },
    screens: {},
    container: {
      center: true,
      padding: {},
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "logo-bg": "rgb(var(--color-logo-bg-pink) /1)",
        "logo-text": "rgb(var(--color-logo-text-grey) /1)",
      },
    },
  },
  plugins: [],
};
