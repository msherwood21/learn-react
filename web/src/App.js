import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import CreateResults from "./pages/CreateResults";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ViewResults from "./pages/ViewResults";
import { RaceResultsContextProvider } from "./store/RaceResultsContext";

function App() {
  return (
    <RaceResultsContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateResults />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/view/:id" element={<ViewResults />} />
        </Route>
      </Routes>
    </RaceResultsContextProvider>
  );
}

export default App;
