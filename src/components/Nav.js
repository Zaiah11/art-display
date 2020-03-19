import React from 'react'

const Nav = ({ setView }) => (
  <div className="nav">
    <div className="nav-words">
      <span className="nav-logo">SIMONANDREW</span>
      <span className="nav-title">Art</span>
    </div>
    <div>
      <button className="nav-button" onClick={() => setView('ARTWORK')}>artwork</button>
      <button className="nav-button" onClick={() => setView('ABOUT')}>about the artist</button>
    </div>
  </div>
)


export default Nav