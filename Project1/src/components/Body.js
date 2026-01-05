import RestaurantCard from './RestaurantCard';
import FOOD_IMAGES from '../constants/foodimages';
import restaurantList from '../constants/mockdata'; 
import { useState } from 'react'; 


const Body = () => {
    const[listofRestro, setlistofRestro]= useState(restaurantList);
  return (
    <>
    <div className='filter'>
        <button className='filter-btn' onClick={() => {
             const filteredRestaurants = listofRestro.filter(restaurant => restaurant.data.avgRating > 4);
             setlistofRestro(filteredRestaurants);
        }}>
            Top Rated Restaurants</button>
        </div>
    <div className="restaurant-list">
      {listofRestro.map((restaurant,index) => {
        return (
          <RestaurantCard
            key={restaurant.data.id}
            {...restaurant.data}
            image={FOOD_IMAGES[index % FOOD_IMAGES.length]} />
        );
      })}

    </div></>
  );
};

export default Body;