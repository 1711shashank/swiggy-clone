export function filterRestaurants(searchText, restaurants) {
    const filterRestaurants = restaurants.filter((restaurant) => (
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    ));

    return filterRestaurants;
}

function filterNew(innerArray, searchText) {

    if (!innerArray) return 0

    const temp = innerArray.filter((item) => (
        item?.card?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
    ))

    if (temp.length) console.log(temp)

    return temp;
}



export function filterMenu(searchText, menu) {

    const newArray = [];
    menu.map((item) => {
        const innerArray = item?.card?.card?.itemCards
        const newInnerArray = filterNew(innerArray, searchText)
        if (newInnerArray.length > 0) {
            newArray.push(newInnerArray);
        }
    });

    console.log(newArray);
    return newArray;
}
