import { useEffect, useState } from 'react';
// import { getListOf } from '../helpers.js';


function SearchBar ({list, searchCriteria, setSearchCriteria, filteredList, setFilteredList}) {


    function clearSearch(click) {
        click.preventDefault();
        let clearedSearchCriteria = searchCriteria;
        clearedSearchCriteria = [""];
        setSearchCriteria(clearedSearchCriteria);
    }

    return (
        <div>
            <form>
                <input
                    name="text"
                    id="searchBar"
                    placeholder='Search Pattern'
                    onChange={(event) =>   {       
                        event.preventDefault();                 
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria = event.target.value; 
                        setSearchCriteria([newSearchCriteria]);
                        }}>
                </input>
            </form>
        </div>
    )
}


export default SearchBar;