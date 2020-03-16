import React from "react";
import { Link } from "react-router-dom";

const IdeaIndex = () => {
  return (
    <div>
      <h1>Ideas</h1>
      <Link to="/ideas/2">Idea 2</Link>
    </div>
  );
};

export default IdeaIndex;
