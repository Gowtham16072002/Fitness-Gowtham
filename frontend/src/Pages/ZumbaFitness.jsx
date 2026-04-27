import React from "react";
import "../Styles/ZumbaFitness.css";
import ZumbaClassic from "../assets/ZumbaFitness.png";
import ZumbaGold from "../assets/ZumbaGold.png";
import ZumbaChild from "../assets/ZumbaChild.png";
import ZumbaSection from "../assets/ZumbaSection.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function ZumbaFitness() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ZumbaFitness">
        <div
          onClick={() => {
            navigate(ROUTES.ZUMBA_CLASSIC);
          }}
          className="ZumbaClasic"
        >
          <div className="picture">
            <img src={ZumbaClassic} alt="" />
          </div>
          <div className="title">ZUMBA CLASSIC</div>
        </div>
        <div
          onClick={() => {
            navigate(ROUTES.ZUMBA_GOLD);
          }}
          className="ZumbaGolden"
        >
          <div className="picture">
            <img src={ZumbaGold} alt="" />
          </div>
          <div className="title">ZUMBA GOLD</div>
        </div>
        <div
          onClick={() => {
            navigate(ROUTES.ZUMBA_KIDS);
          }}
          className="ZumbaKids"
        >
          <div className="picture">
            <img src={ZumbaChild} alt="" />
          </div>
          <div className="title">ZUMBA KIDS</div>
        </div>
        <div
          onClick={() => {
            navigate(ROUTES.PRICING_PLAN.replace(":name", "ZumbaTraining"));
          }}
          className="Membership"
        >
          <div className="picture">
            <img src={ZumbaSection} alt="" />
          </div>
          <div className="title">MEMBERSHIP</div>
        </div>
      </div>
    </>
  );
}

export default ZumbaFitness;
