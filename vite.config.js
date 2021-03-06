import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'views': path.resolve('src/views'),
      '@components': path.resolve('src/components'),
      "@images": path.resolve(__dirname, "/src/assets/images"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    target: 'es2020'
  }
})
