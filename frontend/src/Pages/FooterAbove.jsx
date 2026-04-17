import React from "react";
import "../Styles/FooterAbove.css";
import { useNavigate } from "react-router-dom";

function FooterAbove({ data }) {
  const navigate = useNavigate();

  if (!data) return null;

  return (
    <section className="cta">
      <i className="fa-solid fa-heart-pulse icon icon1"></i>
      <i className="fa-solid fa-dumbbell icon icon2"></i>
      <i className="fa-solid fa-bullseye icon icon3"></i>
      <i className="fa-solid fa-person-running icon icon4"></i>
      <i className="fa-solid fa-chart-line icon icon5"></i>
      <i className="fa-solid fa-crosshairs icon icon6"></i>

      <div className="cta-content">
        <h1>{data.heading}</h1>
        <h4>{data.subHeading}</h4>

        <p>{data.description}</p>

        <div className="cta-btn-group">
          <button className="cta-btn">{data.primaryButtonText}</button>

          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="cta-btn"
          >
            <b>{data.secondaryButtonText}</b>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FooterAbove;
