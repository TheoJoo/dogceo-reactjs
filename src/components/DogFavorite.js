import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa"

const DogFavorite = ({ dog, toggleFav }) => {

    function handleFavClick(){
        toggleFav(dog.breed)
    }
    
    return(
        <label>
            {dog.favorite ? <FaHeart className="heart-icon-checked"/> : <FaRegHeart className="heart-icon"/>}
            <input className="tableTitle-checkbox-input" type="checkbox" checked={dog.favorite} onChange={handleFavClick} />
        </label>
    )
}

export default DogFavorite