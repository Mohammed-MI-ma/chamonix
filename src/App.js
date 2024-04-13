import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RoomSection from "./components/RoomSection";
import ServiceSection from "./components/ServiceSection";
import VideoSection from "./components/VideoSection";
import { FontsConfig } from "./fontsConfig";

import { useEffect, useState } from "react";
import { loadFonts } from "./services/functions/functions";
import Loader from "./components/Loader";

import style from "./App.module.css";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([loadFonts(FontsConfig)]);
      } catch (error) {
        console.error("Error while preparing:", error);
      } finally {
        setLoading(false);
        setAppIsReady(true);
      }
    };

    fetchData();
  }, []);
  if (!appIsReady) {
    return <Loader isLoading={loading} />;
  }

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <Header />
        <Navbar />

        <Carousel />
        <Booking />
        <About />
        <RoomSection />
        <VideoSection />
        <ServiceSection />

        <Footer />
      </div>
    </>
  );
}

export default App;
