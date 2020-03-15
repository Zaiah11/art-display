import React from 'react'

const Image = ({imageSrc}) => {
  return (
    <div className="image" style={{ backgroundImage: `url(${imageSrc})`}}>
      <button></button>
    </div>
  )
}

export default Image