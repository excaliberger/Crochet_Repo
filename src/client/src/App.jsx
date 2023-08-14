import { useState, useEffect } from "react";
import Background from "./components/Background.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {

  let [list, setList] = useState([]);

  useEffect(() => {
    fetchPatterns()
  }, []);

  const fetchPatterns = () => {
    fetch(
      "http://localhost:8080/api/",
      { mode: "cors" }
      )
      .then((res) => res.json())
      .then((patterns) => {
        // console.log("patterns", patterns)
        setList(patterns)})
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
        {list ? (
        <Background
          fetchPatterns={fetchPatterns}
          list={list}
          setList={setList}/>
        ) : <></>}
      </div>
    </div>
  );
}

export default App;
