/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #0cbaba, #380036)',
        'custom-gradient-rev': 'linear-gradient(to right, #380036, #0cbaba)',
        


      },
    },
  },
  plugins: [],
};
