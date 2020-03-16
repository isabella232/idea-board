import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import IdeaIndex from "./IdeaIndex";
import IdeaShow from "./IdeaShow";

export default () => (
  <Switch>
    <Route path="/ideas/:id">
      <IdeaShow />
    </Route>
    <Route path="/ideas">
      <IdeaIndex />
    </Route>
    <Redirect from="/" to="/ideas" />
  </Switch>
);
