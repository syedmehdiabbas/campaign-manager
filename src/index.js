import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import LocaleProvider from "./translations/LocaleProvider";

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
