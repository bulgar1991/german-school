/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1704px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'light-black':   '#2D2D2D',
        'scrollTrack':   '#8A90A1',
        'yellow-scroll': '#FFF261',
        'medium-gray': '#707070',
      },
      maxWidth: {
        'screen-3xl': '1704px',
        'screen-4xl': '1920px',
      },
      padding: {
        'mobile': '16px',
        'desktop': '32px',
      },
    },
  },
  plugins: [],
}
