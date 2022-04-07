import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

const container = document.getElementById("root");
if (!container) {
  throw Error("Cannot load the app.");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
