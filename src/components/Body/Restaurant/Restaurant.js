import Shimmer from '../../Shimmer';
import useMenu from '../../../helper/useMenu';
import FoodCategory from '../Food/FoodCategory'

const Restaurant = () => {

    const menu = useMenu();

    return (
        <div>
            {
                menu.length ?
                    <>
                        {
                            menu.slice(2).map((foodCategoryList, index) => (
                                <div className='m-5 w-1/2vw flex flex-col' key={index}>
                                    <FoodCategory foodCategoryList={foodCategoryList} />
                                </div>
                            ))
                        }
                    </>
                    : <Shimmer />
            }
        </div>
    );
};

export default Restaurant;
