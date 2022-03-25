module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary/1': '#3772FF',
        'primary/2': '#9757D7',
        'primary/3': '#EF466F',
        'primary/4': '#45B36B',

        'secondary/1': '#4BC9F0',
        'secondary/2': '#E4D7CF',
        'secondary/3': '#FFD166',
        'secondary/4': '#CDB4DB',

        'neutrals/1': '#141416',
        'neutrals/2': '#23262F',
        'neutrals/3': '#353945',
        'neutrals/4': '#777E91',
        'neutrals/5': '#B1B5C4',
        'neutrals/6': '#E6E8EC',
        'neutrals/7': '#F4F5F6',
        'neutrals/8': '#FCFCFD'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        lm: '0px 8px 16px -8px rgba(15, 15, 15, 0.2);',
        card: '0px 64px 64px -48px rgba(31, 47, 70, 0.12);'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
