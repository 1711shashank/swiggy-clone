import React from 'react'
import FoodCard from './FoodCard';


const FoodCategory = ({ foodCategoryList }) => {

    const foodCategory = foodCategoryList?.card?.card;

    return (
        <>
            <h1 className='text-lg'>{foodCategory?.title}</h1>
            {
                foodCategory?.itemCards?.map((foodItem) => (
                    <FoodCard key={foodItem?.card?.info?.id} foodDetails={foodItem?.card?.info} />
                ))
            }
        </>
    )
}

export default FoodCategory