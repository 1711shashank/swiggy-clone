import React from 'react'
import { removeItem } from '../../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux'

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
            <div className='mt-8 flex flex-col items-center'>

                {
                    cartItems.map((foodDetails) => (
                        <>

                            <div className='flex my-2 items-center'>
                                <img className='w-5 h-5 mr-3' src={foodDetails?.itemAttribute?.vegClassifier === 'NONVEG' ? 'https://qph.cf2.quoracdn.net/main-qimg-63ca3fefb57ae52e1c1253bc14deddcd' : 'https://qph.cf2.quoracdn.net/main-qimg-5c0e58edbc6cae45deda4c00b82e29ba'} width='100%' />
                                <li className='w-80 list-none font-extralight text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    {foodDetails?.name}
                                </li>
                                <li className=' mx-10 w-20 list-none'>
                                    ₹ {(foodDetails?.price / 100).toFixed(2)}
                                </li>
                                <button className='w-24 h-9 text-green-600  border border-gray-300 rounded' onClick={() => handleRemoveCart(foodDetails)}>
                                    Remove
                                </button>
                            </div>
                        </>
                    ))
                }
                {
                    cartItems.length
                        ?
                        <div className='flex my-2 items-center'>
                            <li className='w-72 list-none'>
                            </li>
                            <li className='w-16 list-none'>
                                Total
                            </li>
                            <li className='mx-10 w-20 list-none'>
                                ₹ {(totalAmount / 100).toFixed(2)}
                            </li>

                            <button className='w-24 h-9 bg-green-200 rounded'>
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