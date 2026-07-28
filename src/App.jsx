import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

import { ThemeContext } from "./context";
import { getItems } from "../api";

import "./styles/App.css";

export default function App() {
  const [items, setItems] = useState([]);//Stores a list of items (starts empty)
  const [favoriteItems, setFavoriteItems] = useState([]);//Stores favorited items (starts empty)
  const [theme, setTheme] = useState("light");//Stores current theme(light or dark)

  useEffect(() => {
    async function loadInitialItems() {
      try {
        const initialItems = await getItems("Shrek");
        setItems(initialItems);
      } catch (error) {
        console.error("Failed to load initial items:", error);
      }
    }
    //This should run once when the component loads because of the empty bracket []
    //It should fetch a movie from the API, store the results in items and if not then log error
    loadInitialItems();
  }, []);

  //Favorites Fuction: should add items to the favorites list and avoid duplicates
  function addFavorite(item) {//take item as parameter
    setFavoriteItems((prevFavorites) => {
      const alreadySaved = prevFavorites.find(
        (fav) => fav.imdbID === item.imdbID//it uses the state setter function pattern with prevFavorites
      );
      if (alreadySaved) return prevFavorites;
      return [...prevFavorites, item];//this checks if this item is already in favorites by comparing imdbID values .find()
    });//If the item is already saved, return the favorites list unchanged 
  }



}