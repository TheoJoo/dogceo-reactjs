import React from 'react'
import DogRow from './DogRow'
    
const DogTable = ({dogs, toggleFav, favList, modalFetch}) => {
    
    const dogRows = []

    dogs.forEach(dog => {
        if (favList && !dog.favorite) return
            dogRows.push( <DogRow key={dog.breed} dog={dog} toggleFav={toggleFav} modalFetch={modalFetch}/> )
        return dogRows
    }) 

    return (
        <div className="dogsList">
            {dogRows}
        </div>
    )
}

export default DogTable

/* 
TO DO : 
- avoid conflict by finding another way to update the array dogRows
- improve speed by editing only one row without going through the whole list
*/