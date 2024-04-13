import React from "react";
import Carousel from "../../components/HeroSection";
import About from "../../components/About";
import VideoSection from "../../components/VideoSection";
import ServiceSection from "../../components/ServiceSection";

const Homepage = () => {
  return (
    <section>
      <Carousel />
      <About />
      <VideoSection />
      <ServiceSection />
    </section>
  );
};

export default Homepage;
