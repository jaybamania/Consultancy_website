import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";
import { formErrorMessage } from "./FormErrorMessage";

const CustomTextInputFormik = ({ name, placeholder, type = "text" }) => (
  <Field name={name}>
    {({ field, form: { touched, errors } }) => (
      <>
        <Form.Control
          {...field}
          isValid={touched[field.name] && !errors[field.name]}
          isInvalid={touched[field.name] && errors[field.name]}
          placeholder={placeholder}
          type={type}
        />
        <ErrorMessage name={field.name} render={formErrorMessage} />
      </>
    )}
  </Field>
);

export default CustomTextInputFormik;
