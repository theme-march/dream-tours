import React, { useState } from "react";

const ServiceAddw = () => {
  const [serviceAdd, setServiceAdd] = useState({});

  const getAdservicedata = (e) => {
    setServiceAdd({
      ...serviceAdd,
      status: 1,
      [e.target.name]: e.target.value,
    });
  };

  const handlServiceadd = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/serviceadd`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
      });
    console.log("ok service add");
  };

  return (
    <div>
      <p className="fw-bolder fs-4 ms-2">Add New Service</p>
      <form onSubmit={handlServiceadd}>
        <div className="mb-3 row me-4">
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Booking Service Title
            </label>
            <input
              type="text"
              className="form-control"
              onBlur={getAdservicedata}
              name="servicetitle"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Price Add
            </label>
            <input
              type="text"
              className="form-control"
              onBlur={getAdservicedata}
              name="price"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Service Images URL
            </label>
            <input
              type="text"
              className="form-control"
              onBlur={getAdservicedata}
              required
              name="serviceimg"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tours Day / Tours Time
            </label>
            <input
              type="text"
              className="form-control"
              onBlur={getAdservicedata}
              required
              name="tourday"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              onBlur={getAdservicedata}
              name="servicedescription"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary ms-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ServiceAddw;
