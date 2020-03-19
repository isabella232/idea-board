import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import { VoteFor } from "./Ideas.graphql";
import VoteButton from "./VoteButton";

const IdeaCard = ({ id, title, body, votes, voted, author }) => {
  const [voteForIdea] = useMutation(VoteFor, { variables: { id } });

  return (
    <Card className="my-3 flex-row">
      <VoteButton voteCount={votes} onClick={voteForIdea} voted={voted} />
      <CardBody>
        <CardTitle>
          <Link to={`/ideas/${id}`}>{title}</Link>
        </CardTitle>
        <CardText>{body}</CardText>
        <CardText>Suggested By {author}</CardText>
      </CardBody>
    </Card>
  );
};

IdeaCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  body: PropTypes.string,
  author: PropTypes.string,
  voted: PropTypes.bool
};

IdeaCard.defaultProps = {
  author: "",
  voted: false
};

export default IdeaCard;
