function Item({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
      />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <Link to={`/item/${movie.imdbID}`}>
        View Details
      </Link>
    </div>
  );
}

export default Item;