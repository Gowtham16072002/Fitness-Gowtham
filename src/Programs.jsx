import React from 'react'
import Program from './Program'
import Program2 from './Program2'
import NavBar from './NavBar'
import Footer from './Footer'
import FooterAbove from './FooterAbove'

function Programs() {
  return (
    <div>
        <NavBar/>
        <Program/>
        <Program2/>
        <FooterAbove/>
        <Footer/>
    </div>
  )
}

export default Programs