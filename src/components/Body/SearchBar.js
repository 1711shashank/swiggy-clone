import { useState } from 'react'
import { filterData } from '../../helper/helperFunction';


const SearchBar = ({ restaurants, setFilteredRestaurants }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <div className='m-1 flex justify-center'>
                <input
                    className="border-black"
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className=" px-1 py-1 bg-gray-400 rounded"
                    onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchBar