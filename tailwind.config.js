/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#fffaf1",
        azulMarinho: "#004A93",
        laranja: "#FF5E41",
        azul: "#0080FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('assets/waveBack.svg')",
      },
    },
  },
  plugins: [],
};
