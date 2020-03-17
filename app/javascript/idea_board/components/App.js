import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./Header";
import IdeaIndex from "./IdeaIndex";
import IdeaShow from "./IdeaShow";

export default () => (
  <React.Fragment>
    <Header />

    <Container>
      <Switch>
        <Route path="/ideas/:id">
          <IdeaShow />
        </Route>
        <Route path="/ideas">
          <IdeaIndex />
        </Route>
        <Redirect from="/" to="/ideas" />
      </Switch>
    </Container>
  </React.Fragment>
);
