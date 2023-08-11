import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../helper/useOnline";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const isOnline = useOnline();
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between px-20 py-2 drop-shadow-md bg-gray-100">
                <img className="w-8" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" alt="" />
                <div className="space-x-20">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/support">Support</Link>
                </div>
                <div>
                    {isOnline ? "🟢" : "🔴"}
                </div>
                <div>
                    <Link to='cart' >
                        <ShoppingCartIcon />
                        {cartItems.length ? cartItems.length : ''}
                    </Link>
                </div>
                {
                    isLoggedIn
                        ? <button className=" px-2 py-1 bg-gray-400 rounded" onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In  </button>
                        : <button className=" px-2 py-1 bg-gray-400 rounded" onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out </button>
                }
            </div>
        </>
    )
}

export default Header;



