// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF3737',

          secondary: '#666666',

          accent: '#37CDBE',

          neutral: '#E6E6E6',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
