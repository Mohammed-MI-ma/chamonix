import React from "react";
import room1Image from "../../assets/images/room-1.jpg";
import room2Image from "../../assets/images/room-2.jpg";
import room3Image from "../../assets/images/room-3.jpg";
import WOW from "wowjs";

const RoomSection = () => {
  // Initialize WOW.js when the component mounts
  React.useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6
            className="section-title text-center  text-uppercase"
            style={{ color: "#05562b" }}
          >
            Chambres
          </h6>
          <h1 className="mb-5">
            Explorez
            <span className="text-uppercase" style={{ color: "#05562b" }}>
              &nbsp;Nos Chambres
            </span>
          </h1>
        </div>
        <div className="row g-4">
          {/* Room 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={room1Image} alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                  300 MAD/Nuit
                </small>
              </div>
              {/* Room details */}
              {/* Replace dynamic content as needed */}
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Individuelle</h5>
                  <div className="ps-2">
                    {/* Replace star ratings dynamically */}
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                  </div>
                </div>
                {/* Room features */}
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-success me-2"></i>1 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-success me-2"></i>1 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-success me-2"></i>Wifi
                  </small>
                </div>
                <p className="text-body mb-3">
                  {/* Replace room description dynamically */}
                  chambre individuelle offre une oasis de tranquillité et de
                  confort pour les voyageurs en solo. Avec son ambiance
                  accueillante et ses équipements modernes ...
                </p>
                <div className="d-flex justify-content-between">
                  <a>details</a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                    Réserver{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Room 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={room1Image} alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                  400 MAD/Nuit
                </small>
              </div>
              {/* Room details */}
              {/* Replace dynamic content as needed */}
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Double</h5>
                  <div className="ps-2">
                    {/* Replace star ratings dynamically */}
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                  </div>
                </div>
                {/* Room features */}
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-success me-2"></i>2 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-success me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-success me-2"></i>Wifi
                  </small>
                </div>
                <p className="text-body mb-3">
                  {/* Replace room description dynamically */}
                  chambre double offre un espace spacieux et confortable pour
                  les couples ou les amis voyageant ensemble. Dotée d'un lit
                  confortable et de commodités modernes....
                </p>
                <div className="d-flex justify-content-between">
                  <a className="btn btn-sm btn-success rounded py-2 px-4">
                    details
                  </a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4">
                    Réserver{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src={room3Image} alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                  600 MAD/Nuit
                </small>
              </div>
              {/* Room details */}
              {/* Replace dynamic content as needed */}
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">La Super Deluxe</h5>
                  <div className="ps-2">
                    {/* Replace star ratings dynamically */}
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                    <small className="fa fa-star text-success"></small>
                  </div>
                </div>
                {/* Room features */}
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-success me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-success me-2"></i>3 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-success me-2"></i>Wifi
                  </small>
                </div>
                <p className="text-body mb-3">
                  {/* Replace room description dynamically */}
                  La Super Deluxe est la quintessence du luxe et du confort.
                  Cette chambre spacieuse et élégamment aménagée offre une
                  expérience de séjour exceptionnelle....
                </p>
                <div className="d-flex justify-content-between">
                  <a className="btn btn-sm btn-success rounded py-2 px-4">
                    details
                  </a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                    Réserver{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
