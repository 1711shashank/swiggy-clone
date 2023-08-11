import React, { useEffect, useState } from 'react'
import FoodCategory from './FoodCategory'
import useMenu from '../../../helper/useMenu';
import Shimmer from '../../Shimmer';

const Restaurant = () => {

    const menu = useMenu();

    console.log(menu.length)

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
