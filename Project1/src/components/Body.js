import RestaurantCard from './RestaurantCard';
import FOOD_IMAGES from '../constants/foodimages';
import restaurantList from '../constants/mockdata';  


const Body = () => {
  return (
    <>
    <div className='search'>Search</div>
    <div className="restaurant-list">
      {restaurantList.map((restaurant, index) => {
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