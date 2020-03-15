import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Image from './Image'

const App = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    const { data } = await axios('/images')
    setImages(data)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div>
      <div className="nav">
        <div className="nav-logo">SIMONANDREW</div>
      </div>
      <div className="images">
        {images.map((imageSrc, i) => (
          <Image key={i} imageSrc={imageSrc}/>
        ))}
      </div>
    </div>
  )
}

export default App