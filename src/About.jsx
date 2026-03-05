import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import MissionVision from './MissionVision'
import AboutTop from './AboutTop'
import CommunitySection from './CommunitySection'
import TrainerSection from './TrainerSection'
import Testimonials from './Testimonials'


function About() {
  return (
      <div>
          <NavBar/>
          <AboutTop/>
          <MissionVision/>
          <TrainerSection/>
          {/* <Testimonials/> */}
          <CommunitySection/>
          <Footer/>
      </div>
  )
}

export default About