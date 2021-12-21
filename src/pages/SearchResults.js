import logo from "../logo.svg";
import "../App.css";
import classes from "./SearchResult.module.css";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RaceResultsContext from "../store/RaceResultsContext";

function SearchResults() {
  const context = useContext(RaceResultsContext);
  const navigate = useNavigate();
  const raceRef = useRef();
  const [isValid, setIsValid] = useState(true);

  function submitHandler(event) {
    let raceId = -1;

    event.preventDefault();

    for (const race in context.races) {
      if (context.races[race].name === raceRef.current.value) {
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
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={submitHandler}>
          <div>
            <label>Race Name</label>
            <input type="text" required ref={raceRef} />
            <button>Search Results</button>
          </div>
          <div>
            {!isValid && <label className={classes.badInput}>Race not found in database!</label>}
          </div>
        </form>
      </header>
    </div>
  );
}

export default SearchResults;
