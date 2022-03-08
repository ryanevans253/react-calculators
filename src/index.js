import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mortgage from "./Mortgage";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Mortgage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
