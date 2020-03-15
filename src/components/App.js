import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Gallery from "react-photo-gallery"

const App = () => {
  const [images, setImages] = useState([{ src: null, height: null, width: null }])
  useEffect(() => {
    const getImages = async () => {
      const { data } = await axios('/images')
      setImages(data)
    } 
    getImages()
  }, [])

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

  return (
    <div>
      <div className="nav">
        <div className="nav-logo">SIMONANDREW</div>
      </div>

      <Gallery 
        photos={images} 
        targetRowHeight={500} 
        margin={0}
        onClick={({target}) => openModal(target)}
      />

      {modelIsOpen && 
        <div className="modal">
          <div className="modal-content">
            <img className="image" src={modalImageSrc}></img>
            <button>Purchase</button>
          </div>
        </div>
      }
    </div>
  )
}

export default App