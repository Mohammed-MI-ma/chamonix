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
              Luxury Living
            </h6>
            <h1 className="text-white mb-4">
              Discover A Brand Luxurious Hotel
            </h1>
            <p className="text-white mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
              Our Rooms
            </a>
            <a href="" className="btn btn-light py-md-3 px-md-5">
              Book A Room
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
              onClick={() =>
                handlePlayButtonClick(
                  "https://www.youtube.com/embed/DWRcNpR6Kdc"
                )
              }
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setVideoSrc("")}
              ></button>
              <div className="embed-responsive embed-responsive-16by9">
                {videoSrc && (
                  <iframe
                    className="embed-responsive-item"
                    src={videoSrc}
                    allowFullScreen
                    title="video"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
