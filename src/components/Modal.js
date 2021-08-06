import React from 'react'
import ReactDom from 'react-dom'
import DogName from './DogName'
import DogFavorite from './DogFavorite'
import exit from '../img/exit.svg'
import pawprint from '../img/pawprint.svg'

const MODAL_STYLES = {
    position: 'fixed',
    inset: '5% 2.5em',

    transform: 'translate(-50%, - 50%)',
    backgroundColor: '#f3f6fb',
    borderRadius: '1em',
    padding: '50px',

    textAlign: 'center',

    zIndex: 1000,
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const EXIT_STYLES = {
    position: 'absolute',
    top: '20px',
    width: '50px',
    right: '20px'
}

export default function Modal({ isOpen, onClose, dogModal, toggleFav }) {

    if (!isOpen) return null

    const dogImages = []
    const dogModalTemp = [...dogModal]

    for(let i = 2; i < dogModalTemp.length; i++){
        dogImages.push(<div key={dogModalTemp[0].subBreed[i-2]} className="subBreed">
            <p className="subBreed-dogName">{dogModalTemp[0].subBreed[i-2]}</p>
            <img className="subBreed-image" src={dogModalTemp[i]} alt="randomSubBreed"/>
        </div>)
    }

    return ReactDom.createPortal(
        <React.Fragment>
            <div style={OVERLAY_STYLES} onClick={onClose} />
            <div style={MODAL_STYLES} className="mobile">
                <div className="header-Modal">
                    <DogName nameClass="modal-dogName" dog={dogModalTemp[0]} />
                    <DogFavorite nameClass="modal-favorite-checkmark" dog={dogModalTemp[0]} toggleFav={toggleFav} /> 
                </div>
                <div className="modal-container-images">
                    <img className="img-Modal" src={dogModalTemp[1]} alt="randomBreed" />
                    <p className="sub-title-Modal">Sub-breeds :</p>
                    {dogModalTemp.length > 2 && <div className="tableauImages-Modal">{dogImages}</div>}
                    {dogModalTemp.length < 3 && <div className="noSubBreeds-Modal">
                        <img className="pawprint-end-Modal" src={pawprint} alt="pawprint"/>
                        <p className="noSubbreeds-text-Modal">No sub-breeds</p>
                        <img className="pawprint-start-Modal" src={pawprint} alt="pawprint"/>
                    </div>}
                </div>
                <img style={EXIT_STYLES} src={exit} onClick={onClose} alt="Exit" />
            </div>
        </React.Fragment>,
        document.getElementById('portal')
    )
}

// TODO : - split modal to make components
//        - solve create import .css 