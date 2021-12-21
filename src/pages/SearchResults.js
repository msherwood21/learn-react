import logo from "../logo.svg";
import "../App.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchResults() {
  const navigate = useNavigate();
  const raceRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    navigate("/view/" + raceRef.current.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={submitHandler}>
          <label>Race Name</label>
          <input type="text" required ref={raceRef} />
          <button>Search Results</button>
        </form>
      </header>
    </div>
  );
}

export default SearchResults;
