/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        10: "10",
      },
      colors: {
        primary: "#00A388",
        primaryDarker: "#032728",
        primaryLight: "rgba(0, 163, 136, 0.08)",
        primaryDark: "rgba(0, 163, 136, 0.48)",
        primarySchedule: "rgba(0, 163, 136, 0.24)",
        gradientColor: "#006655",
        /// BUTTONS ///
        // Primary ///
        primaryBtnHoverFrom: "#00CCAA",
        primaryBtnHoverTo: "#007864",
        // Secondary ///
        secondaryBtnHoverBg: "rgba(0, 163, 136, .12)", // primary 12% opacity
        // Tertiary ///
        tertiaryBtnHoverBg: "#00CCAA",

        heading: "rgba(255, 255, 255, 1)", // white, normal but to stop using white.
        bodyTextLight: "rgba(255, 255, 255, 0.8)", // white 80% opacity
        bodyText: "rgba(255, 255, 255, 0.64)", // white 64% new base.
        bodyTextDark: "rgba(255, 255, 255,  0.4)", // white 40% opacity.
        body: "#000E14", // this is the background color. Blueish black.
        white: "#ffffff",
        lightWhite: "rgba(255, 255, 255, 0.64)", // white 64% opacity. will depreciate. use bodyText
        lighterWhite: "rgba(255, 255, 255, 0.16)", //white 16% opacity. will depreciate. use bodyTextDark
        gray: "#6b7280",
        black: "#000A08", // ZAITECH BLACK
        lightBlack: "rgba(0, 10, 8,  0.64)",
        lighterBlack: "rgba(0, 10, 8, 0.24)",
        red: "rgba(179,58,58,1)",
        lightRed: "rgba(179,58,58,0.08)",
        yellow: "rgba(247,203,115,1)",
        lightYellow: "rgba(247,203,115,0.08)",
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
