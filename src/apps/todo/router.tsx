import TodoRoute from "./routes/todo.tsx";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/todo",
    element: <TodoRoute />,
  },
];
