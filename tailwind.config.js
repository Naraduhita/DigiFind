/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pastelPink: '#2e1065',
        customred: '#b91c1c',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
