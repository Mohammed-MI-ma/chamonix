import React from "react";

const ServiceSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6
            className="section-title text-center text-uppercase"
            style={{ color: "#05562b" }}
          >
            Our Services
          </h6>
          <h1 className="mb-5">
            Explore Our{" "}
            <span className="text-uppercase" style={{ color: "#05562b" }}>
              Services
            </span>
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded" href="">
              <div className="service-icon bg-transparent border rounded p-1">
                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                  <i className="fa fa-hotel fa-2x text-secondary"></i>
                </div>
              </div>
              <h5 className="mb-3">Rooms and Apartments</h5>
              <p className="text-body mb-0">
                Discover our luxurious rooms and apartments designed to offer
                the ultimate in comfort and relaxation.
              </p>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded" href="">
              <div className="service-icon bg-transparent border rounded p-1">
                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                  <i className="fa fa-hotel fa-2x text-secondary"></i>
                </div>
              </div>
              <h5 className="mb-3">Restaurant & Gastronomy</h5>
              <p className="text-body mb-0">
                Indulge in an exceptional culinary experience at our
                award-winning restaurant.
              </p>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded" href="">
              <div className="service-icon bg-transparent border rounded p-1">
                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                  <i className="fa fa-hotel fa-2x text-secondary"></i>
                </div>
              </div>
              <h5 className="mb-3">Spa & Wellness</h5>
              <p className="text-body mb-0">
                Treat yourself to a well-deserved break and enjoy a total
                relaxation getaway at our upscale spa.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
