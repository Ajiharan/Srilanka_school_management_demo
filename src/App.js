import React from "react";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./nav/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
