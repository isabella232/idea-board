import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardText } from "reactstrap";

const CommentCard = ({ body, createdBy, createdAt }) =>  (
  <Card className="my-3 flex-row">
    <CardBody>
      <CardText>{body}</CardText>
      <CardText>{createdAt} by {createdBy}</CardText>
    </CardBody>
  </Card>
);

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default CommentCard;
