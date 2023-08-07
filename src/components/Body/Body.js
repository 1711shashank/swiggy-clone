import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar';

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5779638&lng=88.4649849&page_type=DESKTOP_WEB_LISTING');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            
            const data = await response.json();

            setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (restaurants?.length === 0) return <h1>Loading...</h1>
    if (filteredRestaurants?.length === 0) return <h1>No Restraunt match your Filter!!</h1>

    return (
        <>
            <SearchBar restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
            <RestaurantContainer restaurants={restaurants} filteredRestaurants={filteredRestaurants} />
        </>
    )
}

export default Body