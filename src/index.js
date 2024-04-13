import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import App from "./App";
import Store from "./store";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./index.css";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
