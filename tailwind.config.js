/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A388", // this and heading are primary
        primaryLight: "#00a38814",
        gradientColor: "#006655",
        heading: "#fffc",
        bodyText: "#fff6",
        body: "#000E14", // this is the background color
        white: "#ffffff",
        lightWhite: "",
        lighterWhite: "#ffffff29",
        gray: "#6b7280",
        black: "#000A08",
      },
    },
    screens: {
      xs: { min: "390px" },
      sm: { min: "480px" },
      md: { min: "768px" },
      lg: { min: "1025px" },
      xl: { min: "1280px" },
      "2xl": { min: "1500px" },
      "3xl": { min: "1780px" },
    },
    fontFamily: {
      PlusJakartaSans: ['"PlusJakartaSans"', "sans-serif"],
      RobotoSlab: ['"RobotoSlab"', "serif"],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-rtl"),
    require("@tailwindcss/line-clamp"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
