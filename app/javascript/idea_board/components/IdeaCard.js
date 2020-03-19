import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import VoteButton from "./VoteButton";

const IdeaCard = ({ id, title, body, votes, voted }) => {
  return (
    <Card className="my-3 flex-row">
      <VoteButton
        voteCount={votes}
        onClick={() => {
          console.log("Clicked the button!");
        }}
        voted={voted}
      />
      <CardBody>
        <CardTitle>
          <Link to={`/ideas/${id}`}>{title}</Link>
        </CardTitle>
        <CardText>{body}</CardText>
      </CardBody>
    </Card>
  );
};

IdeaCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  body: PropTypes.string,
  voted: PropTypes.bool
};

IdeaCard.defaultProps = {
  voted: false
};

export default IdeaCard;
