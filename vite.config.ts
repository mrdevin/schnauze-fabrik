import { defineConfig } from "vite";
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

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
                impressum: resolve(__dirname, 'impressum/index.html'),
                videos: resolve(__dirname, 'videos/index.html'),
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


