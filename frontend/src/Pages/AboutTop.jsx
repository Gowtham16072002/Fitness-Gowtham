// import React from "react";
// import "../Styles/AboutTop.css";
// import "../App.css";

// import img1 from "../assets/about1.jpg";
// import img4 from "../assets/about4.jpg";
// import YogaSection from "../assets/YogaSection.png";
// import ZumbaSection from "../assets/ZumbaSection.png";
// import { useNavigate } from "react-router-dom";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { ROUTES } from "../constants/routes";

// function AboutTop() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true
//     });
//   }, []);


//   return (
//     <section className="about">
//       <h2>About us</h2>

//       <p className="about-text">
//         Helping people achieve strength, flexibility, and confidence through gym
//         training, yoga, Zumba dance programs.
//       </p>

//       <div className="about-gallery" data-aos="zoom-in">
//         <div className="about-img">
//           <img src={img1} alt="gym" />
//           <p>Cardio Zone</p>
//         </div>

//         <div className="about-img">
//           <img src={YogaSection} alt="workout" />
//           <p>Yoga Section</p>
//         </div>

//         <div className="about-img">
//           <img src={ZumbaSection} alt="training" />
//           <p>Zumba Section</p>
//         </div>

//         <div className="about-img">
//           <img src={img4} alt="fitness" />
//           <p>Modern Gym Equipment</p>
//         </div>
//       </div>

//       <button onClick={() => { navigate(ROUTES.PROGRAMS) }} className="about-btn">
//         Explore Programs
//       </button>

//       <button onClick={() => { navigate(ROUTES.CONTACT) }} className="about-btn">Get Started</button>

//       <button className="about-btn">
//         Join Now
//       </button>

//       <button className="about-btn">Join Now</button>
//     </section>
//   );
// }

// export default AboutTop;




import React, { useEffect, useState } from "react";
import "../Styles/AboutTop.css";
import "../App.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import { API_BASE_URL } from "../config";

import img1 from "../assets/about1.jpg";
import img4 from "../assets/about4.jpg";
import YogaSection from "../assets/YogaSection.png";
import ZumbaSection from "../assets/ZumbaSection.png";

function AboutTop() {
  const defaultGallery = [
    { title: "Cardio Zone", image: img1 },
    { title: "Yoga Section", image: YogaSection },
    { title: "Zumba Section", image: ZumbaSection },
    { title: "Modern Gym Equipment", image: img4 },
  ];

  const defaultButtons = [
    { text: "Explore Programs" },
    { text: "Get Started" },
    { text: "Join Now" },
  ];

  const [aboutTop, setAboutTop] = useState({
    title: "About us",
    description:
      "Helping people achieve strength, flexibility, and confidence through gym training, yoga, Zumba dance programs.",
    gallery: defaultGallery,
    buttons: defaultButtons,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchAboutContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/about-content`);

        if (res.data.success && res.data.data?.aboutTop) {
          const dbAboutTop = res.data.data.aboutTop;

          setAboutTop({
            title: dbAboutTop.title || "About us",

            description:
              dbAboutTop.description ||
              "Helping people achieve strength, flexibility, and confidence through gym training, yoga, Zumba dance programs.",

            gallery: defaultGallery.map((item, index) => ({
              title: dbAboutTop.gallery?.[index]?.title || item.title,
              image: dbAboutTop.gallery?.[index]?.image || item.image,
            })),

            buttons:
              dbAboutTop.buttons?.length > 0
                ? dbAboutTop.buttons
                : defaultButtons,
          });
        }
      } catch (error) {
        console.log("About content fetch failed", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <section className="about">
      <h2>{aboutTop.title}</h2>

      <p className="about-text">{aboutTop.description}</p>

      <div className="about-gallery" data-aos="zoom-in">
        {aboutTop.gallery.map((item, index) => (
          <div className="about-img" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {aboutTop.buttons.map((btn, index) => (
        <button key={index} className="about-btn">
          {btn.text}
        </button>
      ))}
    </section>
  );
}

export default AboutTop;