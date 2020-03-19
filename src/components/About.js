import React, {useState, useEffect} from 'react'
import axios from 'axios'

const About = () => {
  const [bio, setBio] = useState({
    bio: '',
    photo: ''
  })

  useEffect(() => {
      axios('/bio')
        .then(({ data }) => setBio(bio))
  })

  return (
    <div>About</div>
  )
}

export default About