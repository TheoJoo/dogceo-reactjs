import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import DogsList from './components/DogsList';
import TableTitle from './components/TableTitle';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './App.css';

const App = () =>{

  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favList, setFavList] = useState(false);
  const[isOpen, setIsOpen] = useState(false);
  const [dogModal, setDogModal] = useState([])
  const [modalLoading, setModalLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await axios('https://dog.ceo/api/breeds/list/all')
      let res = result.data.message
      let tempArray = []
      // Edit the object to allow filterage by favorite
      Object.keys(res).forEach(key => {
          tempArray.push( {
          'breed': key, 
          'subBreed': res[key],
          'favorite' : false
        })
      })
      setDogs(tempArray)
      setIsLoading(false)
    }
    console.log('Hi')
    fetchDogs()
  }, [])

  // Toggle Favorites selection, call in component DogRow
  function toggleFav(breed) {
    const tempDogs = [...dogs]
    const tempDog = tempDogs.find(tempDog => tempDog.breed === breed)
    tempDog.favorite = !tempDog.favorite
    setDogs(tempDogs)
  }

  // Toggle Favorties List 
  function handleFavListClick() {
    setFavList(!favList)
  }

  // fetch Data for Modal
  async function modalFetch(breed) {

    const requestGroup = []
    const tempDogs = [...dogs]
    const tempDogBreed = tempDogs.find(tempDogBreed => tempDogBreed.breed === breed)
    const urlTemp = [tempDogBreed] 

    const fetchBreedUrl = async () => {
      let resultatImage = await axios(`https://dog.ceo/api/breed/${breed}/images/random`)
      urlTemp.push(resultatImage.data.message)
      if(tempDogBreed.subBreed.length === 0){
        return urlTemp
      }
      await tempDogBreed.subBreed.map((subBreedy) => {
        let promiseSubBreedUrl = axios(`https://dog.ceo/api/breed/${breed}/${subBreedy}/images/random`)
        return requestGroup.push(promiseSubBreedUrl)
      })
      await Promise.all(requestGroup).then(function (results){
        results.forEach((resultat)=> {
          urlTemp.push(resultat.data.message)
        })
      })
      return urlTemp
    }
    const tempDogModal = await fetchBreedUrl()
    setDogModal(tempDogModal)
    setIsOpen(true) 
    setModalLoading(false)
  }

  function closeModal(){
    setIsOpen(false) 
    setModalLoading(true)
  }

  return (
    <div className="body-container">
      <Header />
      <TableTitle favList={favList} dogs={dogs} handleFavListClick={handleFavListClick}/>
      <Modal isOpen={isOpen} modalLoading={modalLoading} onClose={closeModal} dogModal={dogModal} toggleFav={toggleFav}></Modal>
      <DogsList isLoading={isLoading} dogs={dogs} toggleFav={toggleFav} favList={favList} modalFetch={modalFetch}/>
      <Footer />
    </div>
  );
}

export default App;


/*
TO DO : 
- create const LOCAL_STORAGE_KEY = 'favDogs'   
  to keep data even when user refresh the page
- add a useEffect to re-render only when togglefav on raws
- useEffect with function modalFetch to avoid too many requests
- edit JSON from function modalFetch for easier access to breed image
*/