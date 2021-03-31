import { defineConfig } from 'vite';
import windicss from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    windicss({
      scan: {
        dirs: ['.', '.vitepress/theme'],
      },
    }),
  ],
});
