import Shimmer from '../../Shimmer';
import useMenu from '../../../helper/useMenu';
import FoodCategory from '../Food/FoodCategory'
import SearchMenu from './SearchMenu';
import { useEffect, useState } from "react";
import { menu_localdata } from '../../../helper/staticData'

const Restaurant = () => {

    // const menu = useMenu();

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () => {
        // const response = await fetch(FETCH_MENU_URL + restaurantId);
        // const data = await response.json();

        // setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        setMenu(menu_localdata);


    };



    return (
        <>
            <SearchMenu menu={menu} setFilteredMenu={setMenu} />
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
        </>
    );
};

export default Restaurant;
