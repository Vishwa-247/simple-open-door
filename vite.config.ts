
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    componentTagger()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      'process': 'process/browser',
    }
  },
  define: {
    'process.env': {},
    'global': 'window',
  },
  server: {
    port: 8080,
    host: "::"
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false
  }
})
