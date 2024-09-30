import { RouteObject } from "react-router-dom";

interface RouteModule {
  routes: RouteObject[];
  authRoutes: RouteObject[];
}

export async function importAllRoutes(): Promise<RouteModule> {
  const allRoutes: RouteObject[] = [];

  const modules = import.meta.glob("../../apps/**/router.tsx");

  for (const path in modules) {
    const module = (await modules[path]()) as { routes: RouteObject[] };
    if (module.routes) {
      const module_name = path.split("/")[3] ?? ""
      allRoutes.push(
        ...module.routes.map(
          (route) => {
            route.path = `/${module_name}${route.path}`;
            return route;
          }
        )
      );
    }
  }

  return {
    routes: allRoutes,
    authRoutes: allRoutes.filter((route) => route?.path?.startsWith("/auth")),
  };
}
