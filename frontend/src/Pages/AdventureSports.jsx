import React, { useEffect, useState } from "react";
import "../Styles/AdventureSports.css";
import RockClimbing from "../assets/RockClimbing.png";
import Hiking from "../assets/Hiking.png";
import kayaking from "../assets/kayaking.png";
import TrailCycling from "../assets/TrailCycling.png";

function AdventureSports() {
  const images = [RockClimbing, Hiking, kayaking, TrailCycling];
  const [showImage, setShowImage] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setShowImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 900);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="AdventureSportsPage">
      <div className="TopContainer">
        <div className="AdventureSportsContent">
          <h1>ADVENTURE SPORTS</h1>
          <p>
            <span>
              <b>
                Adventure sports provide an exciting and physically engaging way
                to improve fitness while exploring challenging and dynamic
                environments. Activities such as rock climbing, hiking, trail
                cycling, and kayaking combine physical effort with outdoor
                experiences, offering a unique blend of strength training,
                endurance building, and mental stimulation. These sports are
                ideal for individuals who enjoy combining fitness with
                exploration and adventure.
              </b>
            </span>
          </p>
          <br />
          <section className="Content1">
          </section>

          <section className="Content2">
            <p>
              Unlike traditional indoor workouts, adventure sports involve
              natural terrains and unpredictable conditions, which enhance
              balance, coordination, and overall body control. The varied
              movements required in these activities engage multiple muscle
              groups, improving cardiovascular health, flexibility, and muscular
              strength while keeping the body active and responsive.
            </p>
          </section>

          <section className="Content3">
            <p>
              Additionally, adventure sports contribute to mental well-being by
              promoting confidence, focus, and stress relief. The thrill of
              overcoming physical challenges and navigating different
              environments helps build resilience and a positive mindset. The
              connection with nature also plays a key role in reducing stress
              and enhancing overall mood.
            </p>
          </section>

          <section className="Content4">
            <p>
              Ultimately, adventure sports offer a powerful combination of
              fitness, excitement, and personal growth. By pushing physical
              limits in a safe and controlled manner, they encourage individuals
              to stay active, build endurance, and develop a strong sense of
              achievement, making them a valuable addition to a balanced and
              active lifestyle.
            </p>
          </section>
        </div>

        <div className="AdventureSportsImage">
          <div className="AdventureSportsImages">
            <div
              key={showImage}
              className={`image-container ${fade ? "fade-In" : "fade-Out"}`}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0.2)),url(${images[showImage]})`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="subscribe">
          <div className="subscribefirst">
            <div className="subcribeclimb">
              <div>
                <h2>Rock Climbing</h2>
              </div>
              <div>
                <ul className="climblist">
                  <li>
                    Full-Body Strength: Engages arms, legs, and core muscles.
                  </li>
                  <li>Grip Power: Improves hand and forearm strength.</li>
                  <li>
                    Mental Focus: Enhances concentration and problem-solving.
                  </li>
                  <li>Endurance: Builds stamina and body control.</li>
                </ul>
              </div>
            </div>
            <div className="subcribehike">
              <div>
                <h2>Hiking</h2>
              </div>
              <div>
                <ul className="hikelist">
                  <li>
                    Cardio Fitness: Improves heart health through long-distance
                    walking.
                  </li>
                  <li>
                    Lower Body Strength: Strengthens legs, thighs, and calves.
                  </li>
                  <li>
                    Fat Burning: Helps in weight loss and calorie burning.
                  </li>
                  <li>Stamina Building: Increases endurance over time.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subscribesecond">
            <div className="subcribeTC">
              <div>
                <h2>Trail Cycling</h2>
              </div>
              <div>
                <ul className="TClist">
                  <li>Leg Strength: Builds strong lower body muscles.</li>
                  <li>
                    Endurance Training: Improves stamina through continuous
                    cycling.
                  </li>
                  <li>
                    Balance & Control: Enhances coordination on uneven terrain.
                  </li>
                  <li>
                    Low Impact: Reduces stress on joints compared to running.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeKK">
              <div>
                <h2>Kayaking</h2>
              </div>
              <div>
                <ul className="KKlist">
                  <li>
                    Upper Body Workout: Strengthens arms, shoulders, and back.
                  </li>
                  <li>Core Stability: Improves balance and posture.</li>
                  <li>Low Impact Exercise: Safe for joints while effective.</li>
                  <li>
                    Cardio Endurance: Boosts stamina through sustained movement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="AdventureSports-btn">
          <button className="ADVSPTbtn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default AdventureSports;
