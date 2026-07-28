import ItemList from "../components/ItemList";

function Favorites({ favoriteItems }) {
  return (
    <div>
      <h1>Favorite Movies</h1>

      <ItemList items={favoriteItems} />
    </div>
  );
}

export default Favorites;