import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import VoteButton from "./VoteButton";

const IdeaCard = ({ id, title, body, votes, voted, author }) => {
  return (
    <Card className="my-3 flex-row">
      <VoteButton
        voteCount={votes}
        onClick={() => console.log("I Voted!")}
        voted={voted}
      />
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
