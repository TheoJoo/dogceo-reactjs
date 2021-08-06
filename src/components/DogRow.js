import React, { useState } from 'react'
import DogName from './DogName'
import DogFavorite from './DogFavorite'

const DogRow = ({ dog, toggleFav, modalFetch}) => {

    const [visited, setVisited] = useState('dogsList-row-dogName')

    function handleModal(){
        let newButtonClassName = visited+" visited"
        setVisited(newButtonClassName)
        modalFetch(dog.breed)
    }

    return(
        <div className="dogsList-row" key={dog.breed}>
            <button className={visited} onClick={handleModal} ><DogName dog={dog} /></button>
            <DogFavorite dog={dog} toggleFav={toggleFav}/>
        </div>
    )
}

export default DogRow