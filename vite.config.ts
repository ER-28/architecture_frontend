import { mdx } from "@cyco130/vite-plugin-mdx";
import react from "@vitejs/plugin-react";
import TurboConsole from "unplugin-turbo-console/vite";
import { defineConfig } from "vite";
import viteBundleObfuscator from "vite-plugin-bundle-obfuscator";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";
import { robots } from "vite-plugin-robots";

const obfuscatorConfig = {
	enable: true,
	log: true,
	autoExcludeNodeModules: true,
	excludes: [],
	options: {},
};

export default defineConfig(() => ({
	plugins: [
		mdx(),
		react(),
		VitePWA(),
		ViteImageOptimizer(),
		robots(),
		viteBundleObfuscator(obfuscatorConfig),
		TurboConsole(),
	],
}));
