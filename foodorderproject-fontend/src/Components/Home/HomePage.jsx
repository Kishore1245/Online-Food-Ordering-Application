import React, { useEffect } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "../../AdminComponent/RestarentCard/RestaurantCard";
import MultipleItemsCarousel from "../MultiItemCarousel/MultiItemCarousel";
import { getAllRestaurantsAction } from "../../State/Customers/Restaurant/restaurant.action";

const HomePage = () => {
  const dispatch = useDispatch();

  // ✅ Fixed: Select only required parts
  const auth = useSelector((store) => store.auth);
  const restaurant = useSelector((store) => store.restaurant);

  useEffect(() => {
    if (auth?.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth, dispatch]); // ✅ Fixed dependency array

  return (
    <div>
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">S K Food</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste the Convenience: Food, Fast and Delivered.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Top Meals
        </p>
        <MultipleItemsCarousel />
      </section>

      <section className="p-10 lg:px-20">
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
          Order From Our Handpicked Favorites
        </h1>
        <div className="flex flex-wrap items-center justify-around">
          {restaurant?.restaurants?.map((item, i) => (
            <RestaurantCard key={item.id || i} data={item} /> // ✅ Added key prop
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
