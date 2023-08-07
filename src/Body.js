import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Footer from './Footer';

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5779638&lng=88.4649849&page_type=DESKTOP_WEB_LISTING');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();

            console.log(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <>
            <div className='flex flex-wrap'>

                {
                    restaurants.length
                        ?
                        <>
                            {
                                restaurants.map((restaurant) => (
                                    <RestaurantCard restaurantData={restaurant} />
                                ))
                            }
                        </>
                        : 
                        <>
                            <Footer />
                        </>
                }




                {/* <RestaurantCard /> */}

            </div>
        </>
    )
}

export default Body