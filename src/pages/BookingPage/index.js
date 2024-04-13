import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Booking from "../../components/Booking";
import room from "../../assets/images/room-2.jpg";
import suite from "../../assets/images/suite.jpg";
import double from "../../assets/images/double.jpg";
import dayjs from "dayjs";
import triple from "../../assets/images/triple.jpg";
import single from "../../assets/images/single.jpg";

import { DatePicker, Drawer, message } from "antd";
import RoomItem from "../../components/RoomItem";
import { setReservation } from "../../reducers/applicationService/booking/bookingSlice";

const BookingPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dateFormat = "YYYY/MM/DD";

  const currentlyReservation = useSelector(
    (state) => state.booking.reservation
  ); // Assuming you have a slice named 'reservation' and 'selectedRooms' in your Redux state
  const selectRoomX = (room) => {
    dispatch(setReservation({ ...currentlyReservation, room: room }));
  };
  const setOpenReservationModal = () => {
    setOpen(true);
  };
  const roomsData = [
    {
      id: "1",
      roomType: "Single Room",
      roomImage: single,
      roomPrice: "MAD100/Night",
      numberOfBeds: 1,
      numberOfBaths: 1,
      hasWifi: true,
      description:
        "Ideal for solo travelers or cozy stays.Includes one comfortable bed and a private bathroom.Perfect for those seeking privacy and comfort at an affordable rate.",
      setOpenReservationModal: () => setOpenReservationModal(),
    },
    {
      id: "2",

      roomType: "Double Room",
      roomImage: double,
      roomPrice: "MAD150/Night",
      numberOfBeds: 2,
      numberOfBaths: 1,
      hasWifi: true,
      description:
        "Suitable for couples or small groups.Features a spacious room with one large bed and a private bathroom",
      setOpenReservationModal: () => setOpenReservationModal(),
    },
    {
      id: "3",

      roomType: "Triple Room",
      roomImage: triple,
      roomPrice: "MAD200/Night",
      numberOfBeds: 3,
      numberOfBaths: 1,
      hasWifi: true,
      description:
        "Great for families or small groups of friends.Provides three comfortable beds and a private bathroom",
      setOpenReservationModal: () => setOpenReservationModal(),
    },
    {
      id: "4",
      roomType: "Suite",
      roomImage: suite,
      roomPrice: "MAD300/Night",
      numberOfBeds: 2,
      numberOfBaths: 2,
      hasWifi: true,
      description:
        "Luxury accommodation for discerning guests.Offers a spacious and elegantly furnished suite with separate living and sleeping areas.Includes two bedrooms, two bathrooms, and upscale amenities for an indulgent stay experience.",
      setOpenReservationModal: () => setOpenReservationModal(),
    },
  ];
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
                Live the luxe
              </h6>
              <h1 class="display-3 text-white mb-3 animated slideInDown">
                Rooms
              </h1>
            </div>
          </div>
        </div>
        <div class="container-xxl py-5">
          <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 class="section-title text-center text-uppercase">rooms</h6>
              <h1 class="mb-5">
                Explore our{" "}
                <span
                  class="text-uppercase"
                  style={{ color: "rgb(5, 86, 43)" }}
                >
                  rooms
                </span>
              </h1>
            </div>
            <div class="row g-4">
              {roomsData.map((room, index) => (
                <RoomItem
                  key={index}
                  {...room}
                  selectRoom={selectRoomX} // Dispatch action to select room
                />
              ))}{" "}
            </div>{" "}
          </div>{" "}
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
                You are about to book
              </h6>
              <h1 class="mb-5">
                <span
                  class=" text-uppercase"
                  style={{ color: "rgb(5, 86, 43)" }}
                >
                  {currentlyReservation.room.roomType}
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
                        <label for="name">Full Name</label>
                      </div>
                    </div>{" "}
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Phone</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <small>Period from</small>
                        <DatePicker
                          size="large"
                          style={{
                            width: "100%",
                            fontFamily: "Primary-Regular-fr",
                          }}
                          defaultValue={dayjs(
                            new Date().toISOString(),
                            dateFormat
                          )}
                          format={dateFormat}
                        />
                      </div>
                    </div>{" "}
                    <div class="col-md-6">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <small>To</small>
                        <DatePicker
                          size="large"
                          style={{
                            width: "100%",
                            fontFamily: "Primary-Regular-fr",
                          }}
                          defaultValue={dayjs(
                            new Date().toISOString(),
                            dateFormat
                          )}
                          format={dateFormat}
                        />
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
                    </div>{" "}
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="email">How many people</label>
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
                        <label for="message">Comments</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn  w-100 py-3"
                        style={{
                          backgroundColor: "rgb(5, 86, 43)",
                          color: "white",
                        }}
                        onClick={() => message.success("Reservation done")}
                      >
                        confirm {currentlyReservation?.room.roomPrice}
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
