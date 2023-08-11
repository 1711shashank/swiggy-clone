import React, { useEffect, useState } from 'react'
import RestaurantContainer from './RestaurantContainer'
import SearchBar from './SearchBar';
import Shimmer from '../Shimmer';
import useOnline from '../../helper/useOnline';
import { useOutletContext } from 'react-router-dom';


const Body = () => {

    const {restaurants, filteredRestaurants} = useOutletContext();

    const isOnline = useOnline();

    if (!isOnline) return <h1> You are Offline</h1>
    if (restaurants?.length === 0) return <Shimmer />
    if (filteredRestaurants?.length === 0) return <h1>No Restraunt match your Filter!!</h1>

    return (
        <>
            <RestaurantContainer restaurants={restaurants} filteredRestaurants={filteredRestaurants} />
        </>
    )
}

export default Body