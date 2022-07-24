import { defineConfig } from "vite";
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';



export default defineConfig({
    plugins: [
        vitePluginFaviconsInject('./src/img/logo.svg',
         {
            appName: 'Schnauze Fabrik',
            appDescription: 'Design your SPACE with DIY 3D paper Skulpture',
            developerName: 'MrDevin',
            developerURL: null,
            lang: 'de',
            display: "minimal-ui",
            background: '#ddd',
            theme_color: '#333'
        }

        )
    ],
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
    },
    server: {
        open: true,
        port: 8080
    }
})


