import React from "react";
import "./Styles/CommunitySection.css";
import { useNavigate } from "react-router-dom";
// import heroImage from "./assets/powerlifting.jpg";

function CommunitySection ()  {

    const navigate = useNavigate();
  return (
      <>
          <section className="community-wrapper">
              <div className="community-card">
                  <div className="overlay"></div>
                  <div className="community-content">
                      <h2>Join Our Commmunity</h2>
                      <p>Start your fitness journey with a team that truly cares about your success</p>
                      <button onClick={()=>{navigate("/contact")}} className="community-btn">Get Started today</button>
                  </div>
              </div>
          </section>
      </>
  );
};

export default CommunitySection;
