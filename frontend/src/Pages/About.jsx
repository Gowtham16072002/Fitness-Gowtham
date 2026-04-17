import React from "react";
import MissionVision from "./MissionVision";
import AboutTop from "./AboutTop";
import CommunitySection from "./CommunitySection";
import TrainerSection from "./TrainerSection";
import Testimonials from "./Testimonials";
import TransFormation from "./TransFormation";

function About() {
  return (
    <div>
      <AboutTop />
      <MissionVision />
      <TrainerSection />
      <Testimonials />
      <TransFormation />
      <CommunitySection />
    </div>
  )
}

export default About;
