import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { MessageSquare } from "react-feather";

import { RemoveVote, AddVote } from "./Ideas.graphql";
import VoteButton from "./VoteButton";

const IdeaCard = ({ id, title, body, votes, voted, author }) => {
  const [addVote] = useMutation(AddVote, { variables: { id } });
  const [removeVote] = useMutation(RemoveVote, { variables: { id } });

  return (
    <Card className="my-3 flex-row">
      <VoteButton voteCount={votes} onClick={voted ? removeVote : addVote} voted={voted} />
      <CardBody>
        <CardTitle>
          <Link to={`/ideas/${id}`}>{title}</Link>
        </CardTitle>
        <CardText>{body}</CardText>
        <CardText>Suggested By {author}</CardText>
      </CardBody>
      <Link to={`/ideas/${id}`} className="pt-2 pr-2">
        <MessageSquare/>
      </Link>
    </Card>
  );
};

IdeaCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  votes: PropTypes.number,
  body: PropTypes.string,
  author: PropTypes.string,
  voted: PropTypes.bool
};

IdeaCard.defaultProps = {
  title: "",
  body: "",
  votes: 0,
  author: "",
  voted: false
};

export default IdeaCard;
