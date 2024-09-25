import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  optimizeDeps: {
    include: ["reflect-metadata"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});