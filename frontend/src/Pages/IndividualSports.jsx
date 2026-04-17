import React, { useEffect, useState } from "react";
import "../Styles/IndividualSports.css";
import individual1 from "../assets/individual1.png";
import individual2 from "../assets/individual2.png";
import individual3 from "../assets/individual3.png";
import individual4 from "../assets/individual4.png";

function IndividualSports() {
  const images = [individual1, individual2, individual3, individual4];
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
    <div className="IndividualSportsPage">
      <div className="TopContainer">
        <div className="IndividualSportsContent">
          <h1>INDIVIDUAL SPORTS</h1>
          <p>
            <span>
              <b>
                Individual sports provide a focused and self-driven approach to
                physical fitness, allowing individuals to develop their skills,
                strength, and endurance independently. Activities such as
                badminton, tennis, boxing, and athletics emphasize personal
                performance, enabling participants to progress at their own pace
                while building confidence and discipline through consistent
                practice.
              </b>
            </span>
          </p>
          <br />
          <section className="Content1">
          </section>

          <section className="Content2">
            <p>
              Unlike team-based activities, individual sports place full
              responsibility on the participant, encouraging self-motivation,
              concentration, and goal setting. These sports improve agility,
              coordination, and overall body control while enhancing
              cardiovascular fitness and muscular strength. The repetitive and
              skill-based nature of individual training also helps refine
              technique and precision over time.
            </p>
          </section>

          <section className="Content3">
            <p>
              Additionally, individual sports contribute significantly to mental
              resilience by promoting focus, determination, and stress
              management. The ability to train and compete independently fosters
              a strong mindset, helping individuals overcome challenges and
              maintain consistency in their fitness journey.
            </p>
          </section>

          <section className="Content4">
            <p>
              Ultimately, individual sports offer a balanced combination of
              physical development and mental growth, making them an excellent
              choice for those who prefer independent training. By focusing on
              personal achievement and continuous improvement, they support a
              healthy lifestyle while building confidence, discipline, and
              long-term fitness habits.
            </p>
          </section>
        </div>

        <div className="IndividualSportsImage">
          <div className="IndividualSportsImages">
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
            <div className="subcribeBAD">
              <div>
                <h2>Badminton</h2>
              </div>
              <div>
                <ul className="BADlist">
                  <li>
                    Speed & Agility: Requires quick footwork and fast reactions.
                  </li>
                  <li>
                    Hand-Eye Coordination: Improves accuracy in hitting the
                    shuttlecock.
                  </li>
                  <li>
                    Cardio Fitness: Enhances stamina through continuous
                    movement.
                  </li>
                  <li>Focus & Timing: Develops precision and concentration.</li>
                </ul>
              </div>
            </div>
            <div className="subcribeTEN">
              <div>
                <h2>Tennis</h2>
              </div>
              <div>
                <ul className="TENlist">
                  <li>
                    Full-Body Workout: Engages arms, legs, and core muscles.
                  </li>
                  <li>
                    Endurance: Long rallies improve stamina and energy levels.
                  </li>
                  <li>Coordination: Enhances timing and ball control.</li>
                  <li>
                    Mental Strength: Builds strategy and decision-making skills.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subscribesecond">
            <div className="subcribeBOX">
              <div>
                <h2>Boxing</h2>
              </div>
              <div>
                <ul className="BOXlist">
                  <li>
                    Strength & Power: Develops upper body and core strength.
                  </li>
                  <li>
                    Reflexes: Improves reaction speed and defensive skills.
                  </li>
                  <li>
                    Cardio Conditioning: Boosts heart health and endurance.
                  </li>
                  <li>
                    Discipline: Enhances focus, control, and mental toughness.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeATH">
              <div>
                <h2>Athletics</h2>
              </div>
              <div>
                <ul className="ATHlist">
                  <li>
                    Speed Development: Improves sprinting and running ability.
                  </li>
                  <li>
                    Strength Training: Builds muscles through jumping and
                    throwing events.
                  </li>
                  <li>
                    Stamina: Enhances endurance in long-distance activities.
                  </li>
                  <li>
                    Performance Focus: Encourages goal setting and personal
                    improvement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="IndividualSports-btn">
          <button className="INSPTbtn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default IndividualSports;
