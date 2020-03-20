import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const CommentCard = ({ body, createdBy, createdAt }) =>  (
  <Card className="my-3 flex-row">
    <CardBody>
      <CardTitle>{body}</CardTitle>
      <CardSubtitle>{createdAt} by {createdBy}</CardSubtitle>
    </CardBody>
  </Card>
);

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default CommentCard;
