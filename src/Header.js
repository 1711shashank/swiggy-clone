import React, { useState } from "react";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between px-20 py-2 drop-shadow-md bg-gray-100">
                <img className="w-8" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" alt="" />
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



