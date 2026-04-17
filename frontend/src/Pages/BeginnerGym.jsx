import React from "react";
import "../Styles/BeginnerGym.css";
import CardioImage from "../assets/CardioImage.jpeg";
import StrengthImage from "../assets/StrengthImage.jpeg";
import NutritionImage from "../assets/NutritionImage.jpeg";
import MembershipImage from "../assets/MembershipImage.jpeg";
import { useNavigate } from "react-router-dom";
function BeginnerGym() {
  const navigate = useNavigate();

  return (
    <>
      <div className='Beginner'>

        <div onClick={() => { navigate("/cardio") }} className='Cardio'>
          <div className='picture'>
            <img src={CardioImage} alt="" />
          </div>
          <div className="title">CARDIO</div>
        </div>


        <div onClick={() => { navigate("/StrengthTraining") }} className='Strength'>
          <div className='picture'>
            <img src={StrengthImage} alt="" />
          </div>
          <div className="title">STRENGTH TRAINING</div>
        </div>


        <div onClick={() => { navigate("/Nutrition") }} className='Nutrition'>
          <div className='picture'>
            <img src={NutritionImage} alt="" />
          </div>
          <div className="title">NUTRITION</div>
        </div>

        <div onClick={() => { navigate("/pricingplan/gym") }} className='Membership'>
          <div className='picture'>
            <img src={MembershipImage} alt="" />
          </div>
          <div className="title">MEMBERSHIP</div>
        </div>
      </div>
    </>
  );
}

export default BeginnerGym;
