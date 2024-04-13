import React from "react";
import styles from "./Header.module.css"; // Import CSS module for styling
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button } from "antd";
import img from "../../assets/images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <div
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <Avatar
              src={img}
              style={{
                verticalAlign: "middle",
              }}
              size="large"
            />
            &nbsp;
            <h1
              className="m-0 text-primary text-uppercase text-white"
              style={{ fontSize: "30px", fontFamily: "Special-font-fr" }}
            >
              Chamonix
            </h1>
          </div>
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
            <div
              onClick={() => navigate("/")}
              className="navbar-brand d-block d-lg-none"
            >
              <h1
                className="m-0 text-primary text-uppercase text-white"
                style={{ fontSize: "20px", fontFamily: "Special-font-fr" }}
              >
                <Avatar
                  style={{
                    verticalAlign: "middle",
                  }}
                  size="large"
                  src={img}
                ></Avatar>{" "}
                Chamonix
              </h1>
            </div>
            <Button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <BiMenuAltRight size={"large"} />
            </Button>
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
                  Home
                </div>

                <div
                  onClick={() => navigate("web/guest/rooms")}
                  className="nav-item nav-link active"
                  style={{ fontFamily: "Primary-Regular-fr" }}
                >
                  {" "}
                  Our Rooms
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
