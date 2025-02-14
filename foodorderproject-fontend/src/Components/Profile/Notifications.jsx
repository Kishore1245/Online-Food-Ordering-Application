import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@mui/material";
import { getUsersNotificationAction } from "../../State/Customers/Orders/Action";

const Notifications = () => {
  const dispatch = useDispatch();

  const notifications = useSelector((store) => store.order?.notifications || []);

  useEffect(() => {
    dispatch(getUsersNotificationAction());
  }, [dispatch]); // Fixed dependency array

  return (
    <div className="space-y-5 px-5 lg:px-20">
      <h1 className="py-5 font-bold text-2xl text-center">Notifications</h1>
      {notifications.length > 0 ? (
        notifications.map((item, index) => (
          <Card key={index} className="p-5">
            <p>{item.message}</p>
          </Card>
        ))
      ) : (
        <p className="text-center">No notifications available.</p>
      )}
    </div>
  );
};

export default Notifications;
