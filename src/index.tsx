import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "config/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </React.StrictMode>
);
