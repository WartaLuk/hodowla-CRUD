import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";


import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container); // Tworzy korzeń.

root.render(
  <Router>
    <App />
  </Router>
);
