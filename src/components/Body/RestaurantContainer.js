import React from 'react'
import RestaurantCard from './RestaurantCard'
import Footer from '../Footer/Footer';


const RestaurantContainer = ({ restaurants, filteredRestaurants }) => {
    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {
                    restaurants.length
                        ?
                        <>
                            {
                                filteredRestaurants.map((restaurant) => (
                                    <RestaurantCard restaurantData={restaurant} key={restaurant.info.id} />
                                ))
                            }
                        </> : <> <Footer /> </>
                }
            </div>
        </>
    )
}

export default RestaurantContainer