import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import MissionVision from './MissionVision'
import AboutTop from './AboutTop'


function About() {
  return (
      <div>
          <NavBar/>
          <AboutTop/>
          <MissionVision/>
          <Footer/>
      </div>
  )
}

export default About