import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const AddressCard = ({ handleSelectAddress, item, showButton }) => {
  const navigate = useNavigate();

  const handleSelect = (address) => {
    handleSelectAddress(address);
    navigate("/payment");
  };

  return (
    <Card className="flex space-x-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>
          {item.streetAddress}, {item.pincode}, {item.state}, {item.country}
        </p>
        {showButton && (
          <Button
            onClick={() => handleSelect(item)}
            type="button"
            variant="outlined"
            className="w-full"
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

const ParentComponent = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);  // Store selected address in state
  };

  const addressItem = {
    streetAddress: "123 Main St",
    pincode: "123456",
    state: "State",
    country: "Country",
  };

  return (
    <div>
      <AddressCard
        handleSelectAddress={handleSelectAddress}
        item={addressItem}
        showButton={true}
      />
      <div>
        <p>Selected Address: {JSON.stringify(selectedAddress)}</p>
      </div>
    </div>
  );
};

export default ParentComponent;
