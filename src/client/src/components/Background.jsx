import { useState, useEffect, /* useRef */ } from 'react';
import Cards from './Cards.jsx';
import SearchBar from './SearchBar.jsx';
import filterPatternsByName from '../helpers.js'
import PostNewPatternForm from './PostNewPatternForm.jsx'
// import PatternDisplayModal from './PatternDisplayModal.jsx';

function Background({ list, fetchPatterns }) {

    // let [selectedPattern, setSelectedPattern] = useState({});
    let [filteredList, setFilteredList] = useState([]);
    let [searchCriteria, setSearchCriteria] = useState(["",""]);
    let [inputValues, setInputValues] = useState(["",""]);
    let [img, setImg] = useState("");
    let [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((current) => !current);
    }

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

    let displayedList = (Object.keys(filteredList).length === 0) ? patternList : filteredList;

    console.log("filtered list", Object.keys(filteredList).length)

    return displayedList && displayedList.map((singlePattern) => {

        console.log("singlePattern", singlePattern)
        console.log("filteredList", filteredList)
        
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
            <div className='pinboard'>
                {/* <div className='masonry-grid'>
                    <div className='masonry-grid__item'>{renderList(list)}</div>
                </div> */}
                {renderList(list)}
            </div>
       </div>
    )
}

export default Background;