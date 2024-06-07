/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '600': '600ms',
      },
      keyframes: {
        loader: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        loader: 'loader 3s linear',
      },
    },
  },
  variants: {},
  plugins: [],
};
