import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./Logo.png";


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
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);