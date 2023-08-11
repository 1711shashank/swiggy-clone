import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Body/SearchBar";
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

                <SearchBar restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />

                <div className="space-x-20">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/support">Support</Link>
                </div>
                <div>
                    <Link to='cart' >
                        <ShoppingCartIcon />
                        {cartItems.length ? cartItems.length : ''}
                    </Link>
                </div>
                <div>
                    {
                        isLoggedIn
                            ? <button className=" w-24 px-2 py-1 bg-gray-400 rounded" onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In  </button>
                            : <button className=" w-24 px-2 py-1 bg-gray-400 rounded" onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out </button>
                    }
                </div>
            </div>
        </>
    )
}

export default Header;



