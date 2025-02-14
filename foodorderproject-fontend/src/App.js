import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";

import darkTheme from "./theme/DarkTheme";
import Routers from "./Routers/Routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./State/Authentication/Action";
import { findCart } from "./State/Customers/Cart/cart.action";
import {
  getAllRestaurantsAction,
  getRestaurantByUserId,
} from "./State/Customers/Restaurant/restaurant.action";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // Fix: safer useSelector usage
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(findCart(jwt));
      dispatch(getAllRestaurantsAction(jwt));
    }
  }, [jwt, dispatch]); // Fix: Using `jwt` instead of `auth.jwt`, adding `dispatch` to dependency array

  useEffect(() => {
    if (auth.user?.role === "ROLE_RESTAURANT_OWNER" && jwt) {
      dispatch(getRestaurantByUserId(jwt));
    }
  }, [auth.user, jwt, dispatch]); // Fix: Added `jwt` and `dispatch` to dependencies

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
