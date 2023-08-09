import React from 'react'
import FoodCard from './FoodCard';


const FoodCategory = ({ foodCategoryList }) => {

    const foodCategory = foodCategoryList?.card?.card;

    return (
        <>
            <h1 className='text-lg'>{foodCategory?.title}</h1>
            {
                foodCategory?.itemCards?.map((foodItem, foodIndex) => (
                    <FoodCard key={foodIndex} foodDetails={foodItem} />
                ))
            }
        </>
    )
}

export default FoodCategory