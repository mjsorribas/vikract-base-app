import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build:{
    chunkSizeWarningLimit: 900,
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
});
