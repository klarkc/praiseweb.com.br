const { defineConfig } = require('vite-plugin-windicss');
const colors = require('windicss/colors');
const typography = require('windicss/plugin/typography');

module.exports = defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
});
