import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../redux/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleRemoveCart = (foodDetails) => {
        dispatch(removeItem(foodDetails));
    }

    const totalAmount = cartItems?.reduce((sum, item) => {
        sum += item?.price;
        return sum;

    }, 0)


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
                                <li className='w-80 list-none font-extralight text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    {foodDetails?.name}
                                </li>
                                <li className=' mx-10 w-8 list-none	'>
                                    {(foodDetails?.price / 100).toFixed(2)}
                                </li>
                                <button className=' w-52 px-2 py-1 bg-blue-200 rounded' onClick={() => handleRemoveCart(foodDetails)}>
                                    Remove from Cart
                                </button>
                            </div>
                        </>
                    ))
                }
                {
                    cartItems.length
                        ?
                        <div className='flex my-2'>
                            <li className='w-80 list-none'>
                            </li>
                            <li className='w-40 list-none'>
                                Total
                            </li>
                            <li className=' mx-10 w-8 list-none	'>
                                {(totalAmount / 100).toFixed(2)}
                            </li>

                            <button className='w-52 px-5 py-1 bg-green-300 rounded'>
                                Checkout
                            </button>
                        </div>
                        :
                        <h1> Your cart is Empty </h1>


                }


            </div>
        </>
    )
}

export default Cart