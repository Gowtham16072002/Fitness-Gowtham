import React from 'react'
import '../Styles/BeginnerYoga.css'
import YogaDetail1 from '../assets/YogaDetail1.jpeg'
import YogaDetail2 from '../assets/YogaDetail2.jpeg'
import YogaDetail3 from '../assets/YogaDetail3.jpeg'
import YogaDetail4 from '../assets/YogaDetail4.jpeg'
import { useNavigate } from 'react-router-dom'

function BeginnerYoga() {
  const navigate = useNavigate();
  return (
    <>
      <div className='BeginnerYoga'>
        <div onClick={() => { navigate("/KarmaYoga") }} className='karmayoga'>
          <div className='picture'>
            <img src={YogaDetail1} alt="" />
          </div>
          <div className="title">KARMA YOGA</div>
        </div>
        <div onClick={() => { navigate("/Bhaktiyoga") }} className='bhaktiyoga'>
          <div className='picture'>
            <img src={YogaDetail2} alt="" />
          </div>
          <div className="title">BHAKTi YOGA</div>
        </div>
        <div onClick={() => { navigate("/Jnanayoga") }} className='jnanayoga'>
          <div className='picture'>
            <img src={YogaDetail3} alt="" />
          </div>
          <div className="title">JNANA YOGA</div>
        </div>
        <div onClick={() => { navigate("/pricingplan/YogaTraining") }} className='Membership'>
          <div className='picture'>
            <img src={YogaDetail4} alt="" />
          </div>
          <div className="title">MEMBERSHIP</div>
        </div>
      </div>
    </>
  );
}

export default BeginnerYoga;
