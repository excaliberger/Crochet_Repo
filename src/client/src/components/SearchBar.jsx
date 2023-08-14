import e from 'express';
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
            <form onSubmit={(e) => {

                e.preventDefault();
                let newSearchCriteria = searchCriteria;
                newSearchCriteria = e.target.value; 
                setSearchCriteria([newSearchCriteria])
                console.log("searchCriteria", searchCriteria)

            }}>
                <input
                    name="text"
                    id="searchBar"
                    placeholder='Search Pattern'
                    onChange={(event) =>   {
                        // event.preventDefault();                        
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria = event.target.value; 
                        setSearchCriteria([newSearchCriteria])}}
                >
                </input>
                <input type="Submit"></input>
            </form>
        </div>
    )
}


export default SearchBar;