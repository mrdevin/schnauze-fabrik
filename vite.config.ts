import { defineConfig } from "vite";
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
import ViteRadar from 'vite-plugin-radar';
// import htmlMinimize from '@sergeymakinen/vite-plugin-html-minimize';
import minifyHTMLLiterals from 'rollup-plugin-minify-html-literals';
import imagemin from "rollup-plugin-imagemin";
import brotli from "rollup-plugin-brotli";
import buildStatistics from 'rollup-plugin-build-statistics';
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa';
import postcssLit from 'rollup-plugin-postcss-lit';
import postcssSimpleVars from 'postcss-simple-vars';
import alias from '@rollup/plugin-alias';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    plugins: [
        wasm(),
        topLevelAwait(),
        postcssLit({
            include: [ '**/*.css\?*'],
            exclude: ['**/*\?html-proxy*'],
            importPackage: 'lit'
        }),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: 'auto',
            manifest: 'auto',
            workbox: {
                globDirectory: 'dist',
                globPatterns: [
                    '**/*.{html,js,css,png,webp,jpg,mp4,mov,webm,glb}'
                ],
                navigateFallbackDenylist: [/^\/*.pdf/],
                skipWaiting: true,

            },
            devOptions: {
                enabled: true
            }
        }),

        buildStatistics({
            projectName: 'schnauze-fabrik',
        }),
        brotli(),
        visualizer(),
        // htmlMinimize({
        //     filter: /\.x?html?$/,
        //     minifierOptions: {
        //         collapseWhitespace: true,
        //         minifyJS: true,
        //         removeComments: true
        //     }
        // }),
        minifyHTMLLiterals(),
        imagemin(),
        vitePluginFaviconsInject('./src/img/logo.svg',
            {
                appName: 'Schnauze Fabrik',
                appDescription: 'Design your SPACE with DIY 3D paper Skulpture. Some assembly required!',
                developerName: 'MrDevin',
                developerURL: null,
                lang: 'de',
                display: "minimal-ui",
                background: '#ffd400',
                theme_color: '#fff'
            }
        ),
        ViteRadar({
            enableDev: false,
            // Google Analytics tag injection
            analytics: {
                id: 'G-WKRSREQMZ0',
                config: {
                    cookie_domain: 'auto',
                    cookie_expires: 63072000,
                    cookie_prefix: 'none',
                    cookie_update: true,
                    cookie_flags: '',
                    send_page_view: true,
                    allow_google_signals: true,
                    allow_ad_personalization_signals: true,
                }
            },
            gtm: {
                id: 'AW-11123207358'
            }
        }),

        alias({
            entries: [{
                find: 'lit-html/lib/shady-render.js',
                replacement: 'node_modules/lit-html/lit-html.js'
            }]
        })
    ],
    build: {
        assetsDir: "code",
        sourcemap: true,
        cssCodeSplit: true,
        manifest: true
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [
                postcssSimpleVars({ variables: {mobileBreakpoint:  '640px'} })
            ]
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        open: true,
        port: 8080,
        host: '0.0.0.0'
    }
})


