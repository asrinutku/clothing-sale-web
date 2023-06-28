import "./index.scss";
import "./styles/main.scss";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextWrapper } from "./context/ContextWrapper";
import React from "react";
import { render } from "react-dom";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
