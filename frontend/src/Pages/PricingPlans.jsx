import React from "react";
import "../Styles/PricingPlans.css";
import { useLocation } from "react-router-dom";

function PricingPlans() {
  const location = useLocation();
  const name = location.pathname.split("/")[2];
  console.log(name);

  const data = [
    {
      name: "gym",
      plans: [
        {
          planName: "Basic",
          price: "₹1999",
          content: ["Gym Access", "Group Classes"],
        },
        {
          planName: "Pro",
          price: "₹3999",
          content: ["Personal Training", "Diet Plan", "Progress Tracking"],
        },
        {
          planName: "Elite",
          price: "₹6999",
          content: [
            "Full Transformation Program",
            "Personal Trainer",
            "Customized Diet plan",
            "Weekly Progress Check",
          ],
        },
      ],
    },
    {
      name: "YogaTraining",
      plans: [
        {
          planName: "Basic",
          price: "₹1999",
          content: ["Yoga Class Access", "Group Classes"],
        },
        {
          planName: "Pro",
          price: "₹3999",
          content: ["Personal Training", "Diet Plan", "Progress Tracking"],
        },
        {
          planName: "Elite",
          price: "₹6999",
          content: [
            "Full Transformation Program",
            "Personal Trainer",
            "Customized Diet Plan",
            "Weekly Progress Check",
          ],
        },
      ],
    },
    {
      name: "ZumbaTraining",
      plans: [
        {
          planName: "Basic",
          price: "₹1999",
          content: ["Zumba Class Access", "Group Classes"],
        },
        {
          planName: "Pro",
          price: "₹3999",
          content: ["Personal Training", "Diet Plan", "Progress Tracking"],
        },
        {
          planName: "Elite",
          price: "₹6999",
          content: [
            "Full Transformation Program",
            "Personal Trainer",
            "Customized Diet Plan",
            "Weekly Progress Check",
          ],
        },
      ],
    },
    {
      name: "GeneralSportss",
      plans: [
        {
          planName: "Basic",
          price: "₹1999",
          content: ["Mentor Class Access", "Group Classes"],
        },
        {
          planName: "Pro",
          price: "₹3999",
          content: ["Personal Training", "Diet Plan", "Progress Tracking"],
        },
        {
          planName: "Elite",
          price: "₹6999",
          content: [
            "Full Improvement Program",
            "Personal Trainer",
            "Customized Diet Plan",
            "Weekly Progress Check",
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <div className="pricing-section">
        <h2 className="pricing-title">Pricing Plans</h2>

        <div className="pricing-container">
          {data.map((plan) => {
            return name == plan.name ? (
              plan.plans.map((plan) => {
                return (
                  <>
                    <div className="pricing-card">
                      <div>
                        <h3>{plan.planName}</h3>
                        <h2>{plan.price}</h2>
                      </div>
                      <div className="pricing-content">
                        <ul>
                          {plan &&
                            plan.content.map((content) => {
                              return <li>{content}</li>;
                            })}
                        </ul>
                      </div>
                      <button className="pricing-btn">Choose Plan</button>
                    </div>
                  </>
                );
              })
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
