import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getItemDetails } from "../api";
import { ItemList } from "../components/ItemList";
import { Item } from "../components/Item"

export default function ItemDetails(){
    
    let {id}= useParams();
   
    const [ movie, setMovie ] = useState({})

    useEffect(()=> {
        details()
    }, [])
    
    async function details(){
      const result = await getItemDetails(id)
        console.log(result)
        setMovie(result);
    }

    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    )
}