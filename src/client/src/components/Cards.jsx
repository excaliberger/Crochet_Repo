
function Cards({ PATTERN_ID, PATTERN_IMG, PATTERN_TITLE, PATTERN_LINK, handleToggle }) {

    function displayCards() {
        console.log("displayCards works")
        console.log("pattern id", PATTERN_ID, <br/>,
                    "pattern image", PATTERN_IMG, <br/>,
                    "pattern title", PATTERN_TITLE, <br/>,
                    "pattern link", PATTERN_LINK
                    )
        
        return (
            <div 
                className="card border border-dark container" id={PATTERN_ID}
                // onClick={handleToggle}
                >
                {/* <div className="row image-container">{PATTERN_IMG}</div> */}
                <div className="row image-container">
                    <img src={PATTERN_IMG}/>
                </div>
                <div>
                    <div className="row"><h1>{PATTERN_TITLE}</h1></div>
                    <div className="row"><h2><a href={PATTERN_LINK} target="blank">{PATTERN_LINK}</a></h2></div>
                </div>
                {/* <div>
                    <button onClick={handleToggle}>Display Pattern</button>
                </div> */}
                <div className="row">
                    <input type="checkbox"></input>
                </div>
            </div>)
        };

    return (
        <ul>
            {displayCards()}
        </ul>
    );

    }

export default Cards;