import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Gallery from "react-photo-gallery"

const App = () => {
  const [images, setImages] = useState([{ src: null, height: null, width: null }])
  
  const [modalImageSrc, setModalImageSrc] = useState('')
  const [modelIsOpen, setModalIsOpen] = useState(false)
  
  const openModal = ({src}) => {
    setModalImageSrc(src)
    setModalIsOpen(true)
  }
  
  const closeModal = () => {
    setModalImageSrc('')
    setModalIsOpen(false)
  }
  
  useEffect(() => {
    document.addEventListener("keydown", ({key}) => {
      if (key === 'Escape') closeModal()
    })

    const getImages = async () => {
      const { data } = await axios('/images')
      setImages(data)
    } 
    getImages()
  }, [])
  
  return (
    <div>
      <div className="nav">
        <span className="nav-logo">SIMONANDREW</span>
        <span className="nav-title">Gallery</span>
      </div>

      <Gallery 
        photos={images} 
        targetRowHeight={500} 
        margin={0}
        onClick={({target}) => openModal(target)}
      />

      {modelIsOpen && 
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <div className="row">
              <span className="close-button">x</span>
            </div>
            <img className="image" src={modalImageSrc} />
            <button className="button">Details</button>
          </div>
        </div>
      }
    </div>
  )
}

export default App