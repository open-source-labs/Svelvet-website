/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      screens: {
        contributors: { raw: '(min-width: 935px)' },
      },
    },
  },
  plugins: [],
};
