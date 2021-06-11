import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./screens/Home/Home";
import Details from "./screens/Details/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import moviesData from "./common/moviesData";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/details/:id"
          component={({ match }) => (
            <Details match={match} movies={moviesData} />
          )}
        />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);

