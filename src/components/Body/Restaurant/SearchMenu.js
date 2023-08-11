import React from 'react'
import { useState } from 'react';
import { filterMenu } from '../../../helper/helperFunction';


const SearchMenu = ({menu, setFilteredMenu}) => {

    const [searchText, setSearchText] = useState("");

    
    return (
        <div className='m-1 flex justify-center'>
            <input
                className="border-black"
                type="text"
                placeholder="Search Menu"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button
                className=" px-1 py-1 bg-gray-400 rounded"
                onClick={() => {
                    console.log(searchText, menu);
                    const data = filterMenu(searchText, menu);
                    console.log(data);
                    setFilteredMenu(data);
                }}
            >
                Search
            </button>
        </div>
    )
}

export default SearchMenu