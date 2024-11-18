import { mdx } from "@cyco130/vite-plugin-mdx";
import react from "@vitejs/plugin-react";
import TurboConsole from "unplugin-turbo-console/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(async () => {
	return {
		plugins: [
			mdx(),
			react(),
			VitePWA(),
			TurboConsole(),
		],
		server: {
			host: true,
		},
		assetsInclude: ["**/*.svg"],
	};
});
