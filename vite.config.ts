
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // We're removing the componentTagger plugin as it's causing issues
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  server: {
    port: 8080,
    host: "::"
  },
  build: {
    // Adding explicit build configuration
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode === 'development',
    minify: mode !== 'development'
  }
}))
