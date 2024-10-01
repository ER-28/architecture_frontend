import type { RouteObject } from "react-router-dom";
import Auth from "./routes/Auth.tsx";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Auth />,
	},
];

export default {
	routes,
	defaultUrl: "/",
};
