import React from 'react'
import './Styles/TrainerSection.css'
import Trainer1 from './assets/Trainer1.avif'
import Trainer2 from './assets/Trainer2.avif'
import Trainer3 from './assets/Trainer3.avif'

function TrainerSection() {
    return (
        <div>
            <section className="trainers">

                <h2 className="trainer-title">Our Trainers</h2>

                <div className="trainer-container">

                    <div className="trainer">
                        <img src={Trainer1} alt="Trainer 1" />
                        <h3>Emilia clarke</h3>
                        <p>Strength & Conditioning Specialist</p>
                        <p>NASM Certified</p>
                        <p>8+ Years Experience</p>
                    </div>

                    <div className="trainer">
                        <img src={Trainer2} alt="Trainer 2" />
                        <h3>Michael Lee</h3>
                        <p>Personal Fitness Trainer</p>
                        <p>NASM Certified</p>
                        <p>8+ Years Experience</p>
                    </div>

                    <div className="trainer">
                        <img src={Trainer3} alt="Trainer 3" />
                        <h3>Jennifer</h3>
                        <p>Weight Loss Expert</p>
                        <p>NASM Certified</p>
                        <p>8+ Years Experience</p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default TrainerSection