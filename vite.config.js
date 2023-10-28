import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Serve JavaScript files with the correct MIME type
        mimeTypes: {
          js: 'application/javascript'
        }
      }
    }
  }
})
