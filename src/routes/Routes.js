import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import App from "../components/App/App";
import Games from "../components/Games/Games";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/games/" component={Games} />
      </div>
    </Router>
  );
}

export default AppRouter;
