import React from "react";
import "./Styles/ZumbaDetails.css";
import ZumbaMain from "./assets/ZumbaMain.jpg";
import Zumba from "./assets/Zumba.jpg";
import ZumbaToning from "./assets/ZumbaToning.jpg";
import ZumbaKids from "./assets/ZumbaKids.jpg";

function ZumbaDetails() {
  return (
    <div className="ZumbaDetails">
      <img src={ZumbaMain} alt="" />
      <div className="ZumbaContainer">
        <div>
          <img src={Zumba} alt="Zumba" />
          Zumba
        </div>
        <div>
          <img src={ZumbaToning} alt="ZumbaToning" />
          Zumba Toning
        </div>
        <div>
          <img src={ZumbaKids} alt="ZumbaKids" />
          Zumba Kids
        </div>
        <div>
          <img src="" alt="" />
          Membership
        </div>
      </div>
    </div>
  );
}

export default ZumbaDetails;
