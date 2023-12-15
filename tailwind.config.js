/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'spring': {
          '50': '#edfff8',
          '100': '#d5fff0',
          '200': '#aeffe2',
          '300': '#70ffcd',
          '400': '#2bfdb1',
          '500': '#00ffa3',
          '600': '#00c076',
          '700': '#009660',
          '800': '#06754e',
          '900': '#076042',
          '950': '#003724',
        },
        Darkbg: '#151517',
        Lightbg: '#EDFFF8'
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
        '4xs': '0.375rem',
      }
    },
  },
  plugins: [],
}

