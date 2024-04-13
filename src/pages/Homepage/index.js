import React from "react";
import Carousel from "../../components/HeroSection";
import Booking from "../../components/Booking";
import About from "../../components/About";
import RoomSection from "../../components/RoomSection";
import VideoSection from "../../components/VideoSection";
import ServiceSection from "../../components/ServiceSection";

const Homepage = () => {
  return (
    <section>
      <Carousel />
      <Booking />
      <About />
      <RoomSection />
      <VideoSection />
      <ServiceSection />
    </section>
  );
};

export default Homepage;
