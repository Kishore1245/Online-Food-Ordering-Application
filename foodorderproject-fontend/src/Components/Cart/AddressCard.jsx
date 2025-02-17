import React from "react";
import { Button, Card } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const AddressCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card className="flex space-x-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>
          {item.streetAddress}, {item.pincode}, {item.state}, {item.country}
        </p>
      </div>
    </Card>
  );
};

const AddressList = () => {
  const addressItem = {
    streetAddress: "123 Main St",
    pincode: "123456",
    state: "State",
    country: "Country",
  };

  return (
    <div>
      <AddressCard item={addressItem} />
    </div>
  );
};

export default AddressList;
