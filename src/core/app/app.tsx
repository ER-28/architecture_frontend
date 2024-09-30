import { useEffect, useState } from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Router } from "../routing/bootstrapping.ts";

interface AppProps {
  mainRouter: Router;
  authRouter: Router;
}

function App({ mainRouter, authRouter }: AppProps) {
  const [router, setRouter] = useState<ReturnType<typeof createBrowserRouter> | null>(null);

  useEffect(() => {
    const hasToken = document.cookie.split(';').some((item) => item.trim().startsWith('token='));

    const selectedRouter = hasToken ? mainRouter : authRouter;

    console.log(selectedRouter)
    console.log(authRouter)

    const routes = [
      ...selectedRouter.routes,
      {
        path: '/',
        element: <Navigate to={selectedRouter.defaultUrl || '/404'} replace />,
      },
    ];

    const newRouter = createBrowserRouter(routes);
    setRouter(newRouter);
  }, [mainRouter, authRouter]);

  if (!router) {
    return null;
  }

  return <RouterProvider router={router} />;
}

export default App;