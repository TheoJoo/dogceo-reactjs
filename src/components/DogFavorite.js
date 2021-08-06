import React, {useState} from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa"

const DogFavorite = ({ dog, toggleFav }) => {

    const [favChecked, setFavChecked] = useState(false)

    function handleFavClick(){
        setFavChecked(!favChecked)
        toggleFav(dog.breed)
    }
    
    return(
        <label>
            {favChecked ? <FaHeart className="heart-icon-checked"/> : <FaRegHeart className="heart-icon"/>}
            <input className="tableTitle-checkbox-input" type="checkbox" checked={dog.favorite} onChange={handleFavClick} />
        </label>
    )
}

export default DogFavorite