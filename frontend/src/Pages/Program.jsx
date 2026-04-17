import React from "react";
import "../Styles/Program.css";
import mainImage from "../assets/programMainImage.png";

function Program() {
  return (
    <>
      <div className="ProgramCoverpage">
        <div className="contextArea">
          <h2 className="contextArea-heading">
            Fitness That's <span> Fits Your Life</span>
          </h2>
          <p className="contextArea-para">
            Find a program tailored to your goals,lifestyle and long term
            success
          </p>
          <br />
          <div className="contextArea-content">
            <p>
              Welcome to your ultimate fitness destination, where health,
              strength, and confidence come together. Whether you're just
              starting your fitness journey or looking to push your limits, our
              programs are designed to help you achieve real, lasting results.
            </p>
            <br />
            <p>
              At our fitness platform, we believe that fitness is not just about
              appearance — it's about building a stronger, healthier, and
              happier version of yourself.
            </p>
          </div>
          <button className="program-btn"> Choose your path</button>
        </div>
        <div className="FloatImage">
          <img src={mainImage} alt="" />
          <button className="energize">Energize</button>
          <button className="unstoppable">Unstoppable</button>
        </div>
      </div>
    </>
  );
}

export default Program;
