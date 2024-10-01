import type { Container } from "inversify";
import { Provider } from "inversify-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { bootstrapInversifyContainer } from "../DI/bootstrap.ts";
import { importAllRoutes } from "../routing/bootstrapping.ts";
import App from "./app.tsx";

async function initializeApp() {
	try {
		const container: Container = await bootstrapInversifyContainer();

		const { routes, authRoutes } = await importAllRoutes();

		const root = document.getElementById("root");
		if (root) {
			createRoot(root).render(
				<StrictMode>
					<Provider container={container}>
						<App mainRouter={routes} authRouter={authRoutes} />
					</Provider>
				</StrictMode>,
			);
		} else {
			console.error("Root element not found");
		}
	} catch (error) {
		console.error("Failed to initialize the application:", error);
	}
}

initializeApp().then(() => console.log("Application initialized successfully"));
