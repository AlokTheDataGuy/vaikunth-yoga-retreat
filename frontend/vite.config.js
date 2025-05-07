import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  // Define environment variables
  define: {
    // This is needed for the imageUtils.js file
    'process.env': {
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
      VITE_NODE_ENV: JSON.stringify(process.env.VITE_NODE_ENV)
    }
  },
  server: {
    // Proxy API requests to the backend server
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
