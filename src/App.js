import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";


function App() {
  const [isDark, setDark] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDarkmode = () => {
    setDark(!isDark);
  };

  return (
    <>
      <div className={`giphos-container ${isDark ? "dark" : ""}`}>
        <Header handleDarkmode={handleDarkmode} isDark={isDark} />
        <SearchBar 
        setSearchResults={setSearchResults} 
        setLoading={setLoading}
        />
        <Results 
        searchResults={searchResults}
        loading={loading} />
      </div>    
    </>
  );
}

export default App;