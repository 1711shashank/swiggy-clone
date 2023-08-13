import { useDispatch } from 'react-redux'
import { addItem } from '../../../redux/cartSlice'

const FoodCard = ({ foodDetails, showVegOnly }) => {

    const dispatch = useDispatch();
    const handleAddCart = (foodDetails) => {
        dispatch(addItem(foodDetails));
    }

    const hideNonVeg = foodDetails?.itemAttribute?.vegClassifier === 'NONVEG' && 'hidden';
    const foodClassifierImage = foodDetails?.itemAttribute?.vegClassifier === 'NONVEG' ? 'https://qph.cf2.quoracdn.net/main-qimg-63ca3fefb57ae52e1c1253bc14deddcd' : 'https://qph.cf2.quoracdn.net/main-qimg-5c0e58edbc6cae45deda4c00b82e29ba';


    return (
        <>
            {

                <div className={`my-2 flex items-center ${showVegOnly && hideNonVeg}`}>
                    <img className='w-5 h-5 mr-3' src={foodClassifierImage} width='100%' />
                    <li className='w-80 list-none font-extralight text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis'>
                        {foodDetails?.name}
                    </li>
                    <li className=' mx-10 w-20 list-none'>
                        ₹ {(foodDetails?.price / 100).toFixed(2)}
                    </li>
                    <button className='w-24 h-9 text-green-600 uppercase border border-gray-300 font-medium rounded' onClick={() => handleAddCart(foodDetails)}>
                        add
                    </button>
                </div>
            }
        </>
    )
}

export default FoodCard