import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        <Link to="/create">Create Results</Link>
        <Link to="/view">View Results</Link>
      </header>
    </div>
  );
}

export default Home;
