/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        veryPaleCyan: "hsl(193, 100%, 96%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        grayishBlue: "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        openSans: '"Open Sans", sans-serif',
      },
      backgroundImage: {
        heroMobile: "url('/image/bg-hero-mobile.svg')",
        heroDesktop: "url('/img/bg-hero-desktop.svg')",
      },
      screens: {
        sp: { max: "375px" },
        md: { min: "800px" },
        tab: { min: "600px" },
      },
    },
  },
  plugins: [],
};
