import React from 'react'
import DogTable from './DogTable'

const DogsList = ({ isLoading, dogs, toggleFav, favList, modalFetch }) => {
    // Show a loading component, time to get the data from the API
    return isLoading ? <div className="container-table-loader"><h1>Loading ...</h1></div> :
            <DogTable dogs={dogs} toggleFav={toggleFav} favList={favList} modalFetch={modalFetch}/>
}

export default DogsList