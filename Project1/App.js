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
const RestaurantCard = () => {
    return (
        <div className="restaurant-card" >
          <img className="res-logo" src="https://imgs.search.brave.com/AF4S4p7PrJ1LWVZx46iBe8nN1aQJjBJXGbsTzRPskDQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLzZr/OVFnWVBDRlIteUFF/S1V1NzlDT05PMm9E/T2FSSFBKVXNndzhO/OGIzdHhWdkhjSzBq/cW1McXRwT3BEQXN3/MGVZOTJ1aWp6NUNp/R3dDWnIxM25tSDZB/YWpLemtTSXB2N0dm/RmxqQW9aPXczNjAt/cnc" alt="logo" />
            <h3>Walia Hotel</h3>
            <h4>Biryani,North Indian</h4>
            <h4>4.2 Stars</h4>
            <h4>30 mins</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-list">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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