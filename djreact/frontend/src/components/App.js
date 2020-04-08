import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./layout/Header";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Dashboard from "./products/Dashboard";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
