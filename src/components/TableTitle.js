import React, {useState} from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa"

const TableTitle = ({favList, dogs, handleFavListClick}) => {

    const [checked, setChecked] = useState(false)

    function handleFavListClickOnChange(){
        setChecked(!checked)
        handleFavListClick(favList)
    }

    return(
        <div className="tableTitle"> 
            <div className="tableTitle-h1">
                <h1>Dogs List</h1>
            </div>
            <div className="tableTitle-favorite-wrapper">
                <label className="checkmark" htmlFor="check-Favorites">
                    <p className="tableTitle-checkbox-label">Favorites</p>
                    {checked ? <FaHeart className="heart-icon-checked"/> : <FaRegHeart className="heart-icon"/>}
                </label>
                <input id="check-Favorites" className="tableTitle-checkbox-input" type="checkbox" checked={favList} onChange={handleFavListClickOnChange} />
            </div>
        </div>
    )
}

export default TableTitle
