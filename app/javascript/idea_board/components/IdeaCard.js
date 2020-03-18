import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import VoteButton from "./VoteButton";

const IdeaCard = ({ id, title, body, voteCount, voted }) => {
  return (
    <Card className="my-3 flex-row" >
      <VoteButton
        voteCount={voteCount}
        onClick={() => { console.log("Clicked the button!") }}
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  voted: PropTypes.bool.isRequired
};

export default IdeaCard;
