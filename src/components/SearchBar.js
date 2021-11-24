import { useState, useEffect } from "react";

function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const sendRequest = (e) => {
    e.preventDefault();
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAutocompleteItem = (inputValue) => {
    setInputValue(inputValue.name);
    setAutoComplete([]);
  };

  const handleSearchButton = (e) => {
    props.setLoading(true);
    const giphosResults = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=SmMxIDF7Y4PvbJVxP1M5eobyr0v24ddM&q=${inputValue}&limit=15&offset=0&rating=g&lang=en
      `
    );
    giphosResults
      .then((response) => {
        props.setLoading(false);
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        let isError = responseJson.data.length === 0;
        props.setError(isError);
        props.setSearchResults(responseJson.data);
      });

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
        <form onSubmit={sendRequest} className="search-user">
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
        </form>
        <div className="containerList">
          {autoComplete.map((inputValue, i) => {
            return (
              <p
                onClick={() => handleAutocompleteItem(inputValue)}
                className="autocomplete-item"
                key={i}
              >
                {inputValue.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;

