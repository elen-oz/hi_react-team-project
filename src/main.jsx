import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BookProvider from "./hooks/bookContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartProvider, { CartContext } from "./hooks/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </CartProvider>
  </React.StrictMode>
);
