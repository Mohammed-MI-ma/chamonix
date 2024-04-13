// Header.js
import React from "react";
import styles from "./Header.module.css"; // Import CSS module for styling
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="index.html"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1
              className="m-0 text-primary text-uppercase text-white"
              style={{ fontSize: "30px", fontFamily: "Special-font-fr" }}
            >
              Le Chamonix
            </h1>
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope  text-success  me-2"></i>
                <p className="mb-0" style={{ fontFamily: "Special-font-fr" }}>
                  info@hotel.com
                </p>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-success me-2"></i>
                <p className="mb-0" style={{ fontFamily: "Special-font-fr" }}>
                  +212 535 566 028
                </p>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1
                className="m-0 text-primary text-uppercase text-white"
                style={{ fontSize: "30px", fontFamily: "Special-font-fr" }}
              >
                Le Chamonix
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <div
                  onClick={() => navigate("/")}
                  className="nav-item nav-link active"
                  style={{ fontFamily: "Primary-Regular-fr" }}
                >
                  Accueil
                </div>

                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
              </div>
              <div
                className="btn py-4 px-md-5 d-none d-lg-block"
                style={{
                  background: "#05562b",
                  color: "white",
                  fontFamily: "Special-font-fr",
                }}
                onClick={() => navigate("/rooms")}
              >
                Réserver maintenant<i className="fa fa-arrow-right ms-3"></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
