import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import { Check, ThumbsUp } from "react-feather";
import ReactMarkdown from "react-markdown";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button } from "reactstrap";

import FormRow from "../../shared/FormRow";
import { AddComment, Idea } from "./Ideas.graphql";
import CommentCard from "./CommentCard";

const IdeaDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(Idea, { variables: { id } });
  const [addComment] = useMutation(AddComment);

  if (loading) {
    return "Loading...";
  }

  const newCommentSchema = Yup.object().shape({
    text: Yup.string().required("Please enter comment text")
  });

  const { title, body, votes, voted, comments } = data.idea;

  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown>{body}</ReactMarkdown>
      <p>
        <ThumbsUp className="mr-2" />
        {`${votes} team members have voted for this idea!`}
      </p>
      {voted && (
        <p>
          <Check className="mr-2" />
          You voted for this idea!
        </p>
      )}
      <hr/>
      <h5>Comments ({comments.length})</h5>
      { !!comments.length && comments.map( comment => (
        <CommentCard key={comment.id} {...comment} />
      ))}

      <Formik
        initialValues={{ text: "" }}
        validationSchema={newCommentSchema}
        onSubmit={values => addComment({ variables: { id, text: values.text}})}
      >
        <Form noValidate>
          <FormRow name="text" type="textarea" rows={2} />
          <Button block color="primary" type="submit">
            Add Comment
          </Button>
        </Form>
      </Formik>

      <Link to="/ideas">Back to Idea List</Link>
    </div>
  );
};

export default IdeaDetails;
