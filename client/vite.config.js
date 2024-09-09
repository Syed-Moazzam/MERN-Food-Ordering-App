import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/client/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',     // Base URL of Express server
        secure: false,
      },
    },
  },
});