import Item from "./Item";

function ItemList({ movies }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
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