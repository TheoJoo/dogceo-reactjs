import React from 'react'

const DogName = ({ nameClass, dog }) => {

    return(
        <div className={nameClass}>
            <p>{dog.breed}</p>
        </div>
    )
}

export default DogName