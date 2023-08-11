import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../redux/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleRemoveCart = (foodDetails) => {
        dispatch(removeItem(foodDetails));
    }




    return (
        <>
            <div>

                {
                    cartItems.map((foodDetails) => (
                        <>
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
                                <button className='px-2 py-1 bg-blue-200 rounded' onClick={() => handleRemoveCart(foodDetails)}>
                                    Remove from Cart
                                </button>
                            </div>
                        </>
                    ))
                }


            </div>
        </>
    )
}

export default Cart