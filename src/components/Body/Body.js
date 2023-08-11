import Shimmer from '../Shimmer';
import useOnline from '../../helper/useOnline';
import { useOutletContext } from 'react-router-dom';
import RestaurantContainer from './Restaurant/RestaurantContainer';


const Body = () => {

    const isOnline = useOnline();

    const { restaurants, filteredRestaurants } = useOutletContext();
    

    if (!isOnline) return <h1> You are Offline</h1>
    if (restaurants?.length === 0) return <Shimmer />
    if (filteredRestaurants?.length === 0) return <h1>No Restraunt match your Filter!!</h1>

    return (
        <>
            {
                filteredRestaurants?.length
                    ? <RestaurantContainer filteredRestaurants={filteredRestaurants} />
                    : <Shimmer />
            }
        </>
    )
}

export default Body