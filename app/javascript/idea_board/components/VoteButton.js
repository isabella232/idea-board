import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Check, ThumbsUp } from "react-feather"

const VoteButton = ({ voteCount, onClick, voted }) => (
  <Button
    color={voted ? "secondary" : "primary"}
    onClick={onClick}
    disabled={voted}
  >
    <span className="mr-2">
      {voted
        ? <Check/>
        : <ThumbsUp/>
      }
    </span>
    {voteCount}
  </Button>
);

VoteButton.propTypes = {
  voteCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  voted: PropTypes.bool.isRequired
};

export default VoteButton;
