import React from "react";
import ReactDOM from "react-dom/client";
import "./asset/css/reset.css";
import "./asset/css/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProviderWrapper } from "./utils/StroreContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StoreProviderWrapper>
      <App />
    </StoreProviderWrapper>
  </Router>
);
