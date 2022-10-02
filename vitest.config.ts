import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import { resolve } from "path";

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
  },
}))