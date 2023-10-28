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
      }
    }
  },
  // Use the renderDynamicImport plugin hook to serve JavaScript files with the correct MIME type
  optimizeDeps: {
    include: ['react', 'react-dom'],
    plugins: [
      {
        name: 'renderDynamicImport',
        async renderChunk(code, chunk) {
          if (chunk.type === 'chunk') {
            return {
              code: code.replace(
                /__import__\(/g,
                'import.meta.ROLLUP_CHUNK_URL + '
              )
            }
          }
          return null
        }
      }
    ]
  }
})
