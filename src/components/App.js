import React, { useEffect, useState } from 'react'
import Artwork from './Artwork'
import Nav from './Nav'
import About from './About'

const App = () => {
  const [view, setView] = useState('ARTWORK')

  return (
    <div>
      <Nav setView={setView}/>
      {view === 'ARTWORK' && <Artwork />}
      {view === 'ABOUT' && <About />}
    </div>
  )
}

export default App