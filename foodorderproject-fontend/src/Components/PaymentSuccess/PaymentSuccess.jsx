import React, { useEffect, useRef, useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { green } from "@mui/material/colors";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { clearCartAction } from "../../State/Customers/Cart/cart.action";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearCartAction());

    setLoading(true); // Show loading spinner

    const timer = setTimeout(() => {
      if (isMounted.current) {
        navigate("/");
      }
    }, 3000);

    return () => {
      isMounted.current = false; // Prevents navigation if component unmounts
      clearTimeout(timer);
    };
  }, [dispatch, navigate]);

  return (
    <div className="min-h-screen px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <TaskAltIcon sx={{ fontSize: "5rem", color: green[600] }} />
          <h1 className="py-5 text-2xl font-semibold">Order Success!</h1>
          <p className="py-3 text-center text-gray-400">
            Thank you for choosing our restaurant! We appreciate your order.
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            Have A Great Day!
          </p>
          <p className="py-2 text-center text-sm text-gray-400">
            Redirecting to home page...
          </p>
          {loading && <CircularProgress sx={{ color: green[600], margin: "1rem 0" }} />}
          <Button
            variant="contained"
            className="my-5"
            sx={{ margin: "1rem 0rem" }}
            onClick={() => navigate("/")}
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
