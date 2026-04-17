import React, { useEffect, useState } from "react";
import "../Styles/ZumbaClassic.css";
import ZumbaImage from "../assets/ZumbaImage.jpeg";
import ZumbaChild from "../assets/ZumbaChild.png";
import ZumbaGold from "../assets/ZumbaGold.png";
import ZumbaFitness from "../assets/ZumbaFitness.png";

function ZumbaClassic() {
  const images = [ZumbaImage, ZumbaChild, ZumbaGold, ZumbaFitness];
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
    <div className="ZumbaClassicPage">
      <div className="TopContainer">
        <div className="ZumbaClassicContent">
          <h1>ZUMBA CLASSIC</h1>
          <p>
            <span>
              <b>
                Zumba Classic offers a high-energy, fun-filled workout, while
                its variations provide options for cardio intensity, strength,
                rhythm, and enjoyment, making it suitable for people who want an
                engaging and effective fitness routine.
              </b>
            </span>
          </p>
          <section className="Content2">
            <p>
              Unlike conventional exercise methods, Zumba Classic focuses on
              continuous rhythmic movements that keep the body active and
              energized, helping to enhance stamina, coordination, and overall
              endurance. The fast-paced choreography challenges both the upper
              and lower body, ensuring a complete full-body workout that
              strengthens muscles while promoting flexibility and balance.
            </p>
          </section>

          <section className="Content3">
            <p>
              Additionally, Zumba Classic plays a significant role in improving
              mental well-being by releasing endorphins that reduce stress and
              elevate mood. The lively music and group-based environment create
              a positive and social atmosphere, encouraging consistency and
              making it easier for individuals to stay committed to their
              fitness journey.
            </p>
          </section>

          <section className="Content4">
            <p>
              Ultimately, Zumba Classic stands out as a powerful yet enjoyable
              fitness solution that combines effective calorie burning, muscle
              engagement, and emotional upliftment. Its unique fusion of dance
              and exercise not only supports physical health but also enhances
              confidence and overall quality of life, making it a popular choice
              for those seeking a fun and sustainable workout routine.
            </p>
          </section>
        </div>

        <div className="ZumbaClassicImage">
          <div className="ZumbaClassicImages">
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
            <div className="subcribeZCRBL">
              <div>
                <h2>Zumba Cardio Blast</h2>
              </div>
              <div>
                <ul className="ZCRBLlist">
                  <li>
                    High Intensity: Focuses on continuous fast-paced movements.
                  </li>
                  <li>Fat Burning: Maximizes calorie burn in a short time.</li>
                  <li>
                    Endurance Focus: Improves stamina and cardiovascular
                    strength.
                  </li>
                  <li>Energetic Routines: Non-stop dance sequences.</li>
                </ul>
              </div>
            </div>
            <div className="subcribeZSTFU">
              <div>
                <h2>Zumba Strength Fusion</h2>
              </div>
              <div>
                <ul className="ZSTFUlist">
                  <li>
                    Muscle Engagement: Combines dance with bodyweight exercises.
                  </li>
                  <li>Core Focus: Strengthens abs and lower back.</li>
                  <li>
                    Balanced Workout: Mix of cardio and strength training.
                  </li>
                  <li>
                    Power Moves: Includes squats, lunges, and dynamic steps.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subscribesecond">
            <div className="subcribeZDNPR">
              <div>
                <h2>Zumba Dance Party</h2>
              </div>
              <div>
                <ul className="ZDNPRlist">
                  <li>
                    Fun Experience: Focuses more on enjoyment than intensity.
                  </li>
                  <li>Simple Routines: Easy-to-follow dance moves.</li>
                  <li>Social Workout: Great for group sessions.</li>
                  <li>
                    Stress Relief: Boosts mood through music and movement.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeZINMX">
              <div>
                <h2>Zumba Interval Mix</h2>
              </div>
              <div>
                <ul className="ZINMXlist">
                  <li>
                    Interval Training: Alternates between high and moderate
                    intensity.
                  </li>
                  <li>
                    Better Recovery: Allows short rest phases within workout.
                  </li>
                  <li>Efficiency: Improves fitness in less time.</li>
                  <li>Heart Health: Enhances cardiovascular performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ZumbaClassic-btn">
          <button className="ZCLbtn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default ZumbaClassic;
