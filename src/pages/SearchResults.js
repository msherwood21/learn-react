import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function SearchResults() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Search Results</p>
        <Link to="/view/1" >View Results</Link>
      </header>
    </div>
  );
}

export default SearchResults;
