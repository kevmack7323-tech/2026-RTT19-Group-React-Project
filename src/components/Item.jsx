function Item({ movie }) {
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={movie.Poster}
        alt={movie.Title}
      />

      <h2>{movie.Title}</h2>

      <p>Release Year: {movie.Year}</p>

      <p>Type: {movie.Type}</p>
    </div>
  );
}

export default Item;