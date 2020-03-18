import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const VoteButton = ({ voteCount, onClick, voted }) => (
  <Button
    color={voted ? "secondary" : "primary"}
    onClick={onClick}
    disabled={voted}
  >
    <span className="mr-2">
      {voted
        ? (<ion-icon name="checkmark" />)
        : (<ion-icon name="thumbs-up" />)
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
