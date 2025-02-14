import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RestaurantCard from '../../AdminComponent/RestarentCard/RestaurantCard';


const Favorite = () => {
  // Corrected: Destructure the favorites slice directly from the state
  const { favorites } = useSelector((state) => state.auth);

  useEffect(() => {
    // dispatch()
  }, []);

  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap justify-center'>
        {favorites?.map((item) => (
          <RestaurantCard key={item.id} data={item} />  
        ))}
      </div>
    </div>
  );
};

export default Favorite;
