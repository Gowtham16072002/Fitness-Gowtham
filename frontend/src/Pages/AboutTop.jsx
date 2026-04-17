import React from "react";
import "../Styles/AboutTop.css";
import "../App.css";

import img1 from "../assets/about1.jpg";
import img4 from "../assets/about4.jpg";
import YogaSection from "../assets/YogaSection.png";
import ZumbaSection from "../assets/ZumbaSection.png";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
        Helping people achieve strength, flexibility, and confidence through gym
        training, yoga, Zumba dance programs.
      </p>

      <div className="about-gallery" data-aos="zoom-in">
        <div className="about-img">
          <img src={img1} alt="gym" />
          <p>Cardio Zone</p>
        </div>

        <div className="about-img">
          <img src={YogaSection} alt="workout" />
          <p>Yoga Section</p>
        </div>

        <div className="about-img">
          <img src={ZumbaSection} alt="training" />
          <p>Zumba Section</p>
        </div>

        <div className="about-img">
          <img src={img4} alt="fitness" />
          <p>Modern Gym Equipment</p>
        </div>
      </div>

      <button onClick={() => { navigate("/programs") }} className="about-btn">
        Explore Programs
      </button>

      <button onClick={() => { navigate("/contact") }} className="about-btn">Get Started</button>

      <button className="about-btn">
        Join Now
      </button>

      <button className="about-btn">Join Now</button>
    </section>
  );
}

export default AboutTop;
