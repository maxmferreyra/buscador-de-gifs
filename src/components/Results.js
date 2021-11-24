import Error from "./Error";

const Results = (props) => {
  return (
    <div className="results">
      {props.searchResults.length === 0 && props.error === false ? (
        <h3>¡Ey, realiza tu búsqueda!</h3>
      ) : null}

      {props.loading ? (
        <div className="loading">
          {" "}
          <img src="../public/images/three-dots.svg" alt="loading" />
        </div>
      ) : null}

      <div className="container-gifs">
        {props.searchResults.map((gif, i) => {
          return (
            <a href={gif.url} target="blanck">
              <img src={gif.images.downsized.url} key={i} alt="gif animado" />
            </a>
          );
        })}
      </div>
      {props.error ? <Error /> : ""}
    </div>
  );
};
export default Results;