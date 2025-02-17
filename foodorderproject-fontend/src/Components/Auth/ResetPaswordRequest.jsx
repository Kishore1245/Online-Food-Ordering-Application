import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendResetPasswordEmail } from "../../State/Authentication/Action";

const validationSchemaForgot = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(sendResetPasswordEmail(values.email))
      .then(() => {
        navigate("/reset-password-message");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" textAlign="center">Forgot Password</Typography>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchemaForgot}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email Address"
              fullWidth
              margin="normal"
              helperText={<ErrorMessage name="email" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ForgotPassword;
