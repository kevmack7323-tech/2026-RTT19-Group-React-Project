import Item from "./Item";

function ItemList({ movies }) {
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