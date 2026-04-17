import React from "react";
import "../Styles/HomeMidsec.css";

function HomeMidsec() {
  return (
    <section className="features">
      <div className="feature-card transparent fade-in">
        <div className="icon-circle">
          <i className="fa-regular fa-user"></i>
        </div>

        <h3>Personalized Coaching</h3>
        <p>
          Custom workout plans and guidance tailored to your unique goals,
          fitness level, and lifestyle.
        </p>
      </div>

      <div className="feature-card white fade-in delay-1">
        <div className="icon-circle">
          <i className="fa-solid fa-heart-pulse"></i>
        </div>

        <h3>Holistic Wellness Approach</h3>
        <p>
          More than just workouts—we focus on nutrition, recovery, mindset, and
          healthy habits.
        </p>
      </div>

      <div className="feature-card white fade-in delay-2">
        <div className="icon-circle">
          <i className="fa-solid fa-chart-line"></i>
        </div>

        <h3>Real, Sustainable Results</h3>
        <p>
          Build lasting change with proven methods that help you stay consistent
          and see real progress.
        </p>
      </div>
    </section>
  );
}

export default HomeMidsec;
