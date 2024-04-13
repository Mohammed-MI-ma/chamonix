import React from "react";

import about1 from "../../assets/images/about-1.jpg";
const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-uppercase">
              À propos de nous
            </h6>
            <h1 className="mb-4">
              Bienvenue à{" "}
              <span className=" text-uppercase" style={{ color: "#05562b" }}>
                Chamonix
              </span>
            </h1>
            <p className="mb-4">
              L'expérience à l'Hôtel L Chamonix est un équilibre parfait entre
              luxe et confort. Chaque instant est une rencontre avec l'élégance
              et le raffinement. Notre établissement vous accueille dans un
              environnement où chaque détail est pensé pour votre bien-être.
              Découvrez le charme de notre hôtel, où le temps semble suspendu et
              où chaque moment est une occasion de se ressourcer et de se
              détendre
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
                    <p className="mb-0">Chambres</p>
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
                    <p className="mb-0">Personnel</p>
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
                    <p className="mb-0">Clients</p>
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
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={about1}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-50 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={about1}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={about1}
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
