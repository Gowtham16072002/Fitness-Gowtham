import React, { useEffect } from "react";
import "../Styles/WhyChooseUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUs({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!data) return null;

  return (
    <section className="why">
      <h1>{data.heading}</h1>

      <div className="why-container">
        {data.cards?.map((card, index) => (
          <div
            className="why-card"
            data-aos="zoom-in"
            data-aos-delay="200"
            key={index}
          >
            <i className={`fas ${card.icon}`}></i>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
