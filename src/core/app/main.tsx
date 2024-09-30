import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { importAllRoutes } from "../routing/bootstrapping.ts";
import App from "./app.tsx";

importAllRoutes().then(({ routes, authRoutes }) => {
	const root = document.getElementById("root");
	if (root)
		createRoot(root).render(
			<StrictMode>
				<App mainRouter={routes} authRouter={authRoutes} />
			</StrictMode>,
		);
});
