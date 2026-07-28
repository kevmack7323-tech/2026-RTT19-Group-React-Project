function Item({ movie }) {
  return (
    <div>
      <img 
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