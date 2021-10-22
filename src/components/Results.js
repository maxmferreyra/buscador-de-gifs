
const Results = ({ searchResults }) => {
  return (
    <div className="results">
      <h3>Resultado de la búsqueda</h3>
      <div className="container-gifs">
        {searchResults.map((gif, i) => {
          return (
            <img src={gif.images.downsized.url} key={i} alt="gif animado" />
          );
        })}
      </div>
    </div>
  );
};
export default Results;