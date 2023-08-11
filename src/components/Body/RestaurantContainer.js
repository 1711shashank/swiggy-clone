import React from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from '../Shimmer';
import { Link } from 'react-router-dom';


const RestaurantContainer = ({ restaurants, filteredRestaurants }) => {

    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {
                    restaurants?.length
                        ?
                        <>
                            {
                                filteredRestaurants.map((restaurant) => (
                                    <Link
                                        to={"/restaurant/" + restaurant.info.id}
                                        key={restaurant.info.id}
                                    >
                                        <RestaurantCard restaurantData={restaurant} />
                                    </Link>

                                ))
                            }
                        </> : <Shimmer />
                }
            </div>
        </>
    )
}

export default RestaurantContainer