// Carousel.js
import React from "react";
import carousel1 from "../../assets/images/carousel-1.jpg"; // Import images from assets folder
import carousel2 from "../../assets/images/Carousel2.jpg"; // Import images from assets folder
import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={carousel1} alt="hotel hallway" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                  LIVE THE LUXURY
                </h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown">
                  Discover the Elegant Luxury of Hotel Le Chamonix
                </h1>
                <Link
                  to="/web/guest/rooms"
                  className="btn py-md-3 px-md-5 me-3 animated slideInLeft"
                  style={{ background: "#05562b", color: "white" }}
                >
                  Check Rooms
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Imsage" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                  LIVE THE LUXURY
                </h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown">
                  Discover an Exceptional Luxury Hotel
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
