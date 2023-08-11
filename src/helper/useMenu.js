import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { FETCH_MENU_URL } from "./staticData";
import { menu_localdata } from './staticData';


const useMenu = () => {
    const { restaurantId } = useParams();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () => {
        // const response = await fetch(FETCH_MENU_URL + restaurantId);
        // const data = await response.json();
        
        // setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        setMenu(menu_localdata);


    };

    return menu;
}

export default useMenu;