const { defineConfig } = require('vite-plugin-windicss');
const typography = require('windicss/plugin/typography');
const colors = require('windicss/colors');

module.exports = defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      typography: {
        light: {
          css: [
            {
              color: colors.gray['300'],
              '[class~="lead"]': {
                color: colors.gray['300'],
              },
              a: {
                color: colors.white,
              },
              strong: {
                color: colors.white,
              },
              'ol > li::before': {
                color: colors.gray['300'],
              },
              'ul > li::before': {
                backgroundColor: colors.gray['600'],
              },
              hr: {
                borderColor: colors.gray['200'],
              },
              blockquote: {
                color: colors.gray['200'],
                borderLeftColor: colors.gray['600'],
              },
              h1: {
                color: colors.white,
              },
              h2: {
                color: colors.white,
              },
              h3: {
                color: colors.white,
              },
              h4: {
                color: colors.white,
              },
              'figure figcaption': {
                color: colors.gray['300'],
              },
              code: {
                color: colors.white,
              },
              'a code': {
                color: colors.white,
              },
              pre: {
                color: colors.gray['200'],
                backgroundColor: colors.gray['800'],
              },
              thead: {
                color: colors.white,
                borderBottomColor: colors.gray['300'],
              },
              'tbody tr': {
                borderBottomColor: colors.gray['600'],
              },
            },
          ],
        },
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
});
