import React from 'react'

const RestaurantCard = ({ restaurantData }) => {
    console.log(restaurantData);

    const imageURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ restaurantData?.info?.cloudinaryImageId;
    return (
        <>

            <div className='w-60 overflow-hidden p-2 m-3 border border-black'>
                <img className='h-40 w-60 object-cover' src={imageURL}/>
                <p className='text-lg font-bold	'>{restaurantData?.info?.name}</p>
                <p className='text-base'>Rating {restaurantData?.info?.avgRating}</p>
                <p className='font-extralight text-gray-400	line-clamp-1 leading-snug'>{restaurantData?.info?.cuisines.join(", ")}</p>
                <p className='font-extralight text-gray-400	'>{restaurantData?.info?.areaName}</p>

            </div>
        </>
    )
}

export default RestaurantCard