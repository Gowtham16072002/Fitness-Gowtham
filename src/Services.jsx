import React from 'react'
import './Styles/Services.css'
import Footer from './Footer'
import FooterAbove from './Footerabove'
import NavBar from './NavBar'
import ServiceDetails from './ServiceDetails'
import { useNavigate } from 'react-router-dom'

function Services() {

    const navigate = useNavigate();
    return (
        <div>
            <NavBar />


            <section className='services'>

                <div className='service-header'>
                    <h2>Our Services</h2>
                </div>

                <div className='main-div'>
                    <div className='left-div'>
                        <div className='dL1 left'></div>
                        <div className='dL2 left'><h6>Elevate</h6></div>
                        <div className='dL3 left'><h6>Unstoppable</h6></div>
                    </div>
                    <div className='center-div'>
                        <div className='dC1'>
                            <p>
                                Comprehensive fitness and wellness services
                                designed <br />to support you at every stage <br /> of your
                                journey.
                            </p>
                        </div>
                        <div className='dC2'></div>
                        <div className='dC3'></div>
                    </div>
                    <div className='right-div'>
                        <div className='dR1 right'><h6>Energize</h6></div>
                        <div className='dR2 right'><h6>Stronger</h6></div>
                        <div className='dR3 right'></div>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={()=>{navigate("/contact")}} className="btn primary serviceBtn"><b>Get started</b></button>

                </div>
            </section>

            <ServiceDetails/>
            <FooterAbove />
            <Footer />
        </div>
    )
}

export default Services