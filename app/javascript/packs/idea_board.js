import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import IdeaBoard from "../idea_board/components/App";

ReactDOM.render(
  <BrowserRouter>
    <IdeaBoard />
  </BrowserRouter>,
  document.getElementById("idea-board-app")
);
