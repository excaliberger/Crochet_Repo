function PostNewPatternForm ({ fetchPatterns, inputValues, setInputValues, img, setImg }) {

    // let titleImg = inputValues[0];
    let title = inputValues[0];
    let link = inputValues[1];
    // let author = inputValues[3];

    


    function updateApi() {
        fetch(
            'http://localhost:8080/api',
            { mode: "cors", method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({
                PATTERN_TITLE: title,
                PATTERN_LINK: link,
                PATTERN_IMG: titleImg,
                // PATTERN_AUTHOR: author
              })}
        )
        .then ((res) =>  {
            let temp = res.json();
            return temp;
        })
        .then (() => {
            fetchPatterns();
        })
        .catch ((err) => {console.error(err)});                        
    };

    return (
        <div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    updateApi();
                }}
            >                
                <input
                    name="text"
                    id="title"
                    placeholder='Pattern Name'
                    onChange={ (e) => {
                        inputValues[0] = e.target.value; 
                        setInputValues([...inputValues])
                    }}
                    >
                </input>
                <input
                    name="text"
                    id="link"
                    placeholder='Pattern URL'
                    onChange={ (e) => {
                        inputValues[1] = e.target.value; 
                        setInputValues([...inputValues])
                    }}
                    >
                </input>
                    <input type="Submit"></input>
            </form>
        </div>
    )
}

export default PostNewPatternForm;