import React from "react";
import { Route, Routes } from "react-router-dom";

import ProfileNavigation from "./ProfileNavigation";
import Orders from "./Orders";
import UsersAddresses from "./UsersAddresses";
import Favorite from "./Favorite";
import UserProfile from "./UserProfile";
import CustomerEvents from "./CustomerEvents";
import Notifications from "./Notifications";

const Profile = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation />
      </div>
      {/* <Divider orientation="vertical" flexItem /> */}
      <div className="lg:w-[80%]">
        <Routes>
        <Route path="/" element={<UserProfile/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/address" element={<UsersAddresses/>} />
          <Route path="/favorites" element={<Favorite/>} />
          <Route path="/payments" element={<Orders/>} />
          <Route path="/events" element={<CustomerEvents/>} />
          <Route path="/notification" element={<Notifications/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
