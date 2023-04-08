/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A388", // this and heading are primary
        primaryLight: "rgba(0, 163, 136, 0.08)",
        primarySchedule: "rgba(0, 163, 136, 0.24)",
        gradientColor: "#006655",
        heading: "rgba(255, 255, 255, 0.8)", // white 80% opacity
        bodyText: "rgba(255, 255, 255, 0.4)", // white 40% opacity
        body: "#000E14", // this is the background color
        white: "#ffffff",
        lightWhite: "rgba(255, 255, 255, 0.64)", // white 64% opacity
        lighterWhite: "rgba(255, 255, 255, 0.16)", //white 16% opacity
        gray: "#6b7280",
        black: "#000A08",
        lightBlack: "#000a08a3",
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
