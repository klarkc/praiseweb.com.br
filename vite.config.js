import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        windicss({
            searchDirs: ['.vitepress/theme']
        })
    ]
})