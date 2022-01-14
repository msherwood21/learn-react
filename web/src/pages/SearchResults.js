import "../App.css";
import classes from "./SearchResult.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchResults() {
  const navigate = useNavigate();
  const raceRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [races, setRaces] = useState([]);

  const submitHandler = (event) => {
    let raceId = -1;

    event.preventDefault();

    for (const race in races) {
      if (races[race].name === raceRef.current.value) {
        raceId = race;
        break;
      }
    }

    if (raceId !== -1) {
      setIsValid(true);
      navigate("/view/" + raceId.toString());
    } else {
      if (raceId === undefined) {
        console.error("How did we get here?");
      } else {
        setIsValid(false);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/races");
        const json = await response.json();

        setRaces(json);
      } catch (err) {
        console.log(`fetch error: ${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Search Results</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Race Name</label>
            <input type="text" required ref={raceRef} />
            <button>Search</button>
          </div>
          <div>
            {!isValid && <label className={classes.badInput}>Race not found in database!</label>}
          </div>
        </form>
        <h2>Race Results</h2>
        {races.length === 0 && <p>There are no races recorded!</p>}
        {races.length > 0 && (
          <ul>
            {races.map((_, index) => {
              const link = "/view/" + index.toString();
              return (
                <li>
                  <Link to={link}>{races[index].name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}

export default SearchResults;
