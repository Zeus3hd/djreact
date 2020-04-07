import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./products/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Dashboard />
      </>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
