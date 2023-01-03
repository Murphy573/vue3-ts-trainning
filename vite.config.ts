import { fileURLToPath, URL } from 'node:url';
import VitePluginChecker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePluginChecker({
      vueTsc: true,
      eslint: {
        lintCommand:
          'eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore',
      },
      stylelint: {
        lintCommand:
          'stylelint "./**/*.{css,less,vue,html}" --fix --cache --mw 0 --allow-empty-input',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    // assetsDir
    cssCodeSplit: true,
    sourcemap: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/styles/variables.less'
          )}";`,
        },
        math: 'strict',
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4400,
    strictPort: true,
    open: true,
    proxy: {},
  },
});
