// Header.js
import React from "react";
import styles from "./Header.module.css"; // Import CSS module for styling

const Header = () => {
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="index.html"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 text-primary text-uppercase text-white">
              Le Chamonix
            </h1>
          </a>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <p className="mb-0">info@hotel.com</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <p className="mb-0">+212 535 566 028</p>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 text-primary text-uppercase">Chamonix</h1>
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
                <a href="index.html" className="nav-item nav-link active">
                  Accueil
                </a>
                <a href="about.html" className="nav-item nav-link">
                  À Propos
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a
                href="https://htmlcodex.com/hotel-html-template-pro"
                className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
              >
                Booker aujourd'hui<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
