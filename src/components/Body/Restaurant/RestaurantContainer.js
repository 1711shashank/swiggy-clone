import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard'


const RestaurantContainer = ({ filteredRestaurants }) => {

    return (
        <>
            <div className='flex flex-wrap justify-center'>
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
            </div>
        </>
    )
}

export default RestaurantContainer