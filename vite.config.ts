import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import unoCSS from 'unocss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import { visualizer } from 'rollup-plugin-visualizer';
import Markdown from 'vite-plugin-md';

const DEV_CONFIG = {
  config: {
    base: './',
    server: {
      host: '0.0.0.0',
      port: 6688,
      open: true,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    eslintPlugin({
      cache: false,
      include: [
        'docs/**/*.{js,ts,vue}',
        'docs/*.{js,ts,vue}',
        '*.{js,ts}',
        'packages/**/*.{js,ts,vue}',
        'packages/*.{js,ts,vue}',
      ],
      fix: true
    }),
  ]
}

const DOCS_CONFIG = {
  config: {
    base: './',
    build: {
      outDir: `dist`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    eslintPlugin({
      cache: false,
      include: [
        'docs/**/*.{js,ts,vue}',
        'docs/*.{js,ts,vue}',
        '*.{js,ts}',
        'packages/**/*.{js,ts,vue}',
        'packages/*.{js,ts,vue}',
      ],
      fix: true
    }),
    // visualizer({
    //   open: true
    // })
  ]
}

export default defineConfig(({mode}) => {
  const viteConfig = mode === 'dev' ? DEV_CONFIG : DOCS_CONFIG

  return {
    ...viteConfig.config,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    },

    plugins: [
      ...viteConfig.plugins,

      unoCSS(),

      stylelintPlugin({
        include: [
          'src/**/*.{css,scss,less}',
        ],
        fix: true
      })
    ]
  };
});
