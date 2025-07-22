import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral_20': '#333333',
        'primary_5': '#241C00'
      },
    },
  },
  plugins: [
    typography,
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}