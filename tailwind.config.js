/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
      },
      fontFamily: { Outfit: ["Outfit", "sans-sefir"] },
    },
  },
  plugins: [],
};
