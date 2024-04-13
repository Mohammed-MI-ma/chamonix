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
              VIVRE LE LUXE
            </h6>
            <h1 className="text-white mb-4">
              Découvrez un Hôtel de Luxe Prestigieux
            </h1>
            <p className="text-white mb-4">
              Bienvenue dans notre oasis de luxe où le confort et l'élégance se
              rencontrent pour créer une expérience inoubliable. Imprégnez-vous
              de l'ambiance raffinée de notre hôtel, où chaque détail est
              soigneusement pensé pour répondre à vos besoins les plus
              exigeants.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/shorts/s3OKkYfW5oU"
              data-bs-target="#videoModal"
              onClick={() =>
                handlePlayButtonClick(
                  "https://www.youtube.com/shorts/s3OKkYfW5oU"
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
