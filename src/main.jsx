import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";
import "@splidejs/react-splide/css";
import CartState from "./Context/Cart/CartState";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  // </React.StrictMode>
);
