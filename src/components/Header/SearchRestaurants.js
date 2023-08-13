import { useState } from 'react'
import { filterRestaurants } from '../../helper/helperFunction';


const SearchRestaurants = ({ restaurants, setFilteredRestaurants }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <div className='m-1 flex justify-center'>
                <input
                    className=" pl-2 w-[30vw] border border-gray-300 rounded"
                    type="text"
                    placeholder="Search Restaurants"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className=" search-btn px-4 py-2  bg-green-200 ml-2 rounded-lg"
                    onClick={() => {
                        const data = filterRestaurants(searchText, restaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchRestaurants