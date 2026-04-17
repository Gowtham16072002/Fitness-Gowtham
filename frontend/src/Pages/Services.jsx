import React from "react";
import "../Styles/Services.css";
import FooterAbove from "./FooterAbove";
import ServiceDetails from "./ServiceDetails";
import { Link, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="services">
        <div className="service-header">
          <h2>Our Services</h2>
        </div>

        <div className="main-div">
          <div className="left-div">
            <div className="dL1 left"></div>
            <div className="dL2 left">
              <h6>Elevate</h6>
            </div>
            <div className="dL3 left">
              <h6>Unstoppable</h6>
            </div>
          </div>
          <div className="center-div">
            <div className="dC1">
              <p>
                Comprehensive fitness and wellness services designed <br />
                to support you at every stage <br /> of your journey.
              </p>
            </div>
            <div className="dC2"></div>
            <div className="dC3"></div>
          </div>
          <div className="right-div">
            <div className="dR1 right">
              <h6>Energize</h6>
            </div>
            <div className="dR2 right">
              <h6>Stronger</h6>
            </div>
            <div className="dR3 right"></div>
          </div>
        </div>

        <div className="service-btn-parent">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="service-btn"
          >
            Get Started
          </button>
        </div>
      </section>

      <ServiceDetails />
      <FooterAbove />
    </div>
  );
}

export default Services;
