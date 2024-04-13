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
            nos Services
          </h6>
          <h1 className="mb-5">
            Explorez nos{" "}
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
              <h5 className="mb-3">Chambres et Appartements</h5>
              <p className="text-body mb-0">
                Découvrez nos chambres et appartements luxueux conçus pour
                offrir le summum du confort et de la détente.
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
              <h5 className="mb-3">Restaurant & Gastronomie</h5>
              <p className="text-body mb-0">
                Laissez-vous séduire par une expérience gastronomique
                exceptionnelle dans notre restaurant primé.
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
              <h5 className="mb-3">Spa & Bien-être</h5>
              <p className="text-body mb-0">
                Accordez-vous une pause bien méritée et offrez-vous une escapade
                de relaxation totale dans notre spa haut de gamme.
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
              <h5 className="mb-3">Installations Sportives & Loisirs</h5>
              <p className="text-body mb-0">
                Profitez d'une gamme complète d'installations sportives et de
                loisirs pour rester actif et divertir toute la famille.
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
              <h5 className="mb-3">Événements & Réceptions</h5>
              <p className="text-body mb-0">
                Organisez des événements spectaculaires et des réceptions
                inoubliables dans nos espaces élégants et polyvalents.
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
              <h5 className="mb-3">Services Complémentaires</h5>
              <p className="text-body mb-0">
                De la conciergerie 24 heures sur 24 au service de blanchisserie
              </p>
            </div>
          </div>
          {/* Repeat the above structure for each service */}
          {/* You can customize the services and their icons accordingly */}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
