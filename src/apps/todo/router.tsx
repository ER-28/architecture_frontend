import { RouteObject } from "react-router-dom";
import TodoRoute from "./routes/todo.tsx";

const routes: RouteObject[] = [
  {
    path: "/todo",
    element: <TodoRoute />,
  },
];

export default {
  routes,
  defaultUrl: "/todo",
};