import React from "react";

const RoomItem = ({
  roomImage,
  room,
  key,
  roomType,
  roomPrice,
  numberOfBeds,
  numberOfBaths,
  hasWifi,
  description,
  setOpenReservationModal,
  selectRoom,
}) => {
  const handleReservation = () => {
    selectRoom({
      id: key,
      roomPrice: roomPrice,
      numberOfBeds: numberOfBeds,
      description: description,
      roomType: roomType,
    }); // Dispatch action to select room
    setOpenReservationModal(true);
  };
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
      <div className="room-item shadow rounded overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={roomImage} alt="" />
          <small className="position-absolute start-0 top-100 translate-middle-y bg-success text-white rounded py-1 px-3 ms-4">
            {roomPrice}
          </small>
        </div>
        <div className="p-4 mt-2">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{roomType}</h5>
            <div className="ps-2">
              <small className="fa fa-star text-success"></small>
              <small className="fa fa-star text-success"></small>
              <small className="fa fa-star text-success"></small>
              <small className="fa fa-star text-success"></small>
              <small className="fa fa-star text-success"></small>
            </div>
          </div>
          <div className="d-flex mb-3">
            <small className="border-end me-3 pe-3">
              <i className="fa fa-bed text-success me-2"></i>
              {numberOfBeds} Bed
            </small>
            <small className="border-end me-3 pe-3">
              <i className="fa fa-bath text-success me-2"></i>
              {numberOfBaths} Bath
            </small>
            {hasWifi && (
              <small>
                <i className="fa fa-wifi text-success me-2"></i>Wifi
              </small>
            )}
          </div>
          <p className="text-body mb-3">{description}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-dark rounded py-2 px-4"
              onClick={() => {
                handleReservation(true);
              }}
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
