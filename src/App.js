import React from "react";
import {useState, useEffect} from "react";
import getData from "./fetchData";


function App() {
  const [count, setCounter] = useState(0);
  
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    //const fetchMovieTitles = getData();
   // setMovieTitles(fetchMovieTitles);
  }, [])

  const handleClick = () => {
    getData().then(res => {
      const fetchMovieTitles = res;
      setMovieTitles(fetchMovieTitles);
  });

  }

  return (
    <div className="App">
      <h1 className="heading">Star Wars Films</h1>
      <p>{count}</p>
      <button className="button" onClick={() => {setCounter(count+1);} }>Increment Counter</button>
      <button className="button" onClick={handleClick}>Fetch Data</button>
      <div className="showData">
        <ul>
          {
            movieTitles.map(title => (<li key={title}>
              {title}
            </li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
