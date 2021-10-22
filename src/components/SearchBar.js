import { useState } from "react";

function SearchBar({ setSearchResults }) {
  const [inputValue, setInputValue] = useState("");

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

  const handleInputBlur = () => {
    console.log("estoy en este input");
  };

  return (
    <>
      <div className="container-info">
        <h1>
          ¡Inspírate y busca los mejores <span>GIFS!</span>
        </h1>
        <img src="./images/ilustra_header.svg" alt="imagen gifs" />
        <div className="search-user">
          <input
            placeholder="     Buscar Gif"
            type="text"
            className="input-search"
            value={inputValue}
            onChange={handleInputValue}
            onBlur={handleInputBlur}
          />
          <button className="search-button" onClick={handleSearchButton}>
            <img src="./images/icon-search.svg" alt="logo de busqueda" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
