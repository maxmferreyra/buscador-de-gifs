import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [isDark, setDark] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`giphos-container ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setDark={setDark} />
      <SearchBar
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        setLoading={setLoading}
        setError={setError}
        error={error}
      />
      <Results 
      searchResults={searchResults} 
      loading={loading} 
      error={error}

      />
      
    </div>
  );
}

export default App;
