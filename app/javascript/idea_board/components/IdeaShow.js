import React from "react";
import { Link, useParams } from "react-router-dom";

const IdeaShow = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
      <Link to="/ideas">Back to Index</Link>
    </div>
  );
};

export default IdeaShow;
