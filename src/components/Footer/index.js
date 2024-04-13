import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer wow fadeIn mt-5"
      data-wow-delay="0.1s"
    >
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6">
            <div className="rounded p-4">
              <h1
                className="text-white text-uppercase mb-3"
                style={{ fontFamily: "Special-font-fr" }}
              >
                Chamonix
              </h1>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <h6
              className="section-title text-start text-uppercase mb-4"
              style={{ fontFamily: "Special-font-fr" }}
            >
              Contact
            </h6>
            <p className="mb-2" style={{ fontFamily: "Special-font-fr" }}>
              <i className="fa fa-map-marker-alt me-3"></i>Avenue de la Marche
              Verte, Ifrane, Morocco
            </p>
            <p className="mb-2" style={{ fontFamily: "Special-font-fr" }}>
              <i className="fa fa-phone-alt me-3"></i>+212 535 566 028
            </p>
            <p className="mb-2" style={{ fontFamily: "Special-font-fr" }}>
              <i className="fa fa-envelope me-3"></i>contact@lechamonix.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <small className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <small className="border-bottom" href="#">
                © Hotel Le Chamonix
              </small>
              , All rights reserved 2024
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
