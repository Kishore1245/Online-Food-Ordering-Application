import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import { useSelector } from "react-redux";
import AdminRouters from "./AdminRouters";

const Routers = () => {
  const auth = useSelector((state) => state.auth); // Fixing the selector

  return (
    <>
      <Routes>
        <Route path="/admin/restaurant/*" element={<AdminRouters />} />
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>
  );
};

export default Routers;
