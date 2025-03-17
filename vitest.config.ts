import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import { resolve } from "path";

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ['./src/lib/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/lib/test/setup.ts',
      ],
    },
    reporters: ['verbose'],
    deps: {
      inline: [/@chakra-ui\/react/],
    },
    alias: {
      'lib': resolve(__dirname, './src/lib'),
    },
  },
}));