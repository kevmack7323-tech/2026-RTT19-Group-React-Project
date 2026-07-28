import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav"


export default function Home(){
    return(
        <>
        <Nav/>
        <h1><b>Find Your Favorite Movies</b></h1>
        <SearchBar setItems={setItems}/>
        <ItemList/>
        
        </>
    )
}