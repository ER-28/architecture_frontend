import './index.css'

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

function App({ routes }: { routes: RouteObject[] }) {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
