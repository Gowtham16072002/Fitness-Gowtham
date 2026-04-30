// import React from "react";
// import "../Styles/CommunitySection.css";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../constants/routes";

// function CommunitySection() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <section className="community-wrapper">
//         <div className="community-card">
//           <div className="overlay"></div>
//           <div className="community-content">
//             <h2>Start Your Fitness Transformation Today</h2>
//             <p>
//               Join hundreds of members improving their health and lifestyle.
//             </p>

//             <button className="community-btn">View Programs</button>
//             <button
//               onClick={() => {
//                 navigate(ROUTES.CONTACT);
//               }}
//               className="community-btn"
//             >
//               Get Started today
//             </button>
//             <button className="community-btn">Join Now</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default CommunitySection;



import React, { useEffect, useState } from "react";
import "../Styles/CommunitySection.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import axios from "axios";
import { API_BASE_URL } from "../config";

function CommunitySection() {
  const navigate = useNavigate();

  const [community, setCommunity] = useState({
    title: "Start Your Fitness Transformation Today",
    description: "Join hundreds of members improving their health and lifestyle.",
    buttons: [
      { text: "View Programs" },
      { text: "Get Started today" },
      { text: "Join Now" },
    ],
  });

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/about-content`);

        if (res.data.success && res.data.data?.community) {
          setCommunity({
            title:
              res.data.data.community.title ||
              "Start Your Fitness Transformation Today",
            description:
              res.data.data.community.description ||
              "Join hundreds of members improving their health and lifestyle.",
            buttons:
              res.data.data.community.buttons?.length > 0
                ? res.data.data.community.buttons
                : [
                  { text: "View Programs" },
                  { text: "Get Started today" },
                  { text: "Join Now" },
                ],
          });
        }
      } catch (error) {
        console.log("Community content fetch failed", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <section className="community-wrapper">
      <div className="community-card">
        <div className="overlay"></div>

        <div className="community-content">
          <h2>{community.title}</h2>
          <p>{community.description}</p>

          {community.buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => {
                if (index === 0) navigate(ROUTES.PROGRAMS);
                if (index === 1) navigate(ROUTES.CONTACT);
              }}
              className="community-btn"
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
