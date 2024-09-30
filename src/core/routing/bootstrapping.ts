import type { RouteObject } from "react-router-dom";

export interface Router {
	routes: RouteObject[];
	defaultUrl?: string;
}

export interface RouteModule {
	routes: Router;
	authRoutes: Router;
}

export async function importAllRoutes(): Promise<RouteModule> {
	const mainRouting: RouteObject[] = [];
	const authRouting: RouteObject[] = [];
	let defaultUrl: string | undefined;
	let authDefaultUrl: string | undefined;

	const modules = import.meta.glob("../../apps/**/router.tsx");

	for (const path in modules) {
		const module = (
			(await modules[path]()) as {
				default: { routes: RouteObject[]; defaultUrl?: string };
			}
		).default;
		if (module.routes) {
			const module_name = path.split("/")[3] ?? "";
			const prefixedRoutes = module.routes.map((route) => ({
				...route,
				path: `/${module_name}${route.path}`,
			}));

			for (const route of prefixedRoutes) {
				if (route.path?.startsWith("/auth")) {
					authRouting.push(route);
					if (!authDefaultUrl && module.defaultUrl) {
						authDefaultUrl = `/${module_name}${module.defaultUrl}`;
					}
				} else {
					mainRouting.push(route);
					if (!defaultUrl && module.defaultUrl) {
						defaultUrl = `/${module_name}${module.defaultUrl}`;
					}
				}
			}
		}
	}

	const mainRouter: Router = {
		routes: mainRouting,
		defaultUrl: defaultUrl,
	};

	const authRouter: Router = {
		routes: authRouting,
		defaultUrl: authDefaultUrl,
	};

	return {
		routes: mainRouter,
		authRoutes: authRouter,
	};
}
