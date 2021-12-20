import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateResults from "./pages/CreateResults";
import ViewResults from "./pages/ViewResults";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/create" element={<CreateResults />} />
        <Route path="/view" element={<ViewResults />} />
      </Routes>
    </div>
  );
}

export default App;
