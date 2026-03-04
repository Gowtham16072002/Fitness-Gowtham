import React from 'react'
import './Styles/Program.css'
import mainImage from './assets/programMainImage.png'

function Program() {
  return (
    <>
    <div className="ProgramCoverpage">
      <div className="contextArea">
        <h2 className='contextArea-heading'>Fitness That's <span> Fits Your Life</span></h2>
        <p className='contextArea-para'>Find a program tailored to your goals,lifestyle and long term success</p>
        <button className='btn'> Choose your path</button>
      </div>
      <div className="FloatImage">
        <img src={mainImage} alt="" />
          <button className='energize'>Energize</button>
          <button className='unstoppable'>Unstoppable</button>
      </div>
    </div>
    </>
  )
}

export default Program
