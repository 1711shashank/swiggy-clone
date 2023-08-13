import React from 'react'
import { useState } from 'react';
import { filterMenu } from '../../../helper/helperFunction';


const SearchMenu = ({menu, setFilteredMenu}) => {

    const [searchText, setSearchText] = useState("");
    
    return (
        <div className='m-2 flex'>
            <input
                className=" pl-2 w-80 border border-gray-300 rounded"
                type="text"
                placeholder="Search Menu"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button
                className=" search-btn px-4 py-2  bg-green-200 ml-2 rounded-lg"
                onClick={() => {
                    const data = filterMenu(searchText, menu);
                    setFilteredMenu(data);
                }}
            >
                Search
            </button>
        </div>
    )
}

export default SearchMenu