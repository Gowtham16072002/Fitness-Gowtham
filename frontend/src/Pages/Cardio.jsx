import React, { useEffect, useState } from "react";
import "../Styles/Cardio.css";
import CardioImage1 from "../assets/CardioImage1.jpeg";
import CardioImage2 from "../assets/CardioImage2.jpeg";
import CardioImage3 from "../assets/CardioImage3.jpeg";
import CardioImage4 from "../assets/CardioImage4.jpeg";

function Cardio() {
  const images = [CardioImage1, CardioImage2, CardioImage3, CardioImage4];
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
    <div className="CardioPage">
      <div className="TopContainer">
        <div className="CardioContent">
          <h1>CARDIO FIT</h1>
          <p>
            <span>
              <b>
                Cardiovascular exercise offers a diverse range of benefits
                depending on the modality you choose, allowing you to tailor
                your routine to your physical needs and environment.
              </b>
            </span>
          </p>
          <br />
          <section className="Content1">
            <p>
              The treadmill provides a highly controlled indoor environment
              where you can manipulate speed and incline to simulate various
              terrains, offering more cushioning than outdoor pavement
            </p>
          </section>

          <section className="Content2">
            <p>
              Finally, swimming stands out as a premier full-body workout; the
              water’s natural resistance tones muscle and improves lung capacity
              without any impact on the skeletal system, making it ideal for
              recovery and longevity.
            </p>
          </section>

          <section className="Content3">
            <p>
              HIIT, or High-Intensity Interval Training, is a cardiovascular
              exercise strategy that alternates between short periods of intense
              anaerobic exercise and less-intense recovery periods. Think of it
              as a "work hard, rest, repeat" cycle. Instead of running at a
              steady pace for 30 minutes, you might sprint for 30 seconds and
              walk for 60 seconds, repeating that cycle 10 times.
            </p>
          </section>

          <section className="Content4">
            <p>
              If you prefer a lower-impact alternative, cycling builds
              significant lower-body strength and endurance while being much
              gentler on the knees.By rotating through these activities, you can
              challenge different muscle groups and keep your fitness journey
              engaging and balanced.
            </p>
          </section>
        </div>

        <div className="CardioImage">
          <div className="CardioImages">
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
            <div className="subcribetred">
              <div>
                <h2>Treadmill</h2>
              </div>
              <div>
                <ul className="tredlist">
                  <li>
                    Bone Density:High-impact movement strengthens your skeleton
                    and prevents bone loss.
                  </li>
                  <li>
                    Precision Control:You can precisely manage speed, incline,
                    and pace for targeted training.
                  </li>
                  <li>
                    Mental Health:Releases endorphins that reduce stress and
                    build mental resilience through consistent effort.
                  </li>
                  <li>
                    Functional Movement:Mimics natural human movement, improving
                    your stamina for walking and running in daily life.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeswim">
              <div>
                <h2>Swimming</h2>
              </div>
              <div>
                <ul className="swimlist">
                  <li>
                    Zero Impact: Protects joints and aids injury recovery by
                    supporting 90% of your body weight.
                  </li>
                  <li>
                    Full-Body Toning: Engages every major muscle group
                    simultaneously, providing both cardio and resistance
                    training.
                  </li>
                  <li>
                    Lung Capacity: Enhances respiratory strength and oxygen
                    efficiency through rhythmic, controlled breathing
                    techniques.
                  </li>
                  <li>
                    Mental Calm: The water's weightlessness and repetitive
                    strokes provide a meditative, stress-reducing hydrotherapy
                    experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subscribesecond">
            <div className="subcribejog">
              <div>
                <h2>HIIT</h2>
              </div>
              <div>
                <ul className="joglist">
                  <li>
                    Maximum Efficiency: Delivers massive cardiovascular gains in
                    just 15 to 30 minutes of intense work.
                  </li>
                  <li>
                    Afterburn Effect: Keeps your metabolism elevated and burning
                    calories for hours after the workout ends.
                  </li>
                  <li>
                    Metabolic Health: Significantly improves insulin sensitivity
                    and heart resilience through high-intensity intervals.
                  </li>
                  <li>
                    Muscle Preservation: Effectively burns fat while maintaining
                    muscle mass through explosive, high-power movements.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribecyc">
              <div>
                <h2>Cycling</h2>
              </div>
              <div>
                <ul className="cyclist">
                  <li>
                    Lower-Body Power: Specifically targets and strengthens your
                    quads, hamstrings, glutes, and calves.
                  </li>
                  <li>
                    Joint Longevity: Provides a high-intensity workout with
                    minimal impact, protecting your knees and ankles.
                  </li>
                  <li>
                    Heart Health: Significantly reduces cardiovascular disease
                    risk by maintaining a steady, elevated heart rate.
                  </li>
                  <li>
                    Sustainable Training: Allows for longer durations and more
                    frequent sessions without the exhaustion of high-impact
                    sports.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cardio-btn">
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cardio;
