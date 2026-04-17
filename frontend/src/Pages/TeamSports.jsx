import React, { useEffect, useState } from "react";
import "../Styles/TeamSports.css";
import teamSports1 from "../assets/teamSports1.png";
import teamSports2 from "../assets/teamSports2.png";
import teamSports3 from "../assets/teamSports3.png";
import teamSports4 from "../assets/teamSports4.png";

function TeamSports() {
  const images = [teamSports1, teamSports2, teamSports3, teamSports4];
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
    <div className="TeamSportsPage">
      <div className="TopContainer">
        <div className="TeamSportsContent">
          <h1>TEAM SPORTS</h1>
          <p>
            <span>
              <b>
                Team sports offer a dynamic and engaging way to improve physical
                fitness while fostering collaboration, communication, and
                collective strategy. By involving multiple players working
                together toward a common goal, activities such as football,
                basketball, cricket, and volleyball create an environment that
                emphasizes teamwork, coordination, and shared responsibility,
                making exercise both effective and socially rewarding.
              </b>
            </span>
          </p>
          <br />
          <section className="Content1">
          </section>

          <section className="Content2">
            <p>
              Unlike individual workouts, team sports require constant
              interaction and coordination between players, which enhances
              agility, reflexes, and overall body movement. The fast-paced
              nature of these sports helps improve cardiovascular endurance,
              strength, and flexibility, while also developing quick
              decision-making skills and situational awareness during gameplay.
            </p>
          </section>

          <section className="Content3">
            <p>
              Additionally, team sports contribute significantly to mental and
              emotional well-being by promoting a sense of belonging and
              boosting confidence. The collaborative environment encourages
              motivation, reduces stress, and builds leadership qualities,
              helping individuals develop both personal and interpersonal
              skills.
            </p>
          </section>

          <section className="Content4">
            <p>
              Ultimately, team sports provide a balanced combination of fitness,
              fun, and social engagement, making them an excellent choice for
              individuals seeking an active lifestyle. By blending physical
              activity with teamwork and strategy, they support overall health
              while creating a strong foundation for discipline, cooperation,
              and long-term fitness habits.
            </p>
          </section>
        </div>

        <div className="TeamSportsImage">
          <div className="TeamSportsImages">
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
            <div className="subcribecrkt">
              <div>
                <h2>Cricket </h2>
              </div>
              <div>
                <ul className="crktlist">
                  <li>
                    Team Coordination: Requires strong cooperation between
                    batsmen, bowlers, and fielders.
                  </li>
                  <li>
                    Batting and Bowling Skills: Develops accuracy, timing, and
                    control.
                  </li>
                  <li>
                    Physical Fitness: Improves stamina, reflexes, and body
                    movement.
                  </li>
                  <li>
                    Strategic Thinking: Involves planning, field placement, and
                    match tactics.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribefoot">
              <div>
                <h2>Football</h2>
              </div>
              <div>
                <ul className="footlist">
                  <li>
                    Cardiovascular Endurance: Continuous running improves heart
                    health and stamina.
                  </li>
                  <li>
                    Teamwork: Players must coordinate passes, defense, and
                    attack.
                  </li>
                  <li>
                    Agility and Speed: Enhances quick movement and reaction
                    time.
                  </li>
                  <li>
                    • Discipline and Focus: Builds concentration and
                    decision-making skills.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subscribesecond">
            <div className="subcribebkt">
              <div>
                <h2>Basketball</h2>
              </div>
              <div>
                <ul className="bktlist">
                  <li>
                    Full-Body Activity: Involves running, jumping, and quick
                    directional changes.
                  </li>
                  <li>
                    Hand-Eye Coordination: Improves passing, dribbling, and
                    shooting accuracy.
                  </li>
                  <li>
                    Team Communication: Requires constant interaction among
                    players.
                  </li>
                  <li>
                    Balance and Reflexes: Enhances body control and reaction
                    speed.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribevyb">
              <div>
                <h2>Volleyball</h2>
              </div>
              <div>
                <ul className="vyblist">
                  <li>
                    Quick Reflexes: Players must respond rapidly to serves and
                    spikes.
                  </li>
                  <li>
                    Upper Body Strength: Improves arm, shoulder, and core power.
                  </li>
                  <li>
                    Team Support: Success depends on coordination and trust
                    among teammates.
                  </li>
                  <li>
                    Flexibility and Movement: Encourages fast footwork and body
                    balance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="TeamSports-btn">
          <button className="TMSPTSbtn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default TeamSports;
