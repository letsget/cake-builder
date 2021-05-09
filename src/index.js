import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./App/store";
import App from "./App/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
