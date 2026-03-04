import React from "react";
import "./Styles/Membership.css";

function Membership() {
  
  return (
    <div className="membership-container">
        <h2 className="membership-title">Choose your payment method</h2>

        <div className="card-wrapper">
          {/* Basic plan */}
        <div className="membership-card">
          <div className="card-header">BASIC</div>

          <div className="card-body">
            <h1>Rs.100 <span>per month</span></h1>
            <p className="renew">AUTO RENEWS</p>
            <p><strong>Rs.00</strong> Initiation fee</p>
            <p><strong>Rs.30</strong> Annual fee*</p>
            <p>Club of enrollment</p>

            <button className="select-btn">SELECT</button>

            <h3 className="includes">INCLUDES</h3>
            <ul>
              <li>Unlimited club visits</li>
              <li>Use of all strength and cardio equipment</li>
              <li>Use of functional turf area+</li>
            </ul>
          </div>
        </div>

        {/* Premier plan */}
        <div className="membership-card">
            <div className="card-header">PREMIER</div>

            <div className="card-body">
              <h1>Rs.100 <span>per month</span></h1>
              <p className="renew">AUTO RENEWS</p>
              <p><strong>Rs.00</strong> Initiation fee</p>
              <p><strong>Rs.30</strong> Annual fee*</p>
              <p>Nationwide access</p>

              <button className="select-btn">SELECT</button>

              <h3 className="includes">INCLUDES</h3>
              <ul>
                <li>Unlimited club visits</li>
                <li>Use pf all strength and cardio equipment</li>
                <li>Use of functional turf area+</li>
              </ul>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Membership;

