import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
      </header>
      <main>
        <p>
          <Link to="/search">Search Results</Link>
        </p>
        <p>
          <Link to="/create">Create Results</Link>
        </p>
      </main>
    </div>
  );
}

export default Home;
