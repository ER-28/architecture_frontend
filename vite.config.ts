import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {VitePWA} from "vite-plugin-pwa";
import { mdx } from "@cyco130/vite-plugin-mdx";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import {robots} from "vite-plugin-robots";
import viteBundleObfuscator from "vite-plugin-bundle-obfuscator";
import TurboConsole from 'unplugin-turbo-console/vite'

const obfuscatorConfig = {
  enable: true,
  log: true,
  autoExcludeNodeModules: true,
  excludes: [],
  options: {}
};

export default defineConfig(() => ({
  plugins: [
    mdx(),
    react(),
    VitePWA(),
    ViteImageOptimizer(),
    robots(),
    viteBundleObfuscator(obfuscatorConfig),
    TurboConsole()
  ],
}));
