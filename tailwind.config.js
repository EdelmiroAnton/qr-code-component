/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
      },
      fontFamily: { Outfit: ["Outfit", "sans-sefir"] },
    },
  },
  plugins: [],
};
