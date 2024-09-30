import './index.css'

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

interface AppProps {
  routes: RouteObject[];
  authRoutes: RouteObject[];
}

function App({ routes, authRoutes }: AppProps) {
  return <RouterProvider router={createBrowserRouter(authRoutes)} />;

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
