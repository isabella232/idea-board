import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import * as Yup from "yup";

import FormRow from "../../shared/FormRow";

const newIdeaSchema = Yup.object().shape({
  title: Yup.string().required("Please enter an Idea title"),
  body: Yup.string()
});

const NewIdeaModal = ({ isOpen, toggle, onSubmit }) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={newIdeaSchema}
      onSubmit={onSubmit}
    >
      <Form noValidate>
        <ModalHeader>Add an Idea</ModalHeader>
        <ModalBody>
          <FormRow label="Title" name="title" />
          <FormRow label="Description" name="body" type="textarea" rows={4} />
        </ModalBody>
        <ModalFooter>
          <Button block color="primary" type="submit">
            Add Idea
          </Button>
        </ModalFooter>
      </Form>
    </Formik>
  </Modal>
);

NewIdeaModal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  onSubmit: PropTypes.func
};

NewIdeaModal.defaultProps = {
  isOpen: false,
  onSubmit: () => {}
};

export default NewIdeaModal;
