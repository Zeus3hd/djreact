import React from "react";
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
import { Provider } from "react-redux";
import store from "../store";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
