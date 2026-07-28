import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";

import { BrowserRouter } from "react-router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);