import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateRestaurantForm from "../AdminComponent/AddRestaurants/CreateRestaurantForm";
import Admin from "../AdminComponent/Admin/Admin";

const AdminRouters = () => {
  const { auth, restaurant } = useSelector((store) => store);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            
            !restaurant.usersRestaurant ? (
              <CreateRestaurantForm />
            ) : (
              <Admin />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRouters;
