import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRestaurantStatus,
} from "../../State/Customers/Restaurant/restaurant.action";

const Details = () => {
  const dispatch = useDispatch();

  // Access `auth` and `restaurant` from the Redux store with defaults
  const { auth, restaurant } = useSelector((state) => ({
    auth: state.auth || {},  // Default to empty object if `auth` is undefined
    restaurant: state.restaurant || {},  // Default to empty object if `restaurant` is undefined
  }));

  const jwt = localStorage.getItem("jwt");

  const handleRestaurantStatus = () => {
    dispatch(
      updateRestaurantStatus({
        restaurantId: restaurant?.usersRestaurant?.id,
        jwt: auth?.jwt || jwt,  // Fall back to the JWT from localStorage if necessary
      })
    );
  };

  return (
    <div className="lg:px-20 px-5">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {restaurant?.usersRestaurant?.name || "Restaurant Name"}
        </h1>
        <div>
          <Button
            onClick={handleRestaurantStatus}
            size="large"
            className="py-[1rem] px-[2rem]"
            variant="contained"
            color={restaurant?.usersRestaurant?.open ? "error" : "primary"}
          >
            {restaurant?.usersRestaurant?.open ? "Close" : "Open"}
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> Restaurant</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.owner?.fullName || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Cuisine Type</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.cuisineType || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Opening Hours</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.openingHours || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Status</p>
                  <div className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.open ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        Open
                      </span>
                    ) : (
                      <span className="text-black px-5 py-2 rounded-full bg-red-400">
                        Closed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} lg={5}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> Address</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.address?.country || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.address?.city || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.address?.postalCode || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.address?.streetAddress || "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} lg={7}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> Contact</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {restaurant?.usersRestaurant?.contactInformation?.email || "N/A"}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    +91
                    {restaurant?.usersRestaurant?.contactInformation?.mobile || "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
