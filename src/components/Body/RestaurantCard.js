import React from 'react'
import { IMG_CDN_URL } from '../../helper/staticData';

const RestaurantCard = ({ restaurantData }) => {
    const { name, cloudinaryImageId, avgRating, cuisines, areaName } = restaurantData?.info;
    const imageURL = IMG_CDN_URL + cloudinaryImageId;

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