import React from "react";
import "./Styles/Banner.css";

function Banner()  {
  return (
    <section className="fitness-banner">

      {/* Static background icons */}
      <i className="fa-solid fa-dumbbell icon icon1"></i>
      <i className="fa-solid fa-bullseye icon icon2"></i>
      <i className="fa-solid fa-heart-pulse icon icon3"></i>
      <i className="fa-solid fa-dumbbell icon icon4"></i>
      <i className="fa-solid fa-bullseye icon icon5"></i>

      {/* Diagonal line */}
      {/* <div className="diagonal-line"></div> */}

      {/* Text */}
      <div className="banner-content">
        <p>
          Our mission is to make fitness simple, accessible, and effective
          for everyone—whether you're just starting or looking to improve
          your lifestyle.
        </p>
      </div>

    </section>
  );
};

export default Banner;
