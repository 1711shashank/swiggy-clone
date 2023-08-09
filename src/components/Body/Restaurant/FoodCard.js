import React from 'react'

const FoodCard = ({ foodDetails }) => {

    return (
        <>
            {
                <div className='flex'>
                    <li className='w-40 font-extralight text-gray-400'>
                        {foodDetails?.card?.info?.itemAttribute?.vegClassifier}
                    </li>
                    <li className='w-60 font-extralight text-gray-600 line-clamp-1 leading-snug'>
                        {foodDetails?.card?.info?.name}
                    </li>
                    <li className=' ml-5 list-none	'>
                        {(foodDetails?.card?.info?.price / 100).toFixed(2)}
                    </li>
                </div>
            }
        </>
    )
}

export default FoodCard