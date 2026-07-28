// SearchBar.jsx
import { useState } from "react";
import { getItems } from "../api.js";

function SearchBar({ setItems }) {
  const [query, setQuery] = useState("");
  async function handleSearch() {
    if (!query.trim()) return;
    const results = await getItems(query);
    setItems(results);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

const results = await getItems(query);
console.log("search results:", results);   // temporary
setItems(results);