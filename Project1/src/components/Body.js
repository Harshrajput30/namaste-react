
import RestaurantCard from './RestaurantCard';
import FOOD_IMAGES from '../constants/foodimages';
import restaurantList from '../constants/mockdata'; 
import { useState, useEffect } from 'react'; 
import Shimmer from './Simmer';


const Body = () => {

    const[listofRestro, setlistofRestro]= useState([]);
    const[filteredRestro, setFilteredRestro]= useState([]);
    const[searchText, setSearchText] = useState("");
     useEffect(() => {
     fetchData();
     }, []);

  const fetchData = () => {
    // Simulating API
    setTimeout(() => {
      setlistofRestro(restaurantList);
      setFilteredRestro(restaurantList);
    }, 1000);
  };
  // Conditional Rendering
  if(listofRestro.length === 0){
    return <Shimmer />;
  }



  return (
    <>
    <div className='filter'>
      <div className='search'>
        <input type="text" className='search-box' placeholder='Search...' value={searchText} 
        onChange={(e) => setSearchText(e.target.value)} />

        <button className='search-btn' onClick={() => {
            const filteredRestaurants = listofRestro.filter(restaurant => 
                restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestro(filteredRestaurants);
        }}>
            Search
        </button>
        </div>



        <button className='filter-btn' onClick={() => {
             const filteredRestaurants = listofRestro.filter(restaurant => restaurant.data.avgRating > 4);
             setFilteredRestro(filteredRestaurants);
        }}>
            Top Rated Restaurants</button>
        </div>



    <div className="restaurant-list">
      {filteredRestro.map((restaurant,index) => {
        return (
          <RestaurantCard
            key={restaurant.data.id}
            {...restaurant.data}
            image={FOOD_IMAGES[index % FOOD_IMAGES.length]} />
        );
      })}

    </div>
    </>
  );
};

export default Body;
