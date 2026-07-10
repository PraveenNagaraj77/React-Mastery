import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppProviders from "./providers/AppProviders.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/shoppingcart/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProviders>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProviders>
  </BrowserRouter>,
);
