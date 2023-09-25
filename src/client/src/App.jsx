import { useState, useEffect } from "react";
import Background from "./components/Background.jsx";

function App() {

  let [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchPatterns();
  }, []);

  const fetchPatterns = () => {

    // const url = "http://localhost:8080/api/"

    fetch(
      "http://localhost:8080/api/",
      { mode: "cors" }
      )
      .then((res) => res.json())
      .then((patterns) => {
        console.log("patterns", patterns)
        setList(patterns);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
    });
  }

  return (
    <div>
      <div>
        <header>
          <h1>Granny<sup>2</sup></h1>
        </header>
      </div>
      <div>
        {isLoaded ? (
        <Background
          fetchPatterns={fetchPatterns}
          list={list}/>
        ) : <>Loading...</>}
      </div>
    </div>
  );
}

export default App;
