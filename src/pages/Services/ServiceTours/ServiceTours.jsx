import React from "react";
import { useHistory } from "react-router";
import "./ServiceTours.css";

const ServiceTours = ({ services }) => {
  const historys = useHistory();

  const bookingHandler = () => {
    historys.push(`/bookservice/${services?._id}/${services?.servicetitle}`);
  };

  /*   Animation add
  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" */
  return (
    <div className="cols">
      <div
        className="card h-100 shadow-sm position-relative"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="position-absolute top-0 start-50 translate-middle-x">
          <b type="button" className="btn btn-success position-relative">
            BDT {services.price} TK
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill"
              fill="#212529"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </b>
        </div>
        <img
          src={services?.serviceimg}
          className="card-img-top w-100  h-50"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title fw-bold service-title-hover">
            {services?.servicetitle.slice(0, 35)}
          </h5>
          <p className="card-text ">
            {services?.servicedescription.slice(0, 150)}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">{services?.tourday}</small>
          <button
            className="btn btn-outline-success btn-sm "
            onClick={bookingHandler}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTours;
