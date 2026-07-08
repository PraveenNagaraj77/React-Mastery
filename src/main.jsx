import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppProviders from "./providers/AppProviders.jsx";

createRoot(document.getElementById("root")).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
