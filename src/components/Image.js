import React from 'react'

const Image = ({imageSrc}) => {
  return (
    <div className="image" style={{ backgroundImage: `url(${imageSrc})`}}>
      <button>buy</button>
    </div>
  )
}

export default Image