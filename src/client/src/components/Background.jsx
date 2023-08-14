import { useState, useEffect, /* useRef */ } from 'react';
import Cards from './Cards.jsx';
import SearchBar from './SearchBar.jsx';
import filterPatternsByName from '../helpers.js'
import PostNewPatternForm from './PostNewPatternForm.jsx'

function Background({ list, fetchPatterns }) {

    // let [selectedPattern, setSelectedPattern] = useState({});
    let [filteredList, setFilteredList] = useState([]);
    let [searchCriteria, setSearchCriteria] = useState([""]);
    let [inputValues, setInputValues] = useState(["",""])

    // function setStateOnClick(singlePattern) {
    //     setSelectedPattern(singlePattern);
    // }

    // function setStateAndDisplayDetails(patternIndex) {
    //     setStateOnClick(list.pattern[patternIndex]);
    //     // displayDetails(list.pattern[patternIndex]);
    // }

    // function setStateOnClick(singlePattern) {
    //     setSelectedPattern(singlePattern);
    // }

    // function setStateAndDisplayDetails(PatternIndex) {
    //     setStateOnClick(list.Pattern[PatternIndex]);
    //     displayDetails(list.Pattern[PatternIndex]);
    // }

    useEffect(() => {
        let newList = filterPatternsByName(list, searchCriteria);
        console.log("newList", newList);
        setFilteredList(newList);
        // renderList(filteredList);
        // console.log("filteredList", filteredList);
    }, [searchCriteria]);
    
    function displaySearchBar(){
        return (
            <div className='padding20pixels' id='searchCriteriaContainer'>
                <SearchBar
                    list={list}
                    searchCriteria={searchCriteria}
                    setSearchCriteria={setSearchCriteria}
                    filteredList={filteredList}
                    setFilteredList={setFilteredList}
                    />
            </div>
        )
    };

    function renderList(patternList) {
        
        return patternList && patternList.map((singlePattern) => {
            
            return (
                <div key={singlePattern.ID}> 
                    <li>
                        <Cards  ID={singlePattern.ID}
                                PATTERN_TITLE={singlePattern.PATTERN_TITLE} 
                                PATTERN_LINK={singlePattern.PATTERN_LINK}
                        />
                    </li>
                </div>
            )
        })
    }; 

    return (
        <div>
            <div>
                <PostNewPatternForm
                    fetchPatterns={fetchPatterns}
                    inputValues={inputValues}
                    setInputValues={setInputValues}
                />
            </div>
            <div>
                {displaySearchBar()}
            </div>
            <div className='card-container'>
                {renderList(list)}
            </div>
       </div>
    )
}

export default Background;