import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function CreateResults() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Create Results</p>
        <Link to="/">Home</Link>
        <Link to="/view">View Results</Link>
      </header>
    </div>
  );
}

export default CreateResults;
