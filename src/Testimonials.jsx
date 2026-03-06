import React from 'react'
import './Styles/Testimonials.css'
import feedback1 from './assets/feedback1.jpg'
import feedback2 from './assets/feedback2.jpg'
import feedback3 from './assets/feedback3.jpg'
import feedback4 from './assets/feedback4.jpg'
import feedback5 from './assets/feedback5.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// npm install react-slick slick-carousel

import Slider from "react-slick";

function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <section className="testimonials">

        <h2>What Our Clients Say</h2>

        <Slider {...settings}>

          <div className="testimonial-card">
            <img src={feedback4} />
            <h3>Rahul Sharma</h3>
            <p>Lost 10kg in 3 months! Amazing trainers.</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>

          <div className="testimonial-card">
            <img src={feedback5} />
            <h3>Priya Patel</h3>
            <p>Best fitness program I ever joined.</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>

          <div className="testimonial-card">
            <img src={feedback1} />
            <h3>Arjun Mehta</h3>
            <p>Great transformation results!</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>

          <div className="testimonial-card">
            <img src={feedback2} />
            <h3>Sneha Kapoor</h3>
            <p>Professional coaching and diet plan.</p>
            <div className="stars">
              ★★★★★
            </div>
          </div>

        </Slider>

      </section>
    </div>
  )
}

export default Testimonials
