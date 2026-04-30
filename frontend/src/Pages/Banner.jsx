// import React from "react";
// import "../Styles/Banner.css";

// function Banner() {
//   return (
//     <section className="fitness-banner">
//       <i className="fa-solid fa-dumbbell icon icon1"></i>
//       <i className="fa-solid fa-bullseye icon icon2"></i>
//       <i className="fa-solid fa-heart-pulse icon icon3"></i>
//       <i className="fa-solid fa-dumbbell icon icon4"></i>
//       <i className="fa-solid fa-bullseye icon icon5"></i>

//       <div className="banner-content">
//         <p>
//           Train stronger, move better, and live healthier with our gym, yoga,
//           Zumba, and athletic programs designed to build strength, flexibility,
//           endurance, and confidence.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Banner;




import React, { useEffect, useState } from "react";
import "../Styles/Banner.css";
import axios from "axios";
import { API_BASE_URL } from "../config";

function Banner() {
  const [bannerText, setBannerText] = useState(
    "Train stronger, move better, and live healthier with our gym, yoga, Zumba, and athletic programs designed to build strength, flexibility, endurance, and confidence."
  );

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/about-content`);

        if (res.data.success && res.data.data?.banner?.description) {
          setBannerText(res.data.data.banner.description);
        }
      } catch (error) {
        console.log("Banner content fetch failed", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <section className="fitness-banner">
      <i className="fa-solid fa-dumbbell icon icon1"></i>
      <i className="fa-solid fa-bullseye icon icon2"></i>
      <i className="fa-solid fa-heart-pulse icon icon3"></i>
      <i className="fa-solid fa-dumbbell icon icon4"></i>
      <i className="fa-solid fa-bullseye icon icon5"></i>

      <div className="banner-content">
        <p>{bannerText}</p>
      </div>
    </section>
  );
}

export default Banner;
