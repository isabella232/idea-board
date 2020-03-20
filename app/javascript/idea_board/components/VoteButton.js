import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Check, ThumbsUp } from "react-feather";
import ButtonStyles from "../styles/IconButton.module.scss";

import { useAuth } from "../../shared/AuthManager";

const VoteButton = ({ onClick, voted }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Button
      className={ButtonStyles.IconButton}
      color={voted ? "secondary" : "success"}
      onClick={onClick}
      disabled={!isAuthenticated}
    >
      {voted ? <Check /> : <ThumbsUp />}
    </Button>
  );
};

VoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  voted: PropTypes.bool.isRequired
};

export default VoteButton;
