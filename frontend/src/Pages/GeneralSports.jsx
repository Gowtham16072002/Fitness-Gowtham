import React from "react";
import "../Styles/GeneralSports.css";
import TeamSports from "../assets/TeamSports.png";
import individualSports from "../assets/individualSports.png";
import adventureSport from "../assets/adventureSport.png";
import adventureSportmember from "../assets/adventureSportmember.png";
import { useNavigate } from "react-router-dom";

function GeneralSports() {
  const navigate = useNavigate();
  return (
    <>
      <div className="GeneralSports">
        <div
          onClick={() => {
            navigate("/teamSports");
          }}
          className="TeamSports"
        >
          <div className="picture">
            <img src={TeamSports} alt="" />
          </div>
          <div className="title">TEAM SPORTS</div>
        </div>
        <div
          onClick={() => {
            navigate("/individualSports");
          }}
          className="IndividualSports"
        >
          <div className="picture">
            <img src={individualSports} alt="" />
          </div>
          <div className="title">INDIVIDUAL SPORTS</div>
        </div>
        <div
          onClick={() => {
            navigate("/adventureSports");
          }}
          className="AdventureSports"
        >
          <div className="picture">
            <img src={adventureSport} alt="" />
          </div>
          <div className="title">ADVENTURE SPORTS</div>
        </div>
        <div
          onClick={() => {
            navigate("/pricingplan/GeneralSportss");
          }}
          className="Membership"
        >
          <div className="picture">
            <img src={adventureSportmember} alt="" />
          </div>
          <div className="title">MEMBERSHIP</div>
        </div>
      </div>
    </>
  );
}

export default GeneralSports;
