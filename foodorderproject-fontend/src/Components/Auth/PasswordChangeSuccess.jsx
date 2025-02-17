import { Alert, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PasswordChangeSuccess = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Simulate the success state after successful password reset
  useEffect(() => {
    // You can modify this logic depending on your actual success condition
    setSuccess(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-[50vw] mt-20">
        {success ? (
          <Alert severity="success">Password Successfully Changed!</Alert>
        ) : (
          <Alert severity="error">Password Change Failed. Please try again.</Alert>
        )}
        <div className="flex justify-center mt-5">
          <Button
            onClick={() => navigate("/account/login")}
            fullWidth
            variant="outlined"
            sx={{ padding: ".8rem 0rem" }}
          >
            Back To Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeSuccess;
