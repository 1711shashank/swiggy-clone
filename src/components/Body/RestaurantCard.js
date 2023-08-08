import React from 'react'

const RestaurantCard = ({ restaurantData }) => {
    const { name, cloudinaryImageId, avgRating, cuisines, areaName } = restaurantData?.info;
    const imageURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId;

    return (
        <>
            <div className='w-72 overflow-hidden p-2 m-3 border border-black'>
                <img className='h-44 object-cover ' src={imageURL} />
                <p className='text-lg font-bold	'>{name}</p>
                <p className='text-base'>Rating {avgRating}</p>
                <p className='font-extralight text-gray-400	line-clamp-1 leading-snug'>{cuisines.join(", ")}</p>
                <p className='font-extralight text-gray-400	'>{areaName}</p>

            </div>
        </>
    )
}

export default RestaurantCard