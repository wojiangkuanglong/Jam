import * as React from "react";
import { render } from "react-dom";
import DefaultPage from "./containers/default/default-page";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import store from "./store";

import "./styles/app.global.scss";

const customHistory = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route path="/" component={DefaultPage} />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
