import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { importAllRoutes } from "./core/routing/bootstrapping.ts";

importAllRoutes().then((routes) => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App routes={routes} />
    </StrictMode>,
  );
});
