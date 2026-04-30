// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import YogaBefore from "../assets/YogaBefore.jpeg";
// import YogaAfter from "../assets/YogaAfter.png";
// import ZumbaBefore from "../assets/ZumbaBefore.png";
// import ZumbaAfter from "../assets/ZumbaAfter.png";
// import WLbefore from "../assets/WLbefore.png";
// import WLafter from "../assets/WLafter.png";
// import WLbefore2 from "../assets/WLbefore2.png";
// import WLafter2 from "../assets/WLafter2.png";
// import WGbefore from "../assets/WGbefore.png";
// import WGafter from "../assets/WGafter.png";
// import ZumbaBefore2 from "../assets/ZumbaBefore2.png";
// import ZumbaAfter2 from "../assets/ZumbaAfter2.png";

// import "swiper/css";
// import "../Styles/TransFormation.css";

// function TransFormation() {
//   return (
//     <section className="transformation">
//       <h2>Real Transformations From Our Members</h2>
//       <p className="top-para">
//         See how our gym, yoga, zumba, and dance programs help members achieve
//         their fitness goals and transform their lifestyle.
//       </p>

//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={30}
//         autoplay={{ delay: 2500 }}
//         loop={true}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         <SwiperSlide>
//           <div className="transform-card">
//             <img src={WLbefore} />
//             <br />
//             <h3 className="before">Before</h3>
//             <img src={WLafter} />
//             <h3 className="after">After</h3>
//             <h4>Weight Loss</h4>
//             <p>Strength & Weight Loss Transformation</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="transform-card">
//             <img src={YogaBefore} />
//             <br />
//             <h3 className="before">Before</h3>
//             <img src={YogaAfter} />
//             <h3 className="after">After</h3>
//             <h4>Yoga</h4>
//             <p>Yoga Flexibility & Wellness Transformation</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="transform-card">
//             <img src={ZumbaBefore} />
//             <br />
//             <h3 className="before">Before</h3>
//             <img src={ZumbaAfter} />
//             <h3 className="after">After</h3>
//             <h4>Zumba</h4>
//             <p>Zumba Fitness Transformation</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="transform-card">
//             <img src={ZumbaBefore2} />
//             <br />
//             <h3 className="before">Before</h3>
//             <img src={ZumbaAfter2} />
//             <h3 className="after">After</h3>
//             <h4>Zumba Dance</h4>
//             <p>Zumba Dance Fitness Transformation</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="transform-card">
//             <img src={WLbefore2} />
//             <br />
//             <h3 className="before">Before</h3>
//             <img src={WLafter2} />
//             <h3 className="after">After</h3>
//             <h4>Overall Fitness</h4>
//             <p>Complete Fitness Transformation</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="transform-card">
//             <img src={WGbefore} />
//             <br />
//             <h3 className="before">Before</h3>
//             <img src={WGafter} />
//             <h3 className="after">After</h3>
//             <h4>Weight Gain</h4>
//             <p>Strength & Weight Gain Transformation</p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }

// export default TransFormation;




import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

import YogaBefore from "../assets/YogaBefore.jpeg";
import YogaAfter from "../assets/YogaAfter.png";
import ZumbaBefore from "../assets/ZumbaBefore.png";
import ZumbaAfter from "../assets/ZumbaAfter.png";
import WLbefore from "../assets/WLbefore.png";
import WLafter from "../assets/WLafter.png";
import WLbefore2 from "../assets/WLbefore2.png";
import WLafter2 from "../assets/WLafter2.png";
import WGbefore from "../assets/WGbefore.png";
import WGafter from "../assets/WGafter.png";
import ZumbaBefore2 from "../assets/ZumbaBefore2.png";
import ZumbaAfter2 from "../assets/ZumbaAfter2.png";

import "swiper/css";
import "../Styles/TransFormation.css";
import { API_BASE_URL } from "../config";

function TransFormation() {
  const defaultData = {
    title: "Real Transformations From Our Members",
    description:
      "See how our gym, yoga, zumba, and dance programs help members achieve their fitness goals and transform their lifestyle.",
    cards: [
      {
        beforeImage: WLbefore,
        afterImage: WLafter,
        category: "Weight Loss",
        description: "Strength & Weight Loss Transformation",
      },
      {
        beforeImage: YogaBefore,
        afterImage: YogaAfter,
        category: "Yoga",
        description: "Yoga Flexibility & Wellness Transformation",
      },
      {
        beforeImage: ZumbaBefore,
        afterImage: ZumbaAfter,
        category: "Zumba",
        description: "Zumba Fitness Transformation",
      },
      {
        beforeImage: ZumbaBefore2,
        afterImage: ZumbaAfter2,
        category: "Zumba Dance",
        description: "Zumba Dance Fitness Transformation",
      },
      {
        beforeImage: WLbefore2,
        afterImage: WLafter2,
        category: "Overall Fitness",
        description: "Complete Fitness Transformation",
      },
      {
        beforeImage: WGbefore,
        afterImage: WGafter,
        category: "Weight Gain",
        description: "Strength & Weight Gain Transformation",
      },
    ],
  };

  const [transformation, setTransformation] = useState(defaultData);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/about-content`);

        if (res.data.success && res.data.data?.transformation) {
          const db = res.data.data.transformation;

          setTransformation({
            title: db.title || defaultData.title,
            description: db.description || defaultData.description,
            cards:
              db.cards?.length > 0
                ? db.cards.map((card, index) => ({
                  beforeImage: card.beforeImage || defaultData.cards[index]?.beforeImage || "",
                  afterImage: card.afterImage || defaultData.cards[index]?.afterImage || "",
                  category: card.category || "New Transformation",
                  description: card.description || "Transformation description",
                }))
                : defaultData.cards,
          });
        }
      } catch (error) {
        console.log("Transformation fetch failed", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <section className="transformation">
      <h2>{transformation.title}</h2>

      <p className="top-para">{transformation.description}</p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {transformation.cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="transform-card">
              <img src={card.beforeImage} alt={`${card.category} before`} />
              <br />
              <h3 className="before">Before</h3>

              <img src={card.afterImage} alt={`${card.category} after`} />
              <h3 className="after">After</h3>

              <h4>{card.category}</h4>
              <p>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TransFormation;