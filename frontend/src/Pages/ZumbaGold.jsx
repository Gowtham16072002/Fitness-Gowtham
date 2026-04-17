import React, { useEffect, useState } from "react";
import "../Styles/ZumbaGold.css";
import ZumbaGold1 from "../assets/ZumbaGold1.png";
import ZumbaGold2 from "../assets/ZumbaGold2.png";
import ZumbaGold3 from "../assets/ZumbaGold3.png";
import ZumbaGold4 from "../assets/ZumbaGold4.png";

function ZumbaGold() {
  const images = [ZumbaGold1, ZumbaGold2, ZumbaGold3, ZumbaGold4];
  const [showImage, setShowImage] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const intervel = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        if (showImage === images.length - 1) {
          setShowImage(0);
        } else {
          setShowImage(showImage + 1);
        }
      }, 3000);
      setFade(true);
    }, 600);

    return () => clearInterval(intervel);
  }, [showImage]);

  return (
    <div className="ZumbaGold">
      <div className="TopContainer">
        {/* LEFT */}
        <div className="ZumbaGoldContent">
          <h1>ZUMBA GOLD</h1>
          <p>
            <span>
              <b>
                Zumba Gold offers a gentle yet effective approach to fitness,
                specifically designed for older adults and beginners who seek a
                safe and enjoyable workout experience. By combining low-impact
                movements with easy-to-follow choreography, it allows
                participants to stay active without placing excessive strain on
                joints or muscles, making it ideal for long-term health and
                consistency.
              </b>
            </span>
          </p>
          <br />
          <section className="Content1">
            <p>
              Unlike traditional high-intensity workouts, Zumba Gold focuses on
              controlled, rhythmic movements that improve balance, coordination,
              and overall mobility. The slower pace ensures that individuals can
              comfortably follow along while still benefiting from
              cardiovascular activity, helping to maintain heart health and
              increase stamina over time.
            </p>
          </section>

          <section className="Content2">
            <p>
              Additionally, Zumba Gold promotes both physical and mental
              well-being by encouraging social interaction and reducing stress.
              The uplifting music and supportive environment create a positive
              atmosphere, transforming exercise into an enjoyable routine rather
              than a demanding task. This makes it especially beneficial for
              those who are new to fitness or returning after a break.
            </p>
          </section>

          <section className="Content3">
            <p>
              Ultimately, Zumba Gold serves as a sustainable fitness solution
              that prioritizes safety, comfort, and consistency. By providing a
              balanced combination of movement, music, and community, it
              empowers individuals to maintain an active lifestyle while
              enhancing their overall quality of life.
            </p>
          </section>
        </div>

        <div className="ZumbaGoldImage">
          <div className="ZumbaGoldImages">
            <div
              key={showImage}
              className={`image-container ${fade ? "fade-in" : "fade-out"}`}
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
            <div className="subcribeZGCLS">
              <div>
                <h2>ZUMBA GOLD CLASSIC</h2>
              </div>
              <div>
                <ul className="ZGCLSlist">
                  <li>
                    Beginner Friendly: Designed for older adults and first-time
                    participants.
                  </li>
                  <li>Low Intensity: Slow-paced movements with no jumping.</li>
                  <li>
                    Easy Choreography: Simple steps for better understanding.
                  </li>
                  <li>
                    Safe Workout: Focuses on comfort and injury prevention.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeZGCH">
              <div>
                <h2>ZUMBA GOLD CHAIR</h2>
              </div>
              <div>
                <ul className="ZGCHlist">
                  <li>Seated Workout: Performed while sitting on a chair.</li>
                  <li>
                    Accessibility: Ideal for people with mobility limitations.
                  </li>
                  <li>Upper Body Focus: Engages arms, shoulders, and core.</li>
                  <li>Extra Support: Reduces risk of falls and strain.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subscribesecond">
            <div className="subcribeZGTO">
              <div>
                <h2>ZUMBA GOLD TONING</h2>
              </div>
              <div>
                <ul className="ZGTOlist">
                  <li>
                    Light Strength Training: Uses small weights or toning
                    sticks.
                  </li>
                  <li>
                    Muscle Maintenance: Helps retain muscle strength with age.
                  </li>
                  <li>
                    Controlled Movements: Safe and steady resistance exercises.
                  </li>
                  <li>Improved Stability: Enhances posture and balance.</li>
                </ul>
              </div>
            </div>
            <div className="subcribeZGSTFL">
              <div>
                <h2>ZUMBA GOLD STRETCH AND FLEX</h2>
              </div>
              <div>
                <ul className="ZGSTFLlist">
                  <li>
                    Flexibility Focus: Improves range of motion and mobility.
                  </li>
                  <li>
                    Gentle Stretching: Reduces stiffness and muscle tightness.
                  </li>
                  <li>Relaxation: Helps calm mind and body.</li>
                  <li>Posture Improvement: Supports better body alignment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ZumbaGold-btn">
          <button className="ZG-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default ZumbaGold;
