import React, { useEffect, useState } from 'react'
import RestaurantContainer from './RestaurantContainer'
import SearchBar from './SearchBar';
import Shimmer from '../Shimmer';
import { FETCH_RESTAURANTS_URL } from '../../helper/staticData';


const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            const response = await fetch(FETCH_RESTAURANTS_URL);
            const data = await response.json();

            console.log(data?.data?.cards[2]?.card?.card);

            setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (restaurants?.length === 0) return <Shimmer/> 
    if (filteredRestaurants?.length === 0) return <h1>No Restraunt match your Filter!!</h1>

    return (
        <>
            <SearchBar restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
            <RestaurantContainer restaurants={restaurants} filteredRestaurants={filteredRestaurants} />
        </>
    )
}

export default Body