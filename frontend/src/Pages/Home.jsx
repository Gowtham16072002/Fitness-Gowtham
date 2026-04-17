import React, { useContext, useEffect, useState } from "react";
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import HomeMidsec from "./HomeMidsec";
import FooterAbove from "./FooterAbove";
import WhyChooseUs from "./WhyChooseUs";
import Program2 from "./Program2";
import TrainerSection from "./TrainerSection";
import Testimonials from "./Testimonials";
import { AuthContext } from "../Context/AuthContext";

function FitnessLanding() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
   !user && navigate("/login")
  useEffect(() => {
    fetchHomeContent();
  }, []);

  const fetchHomeContent = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/home-content");
      const result = await response.json();

      if (result.success) {
        setHomeData(result.data);
      }
    } catch (error) {
      console.error("Error fetching home content:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center", padding: "40px" }}>Loading...</h2>;
  }

  if (!homeData) {
    return <h2 style={{ textAlign: "center", padding: "40px" }}>No data found</h2>;
  }

  return (
    <div className="app">
      <section
        className="hero"
        style={{
          backgroundImage: homeData.hero?.backgroundImage
            ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${homeData.hero.backgroundImage})`
            : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <h1>{homeData.hero?.heading}</h1>

          <p>{homeData.hero?.description}</p>

          <div className="hero-btn-group">
            <button className="hero-btn">
              {homeData.hero?.primaryButtonText}
            </button>

            <button
              onClick={() => {
                navigate("/programs");
              }}
              className="hero-btn"
            >
              {homeData.hero?.secondaryButtonText}
            </button>
          </div>
        </div>
      </section>

      <section className="stats">
        {homeData.stats?.map((stat, index) => (
          <div className="stat" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <WhyChooseUs data={homeData.whyChooseUs} />
      <Program2 />
      <TrainerSection />
      <Testimonials />
      <HomeMidsec />
      <FooterAbove data={homeData.cta} />
    </div>
  );
}

export default FitnessLanding;