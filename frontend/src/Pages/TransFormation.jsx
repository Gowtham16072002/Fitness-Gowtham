import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

function TransFormation() {
  return (
    <section className="transformation">
      <h2>Real Transformations From Our Members</h2>
      <p className="top-para">
        See how our gym, yoga, zumba, and dance programs help members achieve
        their fitness goals and transform their lifestyle.
      </p>

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
        <SwiperSlide>
          <div className="transform-card">
            <img src={WLbefore} />
            <br />
            <h3 className="before">Before</h3>
            <img src={WLafter} />
            <h3 className="after">After</h3>
            <h4>Weight Loss</h4>
            <p>Strength & Weight Loss Transformation</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform-card">
            <img src={YogaBefore} />
            <br />
            <h3 className="before">Before</h3>
            <img src={YogaAfter} />
            <h3 className="after">After</h3>
            <h4>Yoga</h4>
            <p>Yoga Flexibility & Wellness Transformation</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform-card">
            <img src={ZumbaBefore} />
            <br />
            <h3 className="before">Before</h3>
            <img src={ZumbaAfter} />
            <h3 className="after">After</h3>
            <h4>Zumba</h4>
            <p>Zumba Fitness Transformation</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform-card">
            <img src={ZumbaBefore2} />
            <br />
            <h3 className="before">Before</h3>
            <img src={ZumbaAfter2} />
            <h3 className="after">After</h3>
            <h4>Zumba Dance</h4>
            <p>Zumba Dance Fitness Transformation</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform-card">
            <img src={WLbefore2} />
            <br />
            <h3 className="before">Before</h3>
            <img src={WLafter2} />
            <h3 className="after">After</h3>
            <h4>Overall Fitness</h4>
            <p>Complete Fitness Transformation</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform-card">
            <img src={WGbefore} />
            <br />
            <h3 className="before">Before</h3>
            <img src={WGafter} />
            <h3 className="after">After</h3>
            <h4>Weight Gain</h4>
            <p>Strength & Weight Gain Transformation</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default TransFormation;
