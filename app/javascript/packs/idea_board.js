import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import AuthManager from "../shared/AuthManager";
import IdeaBoard from "../idea_board/components/App";

const TOKEN_NAME = "ideas-token";

const client = new ApolloClient({
  uri: "/api/graphql",
  request: operation => {
    const token = localStorage.getItem(TOKEN_NAME);
    token &&
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  }
});

ReactDOM.render(
  <BrowserRouter>
    <AuthManager tokenName={TOKEN_NAME} onLogout={client.resetStore}>
      <ApolloProvider client={client}>
        <IdeaBoard />
      </ApolloProvider>
    </AuthManager>
  </BrowserRouter>,
  document.getElementById("idea-board-app")
);
