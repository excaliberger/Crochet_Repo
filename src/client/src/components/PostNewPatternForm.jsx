import { update } from "lodash";

function PostNewPatternForm ({ fetchPatterns, inputValues, setInputValues }) {

    const title = inputValues[0];
    const link = inputValues[1]

    function updateApi () {
        fetch(
            'http://localhost:8080/api',
            { mode: "cors", method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }, body: JSON.stringify({
                PATTERN_TITLE: title,
                PATTERN_LINK: link
              })}
        )
        .then ((res) =>  {
            let temp = res.json();
            return temp;
        })
        .then ((res) => {
            // console.log("res", res);
            if (res["message"]) {
                fetchPatterns();
            }
        })
        .catch ((err) => {console.error(err)});                        
    }

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
                        let newInputValues = inputValues;
                        newInputValues[0] = e.target.value; 
                        setInputValues([...newInputValues])
                    }}
                    >
                </input>
                <input
                    name="text"
                    id="link"
                    placeholder='Pattern URL'
                    onChange={ (e) => {
                        let newInputValues = inputValues;
                        newInputValues[1] = e.target.value; 
                        setInputValues([...newInputValues])
                    }}
                    >
                </input>
                    <input type="Submit"></input>
            </form>
        </div>
    )
}

export default PostNewPatternForm;