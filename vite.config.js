import { defineConfig } from 'vite';
import windicss from 'vite-plugin-windicss';

export default defineConfig({
  optimizeDeps: {
    exclude: [
      '@vueuse/core',
    ],
  },
  plugins: [
    windicss({
      scan: {
        dirs: ['.', '.vitepress/theme'],
      },
    }),
  ],
});
