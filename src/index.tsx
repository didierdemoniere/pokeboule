import * as React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./state-management";

import App from "./ui/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
