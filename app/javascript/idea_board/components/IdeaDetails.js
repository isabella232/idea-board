import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { Check, ThumbsUp } from "react-feather";
import ReactMarkdown from "react-markdown";

import { Idea } from "./Ideas.graphql";
import CommentCard from "./CommentCard";

const IdeaDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(Idea, { variables: { id } });

  if (loading) {
    return "Loading...";
  }

  const { title, body, votes, voted, comments } = data.idea;

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
      <h5>Comments ({comments.length})</h5>
      { !!comments.length && comments.map( comment => (
        <CommentCard key={comment.id} {...comment} />
      ))}
      <Link to="/ideas">Back to Idea List</Link>
    </div>
  );
};

export default IdeaDetails;
