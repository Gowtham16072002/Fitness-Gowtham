import React, { useEffect, useState } from "react";
import "../Styles/Services.css";
import FooterAbove from "./FooterAbove";
import ServiceDetails from "./ServiceDetails";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { serviceService } from "../services/serviceService";

function Services() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await serviceService.getServiceContent();
        if (res?.data?.success) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Service fetch error:", err);
      }
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <section className="services">
        <div className="service-header">
          <h2>{data.hero.title}</h2>
        </div>

        <div className="main-div">
          <div className="left-div">
            <div className="dL1 left"></div>

            {data.hero.leftTexts.map((item, i) => (
              <div key={i} className={`dL${i + 2} left`}>
                <h6>{item.text}</h6>
              </div>
            ))}
          </div>

          <div className="center-div">
            <div className="dC1">
              <p>{data.hero.description}</p>
            </div>
            <div className="dC2"></div>
            <div className="dC3"></div>
          </div>

          <div className="right-div">
            {data.hero.rightTexts.map((item, i) => (
              <div key={i} className={`dR${i + 1} right`}>
                <h6>{item.text}</h6>
              </div>
            ))}
            <div className="dR3 right"></div>
          </div>
        </div>

        <div className="service-btn-parent">
          <button
            onClick={() => navigate(ROUTES.CONTACT)}
            className="service-btn"
          >
            {data.hero.buttonText}
          </button>
        </div>
      </section>

      <ServiceDetails data={data} />
      <FooterAbove />
    </div>
  );
}

export default Services;
