import React, { useEffect, useState } from "react";
import "../Styles/StrengthTraining.css";
import isometricimage from "../assets/isometricimage.png";
import isotonicimage from "../assets/isotonicimage.png";
import isokineticimage from "../assets/isokineticimage.png";
import plyometricimage from "../assets/plyometricimage.png";

function StrengthTraining() {
  const images = [
    isometricimage,
    isotonicimage,
    isokineticimage,
    plyometricimage,
  ];
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
    <div className="strengthTrainingPage">
      <div className="strengthTrainingTopContainer">
        <div className="strengthTrainingContent">
          <h1>StrengthTraining</h1>
          <p>
            <span>
              <b>
                Strength training is a form of physical exercise designed to
                improve muscle strength, endurance, and overall fitness by
                working muscles against resistance such as weights, machines, or
                body weight. It plays an important role in maintaining a healthy
                body and preventing injuries.
              </b>
            </span>
          </p>
          <br />
          <section className="strengthTrainingContent1">
            <p>
              Isometric training involves muscle contraction without any visible
              movement. For example, holding a Plank helps build stability and
              core strength. Isotonic training is the most common type, where
              muscles change length during movement. This includes both
              concentric (lifting) and eccentric (lowering) actions, as seen in
              exercises like Squat and Bench press.
            </p>
          </section>

          <section className="strengthTrainingContent2">
            <p>
              Isokinetic training uses specialized machines that keep movement
              at a constant speed. It is mainly used in physiotherapy and
              rehabilitation programs to safely strengthen muscles. Plyometric
              training focuses on explosive movements that increase power and
              speed. Exercises like Box jump and jump squats are common
              examples.
            </p>
          </section>

          <section className="strengthTrainingContent3">
            <p>
              Regular strength training provides many benefits. It increases
              muscle mass and bone density, improves posture and balance, boosts
              metabolism, and enhances overall physical performance. It also
              helps in weight management and reduces the risk of chronic
              diseases.
            </p>
          </section>

          <section className="strengthTrainingContent4">
            <p>
              strength training is a vital part of a healthy lifestyle that
              improves muscle strength, endurance, and overall fitness. By
              including different types of exercises and practicing regularly,
              individuals can achieve better physical performance, prevent
              injuries, and maintain long-term health.
            </p>
          </section>
        </div>

        <div className="strengthTrainingImage">
          <div className="strengthTrainingImages">
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
        <div className="strengthTrainingsubscribe">
          <div className="strengthTrainingsubscribefirst">
            <div className="subcribeisometric">
              <div>
                <h2>Isometric</h2>
              </div>
              <div>
                <ul className="subcribeisometriclist">
                  <li>Builds muscle strength without joint movement</li>
                  <li>Improves stability and posture control</li>
                  <li>Reduces injury risk during rehabilitation</li>
                  <li>Requires minimal equipment and space</li>
                </ul>
              </div>
            </div>
            <div className="subcribeisotonic">
              <div>
                <h2>Isotonic</h2>
              </div>
              <div>
                <ul className="subcribeisotoniclist">
                  <li>Improves muscle strength through controlled movement</li>
                  <li>Enhances flexibility and joint range of motion</li>
                  <li>Supports muscle growth and overall fitness</li>
                  <li>Helps perform daily activities more efficiently</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="strengthTrainingsubscribesecond">
            <div className="subcribeisokinetic">
              <div>
                <h2>Isokinetic</h2>
              </div>
              <div>
                <ul className="subcribeisokineticlist">
                  <li>Provides constant speed for safe</li>
                  <li>Reduces risk of injury during exercise</li>
                  <li>Useful for rehabilitation and recovery programs</li>
                  <li>
                    Targets specific muscles with precise resistance control
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribeplyometric">
              <div>
                <h2>Plyometric</h2>
              </div>
              <div>
                <ul className="subcribeplyometriclist">
                  <li>improves explosive power and speed</li>
                  <li>Enhances athletic performance and agility</li>
                  <li>Increases coordination and reaction time</li>
                  <li>Burns calories and supports fat loss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="strengthTraining-btn">
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default StrengthTraining;
