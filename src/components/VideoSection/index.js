import React, { useState } from "react";

const VideoSection = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const handlePlayButtonClick = (src) => {
    setVideoSrc(src);
  };

  return (
    <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
      <div className="row g-0">
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5">
            <h6 className="section-title text-start text-white text-uppercase mb-3">
              EXPERIENCE LUXURY
            </h6>
            <h1 className="text-white mb-4">
              Discover a Prestigious Luxury Hotel
            </h1>
            <p className="text-white mb-4">
              Welcome to our luxury oasis where comfort and elegance come
              together to create an unforgettable experience. Immerse yourself
              in the refined ambiance of our hotel, where every detail is
              carefully crafted to meet your most demanding needs.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="video"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
