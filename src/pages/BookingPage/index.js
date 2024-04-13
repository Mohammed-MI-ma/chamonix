import React, { useState } from "react";
import Booking from "../../components/Booking";
import room from "../../assets/images/room-2.jpg";
import room1 from "../../assets/images/room-1.jpg";
import room3 from "../../assets/images/room-3.jpg";
import { Drawer, message } from "antd";

const BookingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div
          class="container-fluid page-header mb-5 p-0"
          style={{
            backgroundImage: `url(${room})`,
            fontFamily: "Special-font-fr",
          }}
        >
          <div class="container-fluid page-header-inner py-5">
            <div class="container text-center pb-5">
              <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                Vivre le Luxe
              </h6>
              <h1 class="display-3 text-white mb-3 animated slideInDown">
                Chambres
              </h1>
            </div>
          </div>
        </div>
        <Booking />
        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 class="section-title text-center text-uppercase">chambres</h6>
              <h1 class="mb-5">
                Découvrir Nos{" "}
                <span
                  class="text-uppercase"
                  style={{ color: "rgb(5, 86, 43)" }}
                >
                  Chambres
                </span>
              </h1>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room3} alt="" />
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Nuit
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Junior Suite</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room} alt="" />
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Executive Suite</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room} alt="" />
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Executive Suite</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        href=""
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        href=""
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        href=""
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room1} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Super Deluxe</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        href=""
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Junior Suite</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={setOpen}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="room-item shadow rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src={room3} alt="" />{" "}
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
                      $100/Night
                    </small>
                  </div>
                  <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                      <h5 class="mb-0">Executive Suite</h5>
                      <div class="ps-2">
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                        <small class="fa fa-star text-success"></small>
                      </div>
                    </div>
                    <div class="d-flex mb-3">
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bed text-success me-2"></i>3 Bed
                      </small>
                      <small class="border-end me-3 pe-3">
                        <i class="fa fa-bath text-success me-2"></i>2 Bath
                      </small>
                      <small>
                        <i class="fa fa-wifi text-success me-2"></i>Wifi
                      </small>
                    </div>
                    <p class="text-body mb-3">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <div class="d-flex justify-content-between">
                      <a
                        class="btn btn-sm btn-success rounded py-2 px-4"
                        href=""
                      >
                        Details
                      </a>
                      <a
                        class="btn btn-sm btn-dark rounded py-2 px-4"
                        href=""
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        closable
        placement="right"
        title={null}
        width={"500px"}
        open={open}
        onClose={() => setOpen(false)}
      >
        {" "}
        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6
                class="section-title text-center  text-uppercase"
                style={{ color: "rgb(5, 86, 43)" }}
              >
                Réservation de chambre
              </h6>
              <h1 class="mb-5">
                Réservez une{" "}
                <span
                  class=" text-uppercase"
                  style={{ color: "rgb(5, 86, 43)" }}
                >
                  chambre de luxe
                </span>
              </h1>{" "}
            </div>
            <div class="row g-5">
              <div class="">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="message">Commentaires</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn  w-100 py-3"
                        style={{
                          backgroundColor: "rgb(5, 86, 43)",
                          color: "white",
                        }}
                        onClick={() =>
                          message.success("reservation faite avec succes")
                        }
                      >
                        Réserver à 100MAD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </Drawer>
    </>
  );
};

export default BookingPage;
