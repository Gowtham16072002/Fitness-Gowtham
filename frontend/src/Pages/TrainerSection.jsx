// import React from "react";
// import "../Styles/TrainerSection.css";
// import Trainer1 from "../assets/Trainer1.avif";
// import ZumbaTrainer from "../assets/ZumbaTrainer.png";
// import YogaMaleTrainer from "../assets/YogaMaleTrainer.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// function TrainerSection() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div>
//       <section className="trainers">
//         <h2 className="trainer-title">Our Expert Trainers</h2>

//         <div className="trainer-container">
//           <div className="trainer" data-aos="zoom-in" data-aos-delay="100">
//             <img src={Trainer1} alt="Trainer 1" />
//             <h3>Emilia clarke</h3>
//             <p>Strength & Conditioning Specialist</p>
//             <p>NASM Certified</p>
//             <p>8+ Years Experience</p>
//           </div>

//           <div className="trainer" data-aos="zoom-in" data-aos-delay="300">
//             <img src={YogaMaleTrainer} alt="Trainer 2" />
//             <h3>Michael Lee</h3>
//             <p>Yoga Trainer</p>
//             <p>NASM Certified</p>
//             <p>8+ Years Experience</p>
//           </div>

//           <div className="trainer" data-aos="zoom-in" data-aos-delay="500">
//             <img src={ZumbaTrainer} alt="Trainer 3" />
//             <h3>Jennifer</h3>
//             <p>Zumaba Trainer</p>
//             <p>NASM Certified</p>
//             <p>8+ Years Experience</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default TrainerSection;



import React, { useEffect, useState } from "react";
import "../Styles/TrainerSection.css";
import axios from "axios";
import { API_BASE_URL } from "../config";

import AOS from "aos";
import "aos/dist/aos.css";

function TrainerSection() {
  const [trainerData, setTrainerData] = useState({
    hero: {
      title: "Our Expert Trainers",
      subtitle: "",
    },
    displayLimit: 3,
    trainers: [],
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    fetchTrainerContent();
  }, []);

  const fetchTrainerContent = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/trainer-content`);

      if (res.data.success) {
        setTrainerData(res.data.data);
      }
    } catch (error) {
      console.log("Failed to fetch trainer content");
    }
  };

  return (
    <section className="trainers">
      <h2 className="trainer-title">{trainerData.hero.title}</h2>

      {trainerData.hero.subtitle && (
        <p className="trainer-subtitle">{trainerData.hero.subtitle}</p>
      )}

      <div className="trainer-container">
        {trainerData.trainers
          .slice(0, trainerData.displayLimit || 3)
          .map((trainer, index) => (
            <div
              className="trainer"
              key={trainer._id || index}
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 150}
            >
              <img src={trainer.image} alt={trainer.name} />

              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
              <p>{trainer.certificate}</p>
              <p>{trainer.experience}</p>
              <p className="trainer-specialty">{trainer.specialty}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default TrainerSection;