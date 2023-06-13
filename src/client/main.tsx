import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ScrollToTop } from "./components/scroll-to-top/scroll-to-top";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
