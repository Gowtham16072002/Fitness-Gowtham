import React from 'react'
import './Styles/MissionVision.css'
import Banner from './Banner'


function MissionVision() {
    return (
        <>
            <Banner />
    
            <section className='mission-section'>
                {/* floating icons */}
                {/* <i className="fa-solid fa-dumbbell float-icon left"></i>
                <i className="fa-solid fa-person-running float-icon top"></i> */}
                <div className='cards'>
                    {/* Mission card */}
                    <div className='card'>
                        <i className="fa-solid fa-bullseye card-icon"></i>
                        <h2>
                            Our Mission
                        </h2>
                        <p>
                            To empower people through fitness,wellness,and education so they can live healthier,more confident lives.
                        </p>
                    </div>

                    {/* Vision card */}

                    <div className='card'>
                        <i className="fa-solid fa-eye card-icon"></i>
                        <h2>
                            Our Vision
                        </h2>
                        <p>
                            To create a supportive community where fitness and wellness are sustainable,enjoyable, and par of everyday life.
                        </p>
                    </div>
                </div>
            </section>
        </>
  )
}

export default MissionVision