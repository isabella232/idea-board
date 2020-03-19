import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { Check, ThumbsUp } from "react-feather";
import ReactMarkdown from "react-markdown";

import ideas from "../sample_ideas";

const IdeaDetails = () => {
  const { id } = useParams();
  const idea = ideas[id - 1];
  const { title, body, votes, voted } = idea;

  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
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
