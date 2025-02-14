import React, { useEffect } from "react";
import OrdersTable from "./OrderTable";
import {
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder } from "../../State/Admin/Order/restaurants.order.action";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "all" },
];

const RestaurantsOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const jwt = localStorage.getItem("jwt");

  // Ensure proper state selection
  const restaurant = useSelector((store) => store.restaurant) || {};
  const auth = useSelector((store) => store.auth) || {};


  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const filterValue = searchParams.get("order_status") || "all"; // Fallback to "all"

  useEffect(() => {
    if (restaurant?.usersRestaurant?.id) {
      dispatch(
        fetchRestaurantsOrder({
          restaurantId: restaurant.usersRestaurant.id,
          orderStatus: filterValue !== "all" ? filterValue : null,
          jwt: auth.jwt || jwt,
        })
      );
    }
  }, [auth.jwt, filterValue, restaurant?.usersRestaurant?.id, dispatch]);

  const handleFilter = (e) => {
    const value = e.target.value;
    const searchParams = new URLSearchParams(location.search);

    if (value === "all") {
      searchParams.delete("order_status");
    } else {
      searchParams.set("order_status", value);
    }

    navigate({ search: `?${searchParams.toString()}` });
  };

  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          Order Status
        </Typography>
        <FormControl className="py-10" component="fieldset">
          <RadioGroup
            row
            name="category"
            value={filterValue}
            onChange={handleFilter}
          >
            {orderStatus.map((item, index) => (
              <FormControlLabel
                key={item.value} // Using `item.value` as a unique key instead of index
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>

      <OrdersTable name="All Orders" />
    </div>
  );
};

export default RestaurantsOrder;
