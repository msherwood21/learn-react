import logo from "../logo.svg";
import "../App.css";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>View Results ({params.id})</p>
      </header>
    </div>
  );
}

export default Home;
