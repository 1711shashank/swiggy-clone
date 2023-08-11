import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../redux/cartSlice'

const FoodCard = ({ foodDetails }) => {

    const dispatch = useDispatch();
    const handleAddCart = (foodDetails) => {
        dispatch(addItem(foodDetails));
    }

    return (
        <>
            {
                <div className='flex my-2'>
                    <li className='w-40 font-extralight text-gray-400'>
                        {foodDetails?.itemAttribute?.vegClassifier}
                    </li>
                    <li className='w-80 font-extralight text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis'>
                        {foodDetails?.name}
                    </li>
                    <li className=' mx-10 list-none	'>
                        {(foodDetails?.price / 100).toFixed(2)}
                    </li>
                    <button className='px-2 py-1 bg-blue-200 rounded' onClick={() => handleAddCart(foodDetails)}>
                        Add to Cart
                    </button>
                </div>
            }
        </>
    )
}

export default FoodCard