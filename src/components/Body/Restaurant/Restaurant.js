import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from '../../Shimmer';


const Test = ({ data }) => {

    const temp = data?.card?.card?.itemCards;
    // console.log(temp);

    return (
        <>
            {
                temp &&
                <>
                    {
                        temp.map((item) => (
                            <li>{item?.card?.info?.name}</li>
                        ))
                    }
                </>
                // :<Shimmer/>
            }
        </>
    )
}

const Restaurant = () => {
    const { restaurantId } = useParams();

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getMenuData();
    })

    getMenuData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=22.5779638&lng=88.4649849&restaurantId=' + restaurantId);
        const data = await response.json();

        console.log("menu", data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.title);
        setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }


    return (
        <>
            <div>

                <h1>hhuhu</h1>

                {
                    menu.map((item) => (
                        <>
                        <p>{item?.card?.card?.title}</p>
                        <Test data={item} />

                        </>
                    ))
                }



            </div>
        </>
    )
}

export default Restaurant