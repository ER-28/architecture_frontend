import { RouteObject } from "react-router-dom";

export async function importAllRoutes(): Promise<Array<RouteObject>> {
  const allRoutes: Array<RouteObject> = [];

  const modules = import.meta.glob("../../apps/**/router.tsx");

  for (const path in modules) {
    const module = (await modules[path]()) as { routes: RouteObject[] };
    if (module.routes) {
      allRoutes.push(...module.routes);
    }
  }

  return allRoutes;
}
