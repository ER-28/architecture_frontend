import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <p>test</p>,
	},
];

export default {
	routes,
	defaultUrl: "/",
};
