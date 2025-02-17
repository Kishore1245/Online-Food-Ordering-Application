import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../State/Authentication/Action";

const validationSchemaReset = Yup.object().shape({
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(resetPassword({ password: values.password, token }))
      .then(() => {
        navigate("/login");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" textAlign="center">Reset Password</Typography>
      <Formik
        initialValues={{ password: "", confirmedPassword: "" }}
        validationSchema={validationSchemaReset}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="password"
              type="password"
              label="New Password"
              fullWidth
              margin="normal"
              helperText={<ErrorMessage name="password" />}
            />
            <Field
              as={TextField}
              name="confirmedPassword"
              type="password"
              label="Confirm Password"
              fullWidth
              margin="normal"
              helperText={<ErrorMessage name="confirmedPassword" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ResetPassword;
