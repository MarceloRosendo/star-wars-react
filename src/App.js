import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './screen/home'
import History from './screen/history'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/history" component={History}></Route>
        </Switch>
    </Router>
  );
}
