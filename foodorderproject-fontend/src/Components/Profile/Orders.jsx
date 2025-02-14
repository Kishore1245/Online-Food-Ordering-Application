import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { getUsersOrders } from "../../State/Customers/Orders/Action";

const Orders = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const orders = useSelector((store) => store.order?.orders || []);

  useEffect(() => {
    if (jwt) {
      dispatch(getUsersOrders(jwt));
    }
  }, [dispatch, jwt]); // Fixed dependency array

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {orders.length > 0 ? (
          orders.map((order) =>
            order.items.map((item, index) => (
              <OrderCard key={index} status={order.orderStatus} order={item} />
            ))
          )
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
