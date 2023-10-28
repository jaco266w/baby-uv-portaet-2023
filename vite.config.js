import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    polyfillDynamicImport: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Serve JavaScript files with the correct MIME type
        format: 'es',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js'
      },
      // Serve JavaScript files with the correct MIME type
      outputOptions: {
        mimeTypes: {
          js: 'application/javascript'
        }
      }
    }
  }
})
