import { useState } from "react";
import { Link } from "react-router-dom";
import SearchRestaurants from "./SearchRestaurants";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = ({ restaurants, setFilteredRestaurants }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <>
            <div className="flex items-center justify-between px-20 py-2 drop-shadow-md bg-gray-100">
                <Link to="/">
                    <img className="w-8" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" alt="" />
                </Link>

                <SearchRestaurants restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />

                <div className="space-x-10 text-gray-600 w-40">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/support">Support</Link>
                </div>
                <div>
                    <Link to='cart' >
                        <ShoppingCartIcon sx={{color:'#767676'}} />
                        {cartItems.length ? cartItems.length : ''}
                    </Link>
                </div>
                <div>
                    {
                        isLoggedIn
                            ? <button className=" w-24 search-btn px-4 py-2  bg-green-200 ml-2 rounded-lg " onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In  </button>
                            : <button className=" w-24 search-btn px-4 py-2  bg-green-200 ml-2 rounded-lg " onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out </button>
                    }
                </div>
            </div>
        </>
    )
}

export default Header;



