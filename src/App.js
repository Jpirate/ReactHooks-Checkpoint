import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
