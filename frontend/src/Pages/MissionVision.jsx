// import React from "react";
// import "../Styles/MissionVision.css";
// import Banner from "./Banner";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// function MissionVision() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <Banner />

//       <section className="mission-section" data-aos="zoom-in">
//         <div className="cards">
//           <div className="card">
//             <i className="fa-solid fa-bullseye card-icon"></i>
//             <h2>Our Mission</h2>
//             <p>
//               To empower people through fitness,wellness,and education so they
//               can live healthier,more confident lives.
//             </p>
//           </div>

//           <div className="card">
//             <i className="fa-solid fa-eye card-icon"></i>
//             <h2>Our Vision</h2>
//             <p>
//               To create a supportive community where fitness and wellness are
//               sustainable,enjoyable, and par of everyday life.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default MissionVision;



import React, { useEffect, useState } from "react";
import "../Styles/MissionVision.css";
import Banner from "./Banner";

import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";
import { API_BASE_URL } from "../config";

function MissionVision() {
  const [missionVision, setMissionVision] = useState({
    missionTitle: "Our Mission",
    missionDescription:
      "To empower people through fitness, wellness, and education so they can live healthier, more confident lives.",
    visionTitle: "Our Vision",
    visionDescription:
      "To create a supportive community where fitness and wellness are sustainable, enjoyable, and part of everyday life.",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchAboutContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/about-content`);

        if (res.data.success && res.data.data?.missionVision) {
          setMissionVision({
            missionTitle:
              res.data.data.missionVision.missionTitle || "Our Mission",
            missionDescription:
              res.data.data.missionVision.missionDescription ||
              "To empower people through fitness, wellness, and education so they can live healthier, more confident lives.",
            visionTitle: res.data.data.missionVision.visionTitle || "Our Vision",
            visionDescription:
              res.data.data.missionVision.visionDescription ||
              "To create a supportive community where fitness and wellness are sustainable, enjoyable, and part of everyday life.",
          });
        }
      } catch (error) {
        console.log("Mission Vision content fetch failed", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <>
      <Banner />

      <section className="mission-section" data-aos="zoom-in">
        <div className="cards">
          <div className="card">
            <i className="fa-solid fa-bullseye card-icon"></i>
            <h2>{missionVision.missionTitle}</h2>
            <p>{missionVision.missionDescription}</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-eye card-icon"></i>
            <h2>{missionVision.visionTitle}</h2>
            <p>{missionVision.visionDescription}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVision;