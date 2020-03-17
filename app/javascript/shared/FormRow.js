import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useField } from "formik";
import { Input, FormGroup, FormFeedback, Label } from "reactstrap";

const FormRow = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  const isInvalid = meta.touched && meta.error;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        {...field}
        {...props}
        className={classNames({
          "is-invalid": isInvalid
        })}
      />
      {isInvalid && <FormFeedback>{meta.error}</FormFeedback>}
    </FormGroup>
  );
};

FormRow.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

export default FormRow;
