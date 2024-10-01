import { mdx } from "@cyco130/vite-plugin-mdx";
import react from "@vitejs/plugin-react";
import TurboConsole from "unplugin-turbo-console/vite";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import viteBundleObfuscator from "vite-plugin-bundle-obfuscator";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";
import { robots } from "vite-plugin-robots";
import ViteSitemap from "vite-plugin-sitemap";
import { SitemapBootstrap } from "./src/core/routing/sitemapBootstrap.ts";

const obfuscatorConfig = {
	enable: true,
	log: true,
	autoExcludeNodeModules: true,
	excludes: [],
	options: {},
};

export default defineConfig(async () => {
	const sitemap = await SitemapBootstrap();

	return {
		plugins: [
			mdx(),
			react(),
			VitePWA(),
			ViteImageOptimizer(),
			robots(),
			viteBundleObfuscator(obfuscatorConfig),
			TurboConsole(),
			biomePlugin({
				mode: "check",
				files: "./src",
			}),
			ViteSitemap({
				hostname: "https://votre-domaine.com",
				dynamicRoutes: sitemap.map((route) => route.path) as string[],
				changefreq: "daily",
				priority: 0.8,
			}),
		],
		server: {
			host: true,
		},
		assetsInclude: ["**/*.svg"],
	};
});
