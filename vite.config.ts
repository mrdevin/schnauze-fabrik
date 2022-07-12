import { defineConfig } from "vite";
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
// import favicons from 'rollup-plugin-favicons'
// import html2 from 'rollup-plugin-html2'

// import { VitePWA } from 'vite-plugin-pwa'
// import htmlPlugin from 'vite-plugin-html-config';

const htmlPluginOpt = {
    favicon: './src/img/logo3.svg',

    metas: [
        {
            name: 'keywords',
            content: '3d paper wallart home decoration'
        },
        {
            name: 'description',
            content: 'Design your SPACE with 3D paper'
        }
    ],
}
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            }
        },
        manifest: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})


