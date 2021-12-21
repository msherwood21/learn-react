import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        <Link to="/search">Search Results</Link>
        <Link to="/create">Create Results</Link>
      </main>
    </div>
  );
}

export default Home;
