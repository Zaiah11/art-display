import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Gallery from "react-photo-gallery"

const Artwork = () => {
  const [modalImageSrc, setModalImageSrc] = useState({ src: '', store: '' })
  const [modelIsOpen, setModalIsOpen] = useState(false)
  const openModal = ({ src, attributes }) => {
    const { value } = attributes.store
    setModalImageSrc({ src, store: value })
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalImageSrc({ src: '', store: '' })
    setModalIsOpen(false)
  }

  const [loading, setLoading] = useState(false)
  const redirectToStore = (url) => {
    setLoading(true)
    window.location.href = url
  }

  const [images, setImages] = useState([{ src: '', height: 0, width: 0, store: '' }])
  useEffect(() => {
    document.addEventListener("keydown", ({ key }) => {
      if (key === 'Escape') closeModal()
    })

    const getImages = async () => {
      const { data } = await axios('/artwork')
      setImages(data)
    }
    getImages()
  }, [])

  return (
    loading ? <div></div> :

      <div>
        <Gallery
          photos={images}
          targetRowHeight={500}
          margin={10}
          onClick={({ target }) => openModal(target)}
        />

        {modelIsOpen &&
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <div className="row">
                <span className="close-button">x</span>
              </div>
              <img className="image" src={modalImageSrc.src} />
              <button className="button" onClick={() => redirectToStore(modalImageSrc.store)}>Shop</button>
            </div>
          </div>
        }
      </div>
  )
}

export default Artwork