import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>View Results</p>
        <Link to="/">Home</Link>
        <Link to="/create">Create Results</Link>
      </header>
    </div>
  );
}

export default Home;
