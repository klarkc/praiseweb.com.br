const { defineConfig } = require('vite-plugin-windicss');
const typography = require('windicss/plugin/typography');
const colors = require('windicss/colors');

module.exports = defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            position: 'relative',
          },
          h2: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            position: 'relative',
          },
          h3: {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            position: 'relative',
          },
          h4: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            position: 'relative',
          },
          img: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          'a.header-anchor': {
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            opacity: '0',
          },
        },
      },
      light: {
        css: {
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
            borderLeftColor: colors.gray['300'],
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
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
});
