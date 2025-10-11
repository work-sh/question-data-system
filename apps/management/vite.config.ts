import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: './routes',
      generatedRouteTree: './routes/routeTree.gen.ts',
      routeFileIgnorePrefix: '-',
      quoteStyle: 'single',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@workspace/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
