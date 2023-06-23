import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ProductContextProvider } from "./Components/Context/ProductContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ProductContextProvider>
);
