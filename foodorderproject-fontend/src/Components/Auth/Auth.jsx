import { Alert, Box, Button, Modal, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./Register";
import LoginForm from "./Login";
import ResetPasswordForm from "./ResetPasswordForm";
import ResetPasswordRequest from "./ResetPaswordRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const Auth = ({ open, handleClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth); // ✅ Fixed Selector
  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    if (auth?.success || auth?.error) setOpenSnackBar(true);
  }, [auth?.success, auth?.error]); // ✅ Only depends on success & error

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <>
      <Modal
        open={
          ["/account/register", "/account/login", "/account/reset-password-request", "/account/reset-password"].includes(location.pathname)
        }
        onClose={handleClose}
      >
        <Box sx={style}>
          {location.pathname === "/account/register" ? (
            <RegistrationForm />
          ) : location.pathname === "/account/login" ? (
            <LoginForm />
          ) : location.pathname === "/account/reset-password" ? (
            <ResetPasswordForm />
          ) : (
            <ResetPasswordRequest />
          )}
          <div className="flex justify-center mt-5">
            {["/account/reset-password-request", "/account/reset-password"].includes(location.pathname) ? (
              <Button onClick={() => navigate("/account/login")}>
                Go Back To Login
              </Button>
            ) : (
              <Button onClick={() => navigate("/account/reset-password-request")}>
                Forgot Password
              </Button>
            )}
          </div>
        </Box>
      </Modal>

      <Snackbar
        sx={{ zIndex: 50 }}
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={auth?.error ? "error" : "success"} sx={{ width: "100%" }}>
          {auth?.success ?? auth?.error ?? ""}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Auth;
