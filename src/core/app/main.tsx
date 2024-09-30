import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { importAllRoutes } from "../routing/bootstrapping.ts";
import App from "./app.tsx";

importAllRoutes().then(({routes, authRoutes}) => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App routes={routes} authRoutes={authRoutes} />
    </StrictMode>,
  );
});
