import React from "react";
import "../Styles/Banner.css";

function Banner() {
  return (
    <section className="fitness-banner">
      <i className="fa-solid fa-dumbbell icon icon1"></i>
      <i className="fa-solid fa-bullseye icon icon2"></i>
      <i className="fa-solid fa-heart-pulse icon icon3"></i>
      <i className="fa-solid fa-dumbbell icon icon4"></i>
      <i className="fa-solid fa-bullseye icon icon5"></i>

      <div className="banner-content">
        <p>
          Train stronger, move better, and live healthier with our gym, yoga,
          Zumba, and athletic programs designed to build strength, flexibility,
          endurance, and confidence.
        </p>
      </div>
    </section>
  );
}

export default Banner;
