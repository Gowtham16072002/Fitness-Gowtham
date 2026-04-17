import React from "react";
import "../Styles/CommunitySection.css";
import { useNavigate } from "react-router-dom";

function CommunitySection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="community-wrapper">
        <div className="community-card">
          <div className="overlay"></div>
          <div className="community-content">
            <h2>Start Your Fitness Transformation Today</h2>
            <p>
              Join hundreds of members improving their health and lifestyle.
            </p>

            <button className="community-btn">View Programs</button>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="community-btn"
            >
              Get Started today
            </button>
            <button className="community-btn">Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommunitySection;
