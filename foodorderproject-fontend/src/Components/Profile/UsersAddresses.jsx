import React from "react";
import { useSelector } from "react-redux";
import AddressCard from "../Cart/AddressCard";

const UsersAddresses = () => {
  const addresses = useSelector((state) => state.auth?.user?.addresses || []);

  return (
    <div>
      <div className="flex items-center flex-col lg:px-10">
        <h1 className="text-xl text-center py-7 font-semibold">Addresses</h1>
        <div className="flex justify-center flex-wrap gap-3">
          {addresses.length > 0 ? (
            addresses.map((item, index) => (
              <AddressCard key={index} item={item} />
            ))
          ) : (
            <p>No addresses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersAddresses;
