import React from "react";
import "../Styles/Program2.css";
import Gymimage from "../assets/GymImage.jpeg";
import Yogaimage from "../assets/YogaImage.jpeg";
import Athleteimage from "../assets/AthleteImage.jpeg";
import Zumbaimage from "../assets/ZumbaImage.jpeg";
import { useNavigate } from "react-router-dom";
function Program2() {
  const navigate = useNavigate();
  return (
    <div className="programs-section">
      <div className="prg-header">
        <h1>Our Fitness Programs</h1>
      </div>
      <div className="programs-container">
        <div className="program-card">
          <div className="image-box">
            <img src={Gymimage} alt="" />
          </div>
          <h3>Beginner fitness program</h3>

          <ul>
            <li>Improves muscle strength and stamina</li>
            <li>Supports weight management and fat loss</li>
            <li>Boosts energy and overall well-being</li>
          </ul>
          <button
            className="program2-btn"
            onClick={() => {
              navigate("/beginnerGym");
            }}
          >
            Choose this Program
          </button>
        </div>

        <div className="program-card">
          <div className="image-box">
            <img src={Yogaimage} alt="" />
          </div>
          <h3>Yoga Fitness Program</h3>
          <ul>
            <li>Increases flexibility and balance</li>
            <li>Reduces stress and improves focus</li>
            <li>Enhances overall body strength</li>
          </ul>
          <button
            className="program2-btn"
            onClick={() => {
              navigate("/beginnerYoga");
            }}
          >
            Choose this Program
          </button>
        </div>

        <div className="program-card">
          <div className="image-box">
            <img src={Zumbaimage} alt="" />
          </div>
          <h3>Zumba Fitness Program</h3>
          <ul>
            <li>Burns calories and supports weight loss</li>
            <li>Improves coordination and stamina</li>
            <li>Makes workouts fun and engaging</li>
          </ul>
          <button
            className="program2-btn"
            onClick={() => {
              navigate("/zumbaFitness");
            }}
          >
            Choose this Program
          </button>
        </div>

        <div className="program-card">
          <div className="image-box">
            <img src={Athleteimage} alt="" />
          </div>
          <h3>General Sports Fitness Program</h3>
          <ul>
            <li>Boosts strength and power</li>
            <li>Improves speed and agility</li>
            <li>Enhances overall athletic performance</li>
          </ul>
          <button
            className="program2-btn"
            onClick={() => {
              navigate("/generalSports");
            }}
          >
            Choose this Program
          </button>
        </div>
      </div>
    </div>
  );
}

export default Program2;
