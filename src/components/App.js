import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Random from "./Random";
import Clues from "./Clues";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">All Clues</Link>
        <Link to="/random">Random Clue</Link>
      </nav>
      <Switch>
        <Route path="/random" component={Random} />
        <Route path="/" component={Clues} />
      </Switch>
    </Router>
  );
};

export default App;
