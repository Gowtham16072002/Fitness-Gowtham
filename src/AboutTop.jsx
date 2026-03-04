import React from "react";
import "./Styles/AboutTop.css";
import './App.css'

import img1 from "./assets/about1.jpg";
import img2 from "./assets/about2.jpg"
import img3 from "./assets/about3.jpg"
import img4 from "./assets/about4.jpg"
import { useNavigate } from "react-router-dom";

function AboutTop (){

  const navigate = useNavigate();

  return (
    <section className="about">
      <h2>About us</h2>

      <p className="about-text">
        We are a fitness and wellness brand dedicated to helping individuals
        build healthy habits, improve physical strength, and achieve
        long-term well-being.
      </p>

      <div className="about-gallery">
        <div className="about-img">
          <img src={img1} alt="gym" />
        </div>

        <div className="about-img">
          <img src={img2} alt="workout" />
        </div>

        <div className="about-img">
          <img src={img3} alt="training" />
        </div>

        <div className="about-img">
          <img src={img4} alt="fitness" />
        </div>
      </div>

      <button onClick={()=>{navigate("/contact")}} className="about-btn ">Get Started</button>
    </section>
  );
};

export default AboutTop;
