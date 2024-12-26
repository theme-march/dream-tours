import React from "react";
import { useHistory, useParams } from "react-router";
import useDatabase from "../../hooks/useDatabase";
import "./ServiceBookDetals.css";
import { useForm } from "react-hook-form";
import useAuth from "../../context/useAuth";
const ServiceBookDetals = () => {
  const { bookserviceid } = useParams();
  const { bookstitle } = useParams();
  const history = useHistory();
  const { servicesAll, dataLoadTime, booktourslist } = useDatabase();
  const { user } = useAuth();

  const myOrder = servicesAll?.find(
    (services) => services._id === bookserviceid
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userOldBookList = booktourslist.find(
      (booktours) =>
        booktours.email === data.email &&
        booktours.bookserviceid === data.bookserviceid
    );
    if (userOldBookList) {
      alert("This Booking Serviceyou are allready add");
    } else {
      fetch(`http://localhost:5000/booktours`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          reset();
        })
        .finally(() => {
          history.push(`/home`);
        });
    }
  };

  return (
    <div className="ser-book-gap-d">
      {dataLoadTime ? (
        <div className="row my-5">
          <div className="spinner-border text-success mx-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="banner-s-s">
            <img
              className="service-banner w-100"
              src={myOrder?.serviceimg}
              alt=""
            />
            <div className="container ">
              <div className="text-center py-5">
                <p className="fw-bolder fs-1">{myOrder?.servicetitle}</p>
                <h4 className="fw-bolder">
                  {myOrder?.servicedescription.slice(0, 50)}
                  {"...."}
                </h4>
                <h1 className="text-white fw-bolder">BDT {myOrder?.price}</h1>
              </div>
            </div>
          </div>
          <div className="section-my-6">
            <div className="container ">
              <div className="row">
                <div className="col-md-8 col-12">
                  <h1 className="fw-bolder">Tour Details</h1>
                  <p> {myOrder?.servicedescription}</p>
                  <div>
                    <h1 className="fw-bolder pt-5">Tour Plan</h1>
                    <p>
                      Morbi ut nisl at metus molestie mollis semper a magna. Ut
                      pellentesque tempus risus, ut dignissim arcu dictum ut.
                      Etiam quis turpis sodales, tempor ex quis, facilisis
                      purus. Nullam tempus turpis vel tortor varius lacinia.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Donec risus ex,
                      semper sed rhoncus ut, bibendum a ligula. Morbi at enim
                      vel ipsum euismod suscipit eget sed ligula. Quisque id
                      aliquet enim, quis tempus risus. Etiam hendrerit finibus
                      elit eu vulputate. Phasellus faucibus metus sit amet
                      blandit bibendum. Nulla facilisi. Suspendisse potenti.
                      Nullam a ipsum iaculis, imperdiet mauris eu, malesuada
                      dui. Vestibulum iaculis congue enim, ac sodales felis
                      rhoncus vitae. Quisque molestie mi mi, vestibulum
                      consequat mi ornare ut. Suspendisse faucibus nec odio eu
                      blandit.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <h1 className="fw-bolder pb-4">
                    {" "}
                    <i
                      aria-hidden="true"
                      className="far fa-hand-point-right text-success"
                    ></i>{" "}
                    Book This Tour
                  </h1>
                  <div className="card p-3 py-5 book-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        defaultValue="padding"
                        type="hidden"
                        {...register("status", { required: true })}
                      />
                      <input
                        defaultValue={bookserviceid}
                        type="hidden"
                        {...register("bookserviceid", { required: true })}
                      />
                      <input
                        defaultValue={bookstitle}
                        {...register("bookservicetitle")}
                        type="text"
                        placeholder="Booking list"
                        aria-label=".form-control-lg example"
                        required
                        className="form-control form-control-lg border-0"
                      />
                      {errors.bookservicetitle && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      <br />
                      <br />
                      <input
                        defaultValue={user.displayName}
                        {...register("name", { required: true })}
                        className="form-control form-control-lg border-0"
                        type="text"
                        placeholder="Name"
                        aria-label=".form-control-lg example"
                      />
                      {errors.name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      <br />
                      <br />

                      <input
                        defaultValue={user.email}
                        className="form-control form-control-lg border-0"
                        type="text"
                        placeholder="email"
                        aria-label=".form-control-lg example"
                        {...register("email", { required: true })}
                      />
                      {/* errors will return when field validation fails  */}
                      {errors.email && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      <br />
                      <br />
                      <input
                        className="form-control form-control-lg border-0 "
                        type="number"
                        placeholder="Phone"
                        aria-label=".form-control-lg example"
                        {...register("phone", { required: true })}
                      />
                      {/* errors will return when field validation fails  */}
                      {errors.phone && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      <br />
                      <br />
                      <textarea
                        className="form-control form-control-lg border-0"
                        type="text"
                        placeholder="Pick-up Address"
                        aria-label=".form-control-lg example"
                        {...register("address", { required: true })}
                      />
                      {/* errors will return when field validation fails  */}
                      {errors.address && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      <br />
                      <br />
                      {/* <input type="submit" /> */}
                      <button type="submit" className="book-btn">
                        Book Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBookDetals;
