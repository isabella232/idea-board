import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { Check, ThumbsUp } from "react-feather";

import { Idea } from "./Ideas.graphql";

const IdeaDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(Idea, { variables: { id } });

  if (loading) {
    return "Loading...";
  }

  const { title, body, votes, voted } = data.idea;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>
        <ThumbsUp className="mr-2" />
        {`${votes} team members have voted for this idea!`}
      </p>
      {voted && (
        <p>
          <Check className="mr-2" />
          You voted for this idea!
        </p>
      )}
      <Link to="/ideas">Back to Idea List</Link>
    </div>
  );
};

export default IdeaDetails;
