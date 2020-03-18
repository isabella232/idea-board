import React from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ThumbsUp } from "react-feather";

import ideas from "../sample_ideas";

const IdeaDetails = () => {
  const { id } = useParams();

  // TODO: replace this with Apollo query based on id
  const { title, body, voteCount, voted } = ideas.find(idea => idea.id === parseInt(id, 10));

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>
        <ThumbsUp className="mr-2"/>
        {voteCount} team members have voted for this idea!
      </p>
      { voted &&
        <p>
          <Check className="mr-2"/>
          You voted for this idea!
        </p>
      }
      <Link to="/ideas">Back to Idea List</Link>
    </div>
  );
};

export default IdeaDetails;
