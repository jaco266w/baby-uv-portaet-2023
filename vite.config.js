import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'

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
      }
    }
  },
  // Use the @rollup/plugin-replace plugin to replace the __import__ function with the correct dynamic import function
  optimizeDeps: {
    include: ['react', 'react-dom'],
    plugins: [
      replace({
        __import__: 'import.meta.ROLLUP_CHUNK_URL + '
      })
    ]
  }
})