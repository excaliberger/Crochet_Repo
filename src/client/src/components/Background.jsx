import { useState, useEffect, /* useRef */ } from 'react';
import Cards from './Cards.jsx';
import SearchBar from './SearchBar.jsx';
import filterPatternsByName from '../helpers.js'
import PostNewPatternForm from './PostNewPatternForm.jsx'
// import PatternDisplayModal from './PatternDisplayModal.jsx';

function Background({ list, fetchPatterns }) {

    // let [selectedPattern, setSelectedPattern] = useState({});
    let [filteredList, setFilteredList] = useState([{}]);
    let [searchCriteria, setSearchCriteria] = useState([""]);
    let [inputValues, setInputValues] = useState(["",""]);
    let [img, setImg] = useState("");
    let [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
    }

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
        setFilteredList(newList);
        }
    , [searchCriteria]);
    
    function displaySearchBar() {
        return (
            <div>
                <SearchBar
                    key="SearchBar"
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

        return patternList && filteredList.map((singlePattern) => {
            
            return (
                <div> 
                    <li>
                        <Cards  key={singlePattern.PATTERN_ID}
                                handleToggle={handleToggle}
                                PATTERN_ID={singlePattern.PATTERN_ID}
                                PATTERN_IMG={singlePattern.PATTERN_IMG}
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
                    key="form"
                    fetchPatterns={fetchPatterns}
                    inputValues={inputValues}
                    setInputValues={setInputValues}
                    img={img}
                    setImg={setImg}
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