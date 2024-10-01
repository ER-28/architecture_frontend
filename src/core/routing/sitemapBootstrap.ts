import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { RouteObject } from "react-router-dom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllFiles(dirPath: string, accumulator: string[] = []): string[] {
	const files = fs.readdirSync(dirPath);

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			getAllFiles(filePath, accumulator);
		} else {
			accumulator.push(filePath);
		}
	}

	return accumulator;
}

function parseRouterFile(filePath: string): {
	routes: RouteObject[];
	defaultUrl?: string;
} {
	const content = fs.readFileSync(filePath, "utf-8");
	const routes: RouteObject[] = [];
	let defaultUrl: string | undefined;

	const routeMatches = content.match(/{\s*path:\s*["'](.+?)["']/g);
	if (routeMatches) {
		for (const match of routeMatches) {
			const pathMatch = match.match(/["'](.+?)["']/);
			if (pathMatch) {
				routes.push({ path: pathMatch[1] });
			}
		}
	}

	const defaultUrlMatch = content.match(/defaultUrl:\s*["'](.+?)["']/);
	if (defaultUrlMatch) {
		defaultUrl = defaultUrlMatch[1];
	}

	return { routes, defaultUrl };
}

export async function SitemapBootstrap(): Promise<RouteObject[]> {
	const allRoutes: RouteObject[] = [];

	const appsDir = path.resolve(__dirname, "../../apps");
	const routerFiles = getAllFiles(appsDir).filter((file) =>
		file.endsWith("router.tsx"),
	);

	for (const file of routerFiles) {
		try {
			const { routes, defaultUrl } = parseRouterFile(file);
			const module_name = path.relative(appsDir, file).split(path.sep)[0];
			const prefixedRoutes = routes.map((route: RouteObject) => ({
				...route,
				path: route.path ? `/${module_name}${route.path}` : undefined,
			}));

			allRoutes.push(...prefixedRoutes);

			if (defaultUrl) {
				allRoutes.push({
					path: `/${module_name}${defaultUrl}`,
				});
			}
		} catch (error) {
			console.error(`Error processing file ${file}:`, error);
		}
	}

	return allRoutes;
}
