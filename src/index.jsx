import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.config";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
