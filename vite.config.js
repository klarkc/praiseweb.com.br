import { defineConfig } from 'vite';
import windicss from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    windicss({
      searchDirs: ['.vitepress/theme'],
    }),
  ],
});
