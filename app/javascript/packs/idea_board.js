import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import AuthManager from "../shared/AuthManager";
import IdeaBoard from "../idea_board/components/App";

const client = new ApolloClient({
  uri: "/api/graphql",
  request: operation => {
    const token = localStorage.getItem('ideas-token');
    token && operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
});

ReactDOM.render(
  <BrowserRouter>
    <AuthManager>
      <ApolloProvider client={client}>
        <IdeaBoard />
      </ApolloProvider>
    </AuthManager>
  </BrowserRouter>,
  document.getElementById("idea-board-app")
);
