import { defineConfig } from 'vite-plugin-windicss';
import colors from 'windicss/colors';
import typography from 'windicss/plugin/typography';

/* eslint-disable global-require */
export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
});
