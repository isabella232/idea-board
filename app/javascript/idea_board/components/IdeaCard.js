import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const IdeaCard = ({ id, title, body, history }) => {
  return (
    <Card
      className="my-3"
      onClick={() => { history.push(`/ideas/${id}`); }}
      style={{ cursor: "pointer" }}
    >
      <CardBody>
        <CardTitle>{ title }</CardTitle>
        <CardText>{ body }</CardText>
      </CardBody>
    </Card>
  );
};

IdeaCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(IdeaCard);
