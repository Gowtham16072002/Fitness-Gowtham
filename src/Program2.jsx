import React from "react";
import "./Styles/Program2.css";
import Gymimage from './assets/GymImage.jpeg'
import Yogaimage from './assets/YogaImage.jpeg'
import Athleteimage from './assets/AthleteImage.jpeg'
import Zumbaimage from './assets/ZumbaImage.jpeg'

function Program2() {
  return (
    <div className="programs-section">

      <div className="programs-container">

        <div className="program-card">
          <div className="image-box"><img src={Gymimage} alt="" /></div>
          <h3>Beginner fitness program</h3>
          <p>Our Gym Fitness Program is designed to improve strength, endurance, 
          and overall health through structured workouts and expert guidance. 
          It includes a balanced mix of cardio, strength training and core workouts tailored for beginners and advanced members. 
          With modern equipment and certified trainers, 
          the program helps you achieve your fitness goals safely and effectively.</p>
          <ul>
            <li>Improves muscle strength and stamina</li>
            <li>Supports weight management and fat loss</li>
            <li>Boosts energy and overall well-being</li>
          </ul>
        <button>Choose this Program</button>
        </div>


        <div className="program-card">
          <div className="image-box"><img src={Yogaimage} alt="" /></div>
          <h3>Yoga Fitness Program</h3>
          <p>Our Yoga Fitness Program focuses on improving flexibility, balance, and mental well-being through guided poses and breathing techniques.
           It combines traditional yoga practices with modern fitness methods to strengthen the body and calm the mind.
            Suitable for all levels, it helps reduce stress while enhancing overall physical health.</p>
          <ul>
            <li>Increases flexibility and balance</li>
            <li>Reduces stress and improves focus</li>
            <li>Enhances overall body strength</li>
          </ul>
          <button>Choose this Program</button>
        </div>


        <div className="program-card">
          <div className="image-box"><img src={Zumbaimage} alt="" /></div>
          <h3>Zumba Fitness Program</h3>
          <p>Our Zumba Fitness Program blends energetic dance moves with cardio exercises for a fun and effective workout. Set to lively music, sessions are designed to burn calories while improving coordination and endurance. It’s perfect for those who enjoy dancing while staying fit.</p>
          <ul>
            <li>Burns calories and supports weight loss</li>
            <li>Improves coordination and stamina</li>
            <li>Makes workouts fun and engaging</li>
          </ul>
          <button>Choose this Program</button>
        </div>


        <div className="program-card">
          <div className="image-box"><img src={Athleteimage} alt="" /></div>
          <h3>Athlete Fitness Program</h3>
          <p>Our Athlete Fitness Program is designed to enhance strength, speed, agility, and endurance. It includes sport-specific training, strength conditioning, and performance drills to help individuals reach peak physical performance. Ideal for aspiring and professional athletes aiming to improve competitive skills.</p>
          <ul>
            <li>Boosts strength and power</li>
            <li>Improves speed and agility</li>
            <li>Enhances overall athletic performance</li>
          </ul>
          <button>Choose this Program</button>
        </div>


      </div>

    </div>
  );
}

export default Program2;
