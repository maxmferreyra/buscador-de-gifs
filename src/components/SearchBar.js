import { useState, useEffect } from "react";

function SearchBar({ setSearchResults }) {
  const [inputValue, setInputValue] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchButton = () => {
    const giphosResults = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=SmMxIDF7Y4PvbJVxP1M5eobyr0v24ddM&q=${inputValue}&limit=15&offset=0&rating=g&lang=en
      `
    );
    giphosResults
      .then((response) => response.json())
      .then((responseJson) => setSearchResults(responseJson.data));

    setInputValue("");
  };

  useEffect(() => {
    const resultAutocomplete = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=SmMxIDF7Y4PvbJVxP1M5eobyr0v24ddM&q=${inputValue}&limit=5`
    );
    resultAutocomplete
      .then((response) => response.json())
      .then((responseJson) => setAutoComplete(responseJson.data));
  }, [inputValue]);

  return (
    <>
      <div className="container-info">
        <h1>
          ¡Inspírate y busca los mejores <span>GIFS!</span>
        </h1>
        <img src="./images/ilustra_header.svg" alt="imagen gifs" />
        <div className="search-user">
          <input
            placeholder="Buscar Gif"
            type="text"
            className="input-search"
            value={inputValue}
            onChange={handleInputValue}
          />
          <button className="search-button" onClick={handleSearchButton}>
            <img src="./images/icon-search.svg" alt="logo de busqueda" />
          </button>
        </div>
        <div className="containerList">
          {autoComplete.map((inputValue, i) => {
            return (
              <ul>
                <li key={i}>{inputValue.name}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
