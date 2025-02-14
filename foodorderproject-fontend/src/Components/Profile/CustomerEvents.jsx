import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../State/Customers/Restaurant/restaurant.action';
import EventCard from '../../AdminComponent/Events/EventCard';

const CustomerEvents = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const restaurantEvents = useSelector((store) => store.restaurant?.events || []);

  useEffect(() => {
    if (jwt) {
      dispatch(getAllEvents({ jwt }));
    }
  }, [dispatch, jwt]); // Corrected dependency array

  return (
    <div className="mt-5 px-5 flex flex-wrap gap-5">
      {restaurantEvents.length > 0 ? (
        restaurantEvents.map((item, index) => (
          <div key={index}>
            <EventCard isCustomer={true} item={item} />
          </div>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default CustomerEvents;
