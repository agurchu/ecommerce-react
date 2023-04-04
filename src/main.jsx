import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShopContextProvider from "./context/shop-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>
);
