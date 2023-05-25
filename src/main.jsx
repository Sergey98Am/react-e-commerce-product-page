import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import '@splidejs/react-splide/css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
