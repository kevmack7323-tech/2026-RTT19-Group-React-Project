const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getItems(query) {
  const searchTerm = query || "tales from the crypt";

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "False") {
    console.warn("OMDb search error:", data.Error);
    return [];
  }

  return data.Search; 
}

// Full details for ONE movie by its IMDb ID
export async function getItemDetails(id) {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "False") {
    console.warn("OMDb detail error:", data.Error);
    return null;
  }

  return data; // Returns full movie profile
}
