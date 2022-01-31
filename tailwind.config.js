const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Calibre"', ...fontFamily.sans],
        mono: ['"SF Mono"', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
