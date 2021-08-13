import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Admin from "layouts/Admin/Admin";
import Default from "layouts/Default/Default";
import Login from "components/Authorization/Login";
import Register from "components/Authorization/Register";
import useToken from "components/Authorization/useToken";

const hist = createBrowserHistory();

const App = () => {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/"  >
            <Login setToken={setToken} />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Default} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
