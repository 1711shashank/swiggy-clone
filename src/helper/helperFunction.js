export function filterRestaurants(searchText, restaurants) {
    const filterRestaurants = restaurants.filter((restaurant) => (
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    ));

    return filterRestaurants;
}



export function filterMenu(searchText, menu) {

    const filteredMenu = menu?.filter(menuItem => {
        const innerArray = menuItem?.card?.card?.itemCards;

        if (innerArray) {
            const filteredInnerArray = innerArray.filter(item =>
                item?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );

            if (filteredInnerArray?.length) {
                menuItem.card.card.itemCards = filteredInnerArray;
            }

            return filteredInnerArray.length > 0;
        }
        return false;
    });
    return filteredMenu;
}
