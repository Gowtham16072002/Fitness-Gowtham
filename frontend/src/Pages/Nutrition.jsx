import React, { useEffect, useState } from "react";
import "../Styles/Nutrition.css";
import proteinimage from "../assets/proteinimage.png";
import carbohydrateimage from "../assets/carbohydrateimage.png";
import fatimage from "../assets/fatimage.png";
import vitAndminimage from "../assets/vitAndminimage.png";

function Nutrition() {
  const images = [proteinimage, carbohydrateimage, fatimage, vitAndminimage];
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
    <div className="NutritionPage">
      <div className="NutritionTopContainer">
        <div className="NutritionContent">
          <h1>Nutrition</h1>
          <p>
            <span>
              <b>
                Nutrition is the foundation of good health, providing the body
                with essential nutrients needed for energy, growth, and overall
                well-being. A balanced diet includes carbohydrates, proteins,
                fats, and vitamins and minerals, each playing a vital role.
              </b>
            </span>
          </p>
          <br />
          <section className="NutritionContent1">
            <p>
              Carbohydrates are the main source of energy, helping the body
              perform daily activities efficiently. Proteins are crucial for
              building and repairing tissues, supporting muscle development, and
              maintaining body functions.
            </p>
          </section>

          <section className="NutritionContent2">
            <p>
              Fats, though often misunderstood, are important for storing
              energy, protecting organs, and aiding in the absorption of certain
              vitamins.
            </p>
          </section>

          <section className="NutritionContent3">
            <p>
              Vitamins and minerals are required in smaller amounts but are
              essential for regulating body processes, strengthening immunity,
              and preventing diseases.
            </p>
          </section>

          <section className="NutritionContent4">
            <p>
              ogether, these nutrients work in harmony to keep the body strong,
              active, and healthy, highlighting the importance of maintaining a
              well-balanced and nutritious diet.
            </p>
          </section>
        </div>

        <div className="NutritionImage">
          <div className="NutritionImages">
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
        <div className="Nutritionsubscribe">
          <div className="Nutritionsubscribefirst">
            <div className="subcribeprotein">
              <div>
                <h2>Protein</h2>
              </div>
              <div>
                <ul className="subcribeproteinlist">
                  <li>
                    Protein helps in the growth and repair of muscles, skin, and
                    other body tissues.
                  </li>
                  <li>
                    It is essential for strengthening and maintaining muscles,
                    especially during exercise.
                  </li>
                  <li>
                    Proteins form antibodies that help the body fight infections
                    and diseases.
                  </li>
                  <li>
                    Protein is needed to make enzymes and hormones that regulate
                    important body functions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribecarbohydrate">
              <div>
                <h2>Carbohydrate</h2>
              </div>
              <div>
                <ul className="subcribecarbohydratelist">
                  <li>
                    Carbohydrates are the body’s main source of energy for daily
                    activities and brain function.
                  </li>
                  <li>
                    Glucose from carbohydrates is essential for proper brain
                    performance and concentration.
                  </li>
                  <li>
                    Fiber helps maintain a healthy digestive system and prevents
                    constipation.
                  </li>
                  <li>
                    Carbohydrates prevent proteins from being used as energy,
                    allowing them to focus on growth and repair.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Nutritionsubscribesecond">
            <div className="subcribefat">
              <div>
                <h2>Fat</h2>
              </div>
              <div>
                <ul className="subcribefatlist">
                  <li>
                    Fats store and supply energy for longer periods compared to
                    carbohydrates.
                  </li>
                  <li>
                    Fat cushions and protects important organs like the heart
                    and kidneys.
                  </li>
                  <li>
                    Fats are necessary for absorbing fat-soluble vitamins such
                    as A, D, E, and K.
                  </li>
                  <li>
                    Fats are essential for building and maintaining healthy cell
                    membranes.
                  </li>
                </ul>
              </div>
            </div>
            <div className="subcribevitAndmin">
              <div>
                <h2>Vitamins&Minerals</h2>
              </div>
              <div>
                <ul className="subcribevitAndminlist">
                  <li>
                    They help the body fight infections and keep the immune
                    system strong.
                  </li>
                  <li>
                    Minerals like calcium and phosphorus strengthen bones and
                    teeth.
                  </li>
                  <li>
                    They help control processes like metabolism, heartbeat, and
                    nerve function.
                  </li>
                  <li>
                    Adequate intake helps avoid deficiencies and reduces the
                    risk of various health problems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Nutrition-btn">
          <button className="btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}
export default Nutrition;
