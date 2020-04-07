import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./products/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
