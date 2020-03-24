import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { ArrowRight } from "react-feather";

import { RemoveVote, AddVote } from "./Ideas.graphql";
import VoteButton from "./VoteButton";

import IdeaStyles from "../styles/Idea.module.scss";
import ButtonStyles from "../styles/IconButton.module.scss";

const IdeaCard = ({ id, title, body, votes, voted, author }) => {
  const [addVote] = useMutation(AddVote, { variables: { id } });
  const [removeVote] = useMutation(RemoveVote, { variables: { id } });

  return (
    <Card className="mb-4 flex-row" tag="section">
      <CardBody className="d-flex flex-column flex-grow-0 pr-0 text-center justify-content-between align-items-center">
        <p className="display-4" style={{ minWidth: "1.5em" }}>
          {votes}
        </p>

        <VoteButton onClick={voted ? removeVote : addVote} voted={voted} />
      </CardBody>

      <Link
        to={`/ideas/${id}`}
        className={classNames(IdeaStyles.clickable, "flex-fill")}
      >
        <CardBody className="d-flex align-items-center h-100">
          <div className="flex-fill">
            <CardTitle>
              <h1 className="h3">{title}</h1>
            </CardTitle>
            <CardText>{body}</CardText>
            <CardText className="text-muted">Suggested By {author}</CardText>
          </div>

          <Button className={ButtonStyles.IconButton}>
            <ArrowRight />
          </Button>
        </CardBody>
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
