import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../Category/Category";
import Ingredients from "../Ingredients/Ingredients";
import { useDispatch, useSelector } from "react-redux";
import RestaurantsOrder from "../Orders/RestaurantsOrder";
import AddMenuForm from "../Food/AddMenuForm";
import RestaurantsMenu from "../Food/RestaurantsMenu";
import CreateRestaurantForm from "../AddRestaurants/CreateRestaurantForm";
import AdminSidebar from "./AdminSidebar";
import RestaurantDashboard from "../Dashboard/RestaurantDashboard";
import AdminNavbar from "./AdminNavbar";
import { getIngredientCategory } from "../../State/Admin/Ingredients/Action";
import { getIngredientsOfRestaurant } from "../../State/Admin/Ingredients/Action";
import { getRestaurantsCategory } from "../../State/Customers/Restaurant/restaurant.action";
import { fetchRestaurantsOrder } from "../../State/Admin/Order/restaurants.order.action";
import Details from "../Details/Details";

const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);
  const { auth, restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (restaurant.usersRestaurant) {
      dispatch(
        getIngredientCategory({ jwt, id: restaurant.usersRestaurant?.id })
      );
      dispatch(
        getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant?.id })
      );
      dispatch(
        getRestaurantsCategory({
          jwt: auth.jwt || jwt,
          restaurantId: restaurant.usersRestaurant?.id,
        })
      );

      dispatch(
        fetchRestaurantsOrder({
          restaurantId: restaurant.usersRestaurant?.id,
          jwt: auth.jwt || jwt,
        })
      );
    }
  }, [restaurant.usersRestaurant]);
  return (
    <div>
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <div className="">
          <AdminSidebar handleClose={handleCloseSideBar} open={openSideBar} />
        </div>

        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<RestaurantsOrder />} />
            <Route path="/menu" element={<RestaurantsMenu />} />
            <Route path="/add-menu" element={<AddMenuForm />} />
            <Route path="/add-restaurant" element={<CreateRestaurantForm />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
