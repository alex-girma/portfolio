/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '350px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      fontSize: {
        xxxs: '0.55rem',
        xxs: '0.7rem',
      },
      rotate: {
        270: '270deg',
        30: '300deg',
        60: '330deg',
        120: '30deg',
        160: '60deg',
      },
      width: {
        62: '15.5rem',
      },
      height: {
        62: '15.5rem',
      },
    },
  },
  plugins: [],
};
