import FoodCard from './FoodCard';

const FoodCategory = ({ foodCategoryList, showVegOnly }) => {

    const foodCategory = foodCategoryList?.card?.card;



    return (
        <>
            {

                foodCategory?.itemCards?.length &&
                <>
                    <h1 className='m-3 text-lg'>{foodCategory?.title} </h1>
                    {
                        foodCategory?.itemCards?.map((foodItem) => (
                            <FoodCard key={foodItem?.card?.info?.id} foodDetails={foodItem?.card?.info} showVegOnly={showVegOnly} />
                        ))
                    }
                </>
            }
        </>
    )
}

export default FoodCategory