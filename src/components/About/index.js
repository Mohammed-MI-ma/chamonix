import React from "react";

import about1 from "../../assets/images/about-1.jpg";
import DSC07803 from "../../assets/images/DSC07803.jpg";
import DSC07717 from "../../assets/images/DSC07717.jpg";
import DSC07919 from "../../assets/images/DSC07919.jpg";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-uppercase">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to{" "}
              <span className=" text-uppercase" style={{ color: "#05562b" }}>
                Chamonix
              </span>
            </h1>
            <p className="mb-4">
              The experience at Hotel L Chamonix is a perfect balance between
              luxury and comfort. Every moment is an encounter with elegance and
              refinement. Our establishment welcomes you in an environment where
              every detail is designed for your well-being. Discover the charm
              of our hotel, where time seems to stand still and every moment is
              an opportunity to recharge and relax.
            </p>
            <div className="row g-3 pb-4">
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="border rounded p-1">
                  <div className="border rounded text-center p-4">
                    <i
                      className="fa fa-hotel fa-2x  mb-2"
                      style={{ color: "#05562b" }}
                    ></i>
                    <h2 className="mb-1" data-toggle="counter-up">
                      180
                    </h2>
                    <p className="mb-0">Rooms</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="border rounded p-1">
                  <div className="border rounded text-center p-4">
                    <i
                      className="fa fa-users-cog fa-2x mb-2"
                      style={{ color: "#05562b" }}
                    ></i>
                    <h2 className="mb-1" data-toggle="counter-up">
                      120
                    </h2>
                    <p className="mb-0">Staff</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="border rounded p-1">
                  <div className="border rounded text-center p-4">
                    <i
                      className="fa fa-users fa-2x  mb-2"
                      style={{ color: "#05562b" }}
                    ></i>
                    <h2 className="mb-1" data-toggle="counter-up">
                      2000
                    </h2>
                    <p className="mb-0">Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.1s"
                  src={about1}
                  style={{ marginTop: "25%" }}
                  alt="About 1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={DSC07919}
                  alt="About 1"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-50 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={DSC07717}
                  alt="About 1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={DSC07803}
                  alt="About 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
