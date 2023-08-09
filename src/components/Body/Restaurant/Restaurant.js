import React, { useEffect, useState } from 'react'
import FoodCategory from './FoodCategory'
import useMenu from '../../../helper/useMenu';

const Restaurant = () => {

    const menu = useMenu();
    
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
