import React from "react";
import "./Styles/AboutTop.css";
import './App.css'

import img1 from "./assets/about1.jpg";
import img2 from "./assets/about2.jpg"
import img3 from "./assets/about3.jpg"
import img4 from "./assets/about4.jpg"
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// npm install aos

function AboutTop() {

  const navigate = useNavigate();

      useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true
          });
        }, []);
  

  return (
    <section className="about">
      <h2>About us</h2>

      <p className="about-text">
        Helping people achieve strength, flexibility, and confidence
        through gym training, yoga, Zumba dance programs.
      </p>

      <div className="about-gallery">
        <div className="about-img" data-aos="zoom-in">
          <img src={img1} alt="gym" />
        </div>

        <div className="about-img" data-aos="zoom-in">
          <img src={img2} alt="workout" />
        </div>

        <div className="about-img" data-aos="zoom-in">
          <img src={img3} alt="training" />
        </div>

        <div className="about-img" data-aos="zoom-in">
          <img src={img4} alt="fitness" />
        </div>
      </div>

      <button className="about-btn">
          Explore Programs
      </button>

      <button onClick={() => { navigate("/contact") }} className="about-btn">Get Started</button>
      
      <button className="about-btn">
          Join Now
      </button>
    </section>
  );
};

export default AboutTop;
