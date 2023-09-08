
function Cards({ ID, PATTERN_TITLE, PATTERN_LINK, handleToggle }) {

    // const targetRef = useRef();
    // const [dimensions, setDimensions] = useState({width: 0, height: 0});
    
    // useLayoutEffect(() => {
    //     if (targetRef.current) {
    //         setDimensions([
    //             dimensions.width = targetRef.current.offsetWidth,
    //             dimensions.height = targetRef.current.offsetHeight
    //         ]);
    //     }});

    function displayCards() {

        // console.log('height', `${dimensions.height}`)
        // console.log('width', `${dimensions.width}`)
        
        return (
            <div 
                className="card border border-dark container"
                // onClick={handleToggle}
                >
                <div className="row image-container"></div>
                <div>
                    <div className="row"><h1>{PATTERN_TITLE}</h1></div>
                    <div className="row"><h2>{PATTERN_LINK}</h2></div>
                </div>
                <div>
                    <button onClick={handleToggle}>Display Pattern</button>
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