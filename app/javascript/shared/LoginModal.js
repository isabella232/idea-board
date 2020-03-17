import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import * as Yup from "yup";

import FormRow from "./FormRow";

const loginSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Oops...type your email to sign in.")
});

const LoginModal = ({ isOpen, toggle, onSubmit }) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <Form noValidate>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <p className="text-muted">
            Please sign in to continue to your account.
          </p>

          <FormRow label="Name" name="name" />
          <FormRow label="Email" name="email" type="email" />
        </ModalBody>
        <ModalFooter>
          <Button block color="primary" type="submit">
            Login
          </Button>
        </ModalFooter>
      </Form>
    </Formik>
  </Modal>
);

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  onSubmit: PropTypes.func
};

LoginModal.defaultProps = {
  isOpen: false,
  onSubmit: () => {}
};

export default LoginModal;
