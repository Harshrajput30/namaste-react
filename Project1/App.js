import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "url:./Logo.png";
import './index.css';



/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'> 
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    </ul>
                </div>
            </div>
    );
}
const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card" >
          <img className="res-logo" src="https://imgs.search.brave.com/AF4S4p7PrJ1LWVZx46iBe8nN1aQJjBJXGbsTzRPskDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLzZr/OVFnWVBDRlIteUFF/S1V1NzlDT05PMm9E/T2FSSFBKVXNndzhO/OGIzdHhWdkhjSzBq/cW1McXRwT3BEQXN3/MGVZOTJ1aWp6NUNp/R3dDWnIxM25tSDZB/YWpLemtTSXB2N0dm/RmxqQW9aPXczNjAt/cnc" alt="logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating} Stars</h4>
            <h4>{props.delivery}</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-list">
             <RestaurantCard 
             resName="Walia Hotel"
             cuisine="Biryani, North Indian"
              rating="4.2"
              delivery="30 mins" 
             />

            <RestaurantCard 
             resName="Spice Hub"
             cuisine="Chinese, Fast Food"
              rating="4.0"
              delivery="25 mins" 
            />

             <RestaurantCard 
               resName="Food Villa"
              cuisine="South Indian"
             rating="4.5"
             delivery="20 mins" 
             />

            <RestaurantCard 
             resName="Burger Point"
              cuisine="Burgers, Snacks"
             rating="3.9"
             delivery="35 mins" 
             />

             <RestaurantCard 
             resName="Punjabi Dhaba"
             cuisine="Punjabi, North Indian"
             rating="4.3"
             delivery="40 mins" 
             />

            <RestaurantCard 
             resName="Pizza World"
             cuisine="Italian, Pizza"
             rating="4.1"
             delivery="28 mins" 
            />

             <RestaurantCard 
             resName="Roll Express"
               cuisine="Rolls, Street Food"
             rating="3.8"
             delivery="22 mins" 
              />

            <RestaurantCard 
              resName="Desi Tadka"
              cuisine="Indian, Curry"
              rating="4.4"
             delivery="32 mins" 
             />

              <RestaurantCard 
             resName="Chinese Corner"
             cuisine="Chinese"
               rating="4.0"
                delivery="26 mins" 
             />

<RestaurantCard 
  resName="Sweet Palace"
  cuisine="Sweets, Desserts"
  rating="4.6"
  delivery="18 mins" 
/>

<RestaurantCard 
  resName="Cafe Brew"
  cuisine="Cafe, Beverages"
  rating="4.2"
  delivery="24 mins" 
/>

<RestaurantCard 
  resName="Tandoori Nights"
  cuisine="Tandoor, Mughlai"
  rating="4.3"
  delivery="34 mins" 
/>

<RestaurantCard 
  resName="Veg Treat"
  cuisine="Pure Veg"
  rating="4.1"
  delivery="27 mins" 
/>

             </div>
            </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);