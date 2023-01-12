import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css:{
    postcss
  },
  resolve: {
    alias: {
      $root: path.resolve('./src'),
    },
  },
})
