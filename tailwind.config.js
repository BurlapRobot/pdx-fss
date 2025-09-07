import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral_0: "#000000",
        neutral_5: "#0D0D0D",
        neutral_20: "#333333",
        neutral_35: "#595959",
        neutral_50: "#808080",
        neutral_65: "#A6A6A6",
        neutral_80: "#CCCCCC",
        neutral_95: "#F2F2F2",
        neutral_100: "#FFFFFF",
        primary_5: "#241C00",
        primary_20: "#705800",
        primary_35: "#BD9400",
        primary_50: "#FFCA08",
        primary_65: "#FFDB57",
        primary_80: "#FFEBA3",
        primary_95: "#FFFCF0",
      },
    },
  },
  plugins: [typography],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
