import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <main>
        <h1>Home</h1>
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
