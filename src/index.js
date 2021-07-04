import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "layouts/Admin/Admin.js";
import Default from "layouts/Default/Default.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Default} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);