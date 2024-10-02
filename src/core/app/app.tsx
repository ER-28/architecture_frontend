import { useEffect, useState } from "react";
import "./index.css";
import { useInjection } from "inversify-react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Loading from "../../Loading.tsx";
import THEME_TYPES from "../../apps/theme/types.ts";
import type { DarkModeViewModel } from "../../apps/theme/viewmodels/DarkModeViewModel.ts";
import TOAST_TYPES from "../../apps/toast/types.ts";
import type { ToastViewModel } from "../../apps/toast/viewmodels/ToastViewModel.ts";
import ToastManager from "../../apps/toast/views/ToastManager.tsx";
import type { Router } from "../routing/bootstrapping.ts";

interface AppProps {
	mainRouter: Router;
	authRouter: Router;
}

function App({ mainRouter, authRouter }: AppProps) {
	const [router, setRouter] = useState<ReturnType<
		typeof createBrowserRouter
	> | null>(null);
	const toastViewModel = useInjection<ToastViewModel>(
		TOAST_TYPES.ToastViewModel,
	);
	const darkModeViewModel = useInjection<DarkModeViewModel>(
		THEME_TYPES.DarkModeViewModel,
	);

	useEffect(() => {
		const hasToken = document.cookie
			.split(";")
			.some((item) => item.trim().startsWith("token="));

		const selectedRouter = hasToken ? mainRouter : authRouter;

		const routes = [
			...selectedRouter.routes,
			{
				path: "/",
				element: <Navigate to={selectedRouter.defaultUrl || "/404"} replace />,
			},
		];

		const newRouter = createBrowserRouter(routes);
		setRouter(newRouter);
	}, [mainRouter, authRouter]);

	if (!router) {
		return <Loading />;
	}

	return (
		<div className={darkModeViewModel.isDarkMode ? "dark" : "light"}>
			<ToastManager viewModel={toastViewModel} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
