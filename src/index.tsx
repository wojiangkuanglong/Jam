import * as React from "react";
import { render } from "react-dom";
import DefaultPage from "./containers/default/default-page";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import "./styles/app.global.scss";

const customHistory = createBrowserHistory();

render(
  <Router history={customHistory}>
    <Route path="/" component={DefaultPage} />
  </Router>,
  document.getElementById("root"),
);
