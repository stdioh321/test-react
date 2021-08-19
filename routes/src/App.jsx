import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={("/posts/:id", "/posts")}>
          <Posts />
        </Route>
        <Route>
          <h1 style={{ color: "red" }}>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
