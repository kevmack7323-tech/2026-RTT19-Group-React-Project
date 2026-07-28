import Item from "./Item";

function ItemList({ movies = [] }) {
  // Show a message if there are no movies
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Item
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default ItemList;