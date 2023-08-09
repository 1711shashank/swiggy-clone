import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodCategory from './FoodCategory'

const Restaurant = () => {
    const { restaurantId } = useParams();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=22.5779638&lng=88.4649849&restaurantId=' + restaurantId);
        const data = await response.json();
        setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };

    return (
        <div>
            {
                menu.slice(2).map((foodCategoryList, index) => (
                    <div className='m-5 w-96' key={index}>
                        <FoodCategory foodCategoryList={foodCategoryList}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Restaurant;
