import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";


function Main({ items }) {
  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar />
      <ItemList items={items} />
    </div>
  );
}

export default Main;