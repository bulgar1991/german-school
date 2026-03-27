/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'],
      },
      colors: {
        'light-black':   '#2D2D2D',
        'scrollTrack':   '#8A90A1',
        'yellow-scroll': '#FFF261',
      },
    },
  },
  plugins: [],
}