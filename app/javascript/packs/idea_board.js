import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AuthManager from "../shared/AuthManager";
import IdeaBoard from "../idea_board/components/App";

ReactDOM.render(
  <BrowserRouter>
    <AuthManager>
      <IdeaBoard />
    </AuthManager>
  </BrowserRouter>,
  document.getElementById("idea-board-app")
);
