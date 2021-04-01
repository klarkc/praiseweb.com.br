const { defineConfig } = require('vite-plugin-windicss');
const typography = require('windicss/plugin/typography');
// const colors = require('windicss/colors');

module.exports = defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
});
