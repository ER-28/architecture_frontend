import { useEffect, useState } from "react";
import "./index.css";
import { useInjection } from "inversify-react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Types from "../../apps/toast/types.ts";
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
	const toastViewModel = useInjection<ToastViewModel>(Types.ToastViewModel);

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
		return null;
	}

	return (
		<div>
			<ToastManager viewModel={toastViewModel} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
