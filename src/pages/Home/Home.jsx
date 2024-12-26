import React from "react";
import useDatabase from "../../hooks/useDatabase";
import ServiceBgImg from "../Services/ServiceBgImg/ServiceBgImg";
import ServiceTours from "../Services/ServiceTours/ServiceTours";
import Banner from "../ShareitPage/Banner/Banner";
import Slider from "../ShareitPage/Slider/Slider";
import "./Home.css";

const Home = () => {
  const { servicesAll, dataLoadTime } = useDatabase();

  return (
    <div className="">
      <div>
        <Slider></Slider>
      </div>
      <div className="bg-banner">
        <Banner></Banner>
      </div>
      <div className="container">
        <div className="section-gap">
          <h1 className="fs-h1 fw-bolder  text-color-g">Our Destinations</h1>
          <div className="row row-cols-lg-2 row-cols-1 g-4">
            <div className="cols ">
              <ServiceBgImg></ServiceBgImg>
            </div>
            <h2 className="fs-4 bottom-0">
              Coming soon more Destinations option.....! Enjoy your life
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-gap">
          <div className=" d-flex justify-content-center">
            <h1 className="w-50 p-3 fw-bolder bg-success  text-center text-white">
              Why Choose ! DreamTours..
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 text-center border-0">
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title text-uppercase text-success fw-bold fs-4">
                    month offter
                  </h5>
                  <p className="card-text">
                    Tiny House People has 44944 members. This is a group for
                    people researching and/or building tiny houses, people who
                    are just interested in the concept..
                  </p>
                  <hr className="hr-style" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title text-uppercase text-success fw-bold fs-4">
                    local company
                  </h5>
                  <p className="card-text">
                    100%of your mony spent goes dirctly to the locals .no
                    commssion to the foreign agencies online of offline
                  </p>
                  <hr className="hr-style" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title text-uppercase text-success fw-bold fs-4">
                    Lower Price tours
                  </h5>
                  <p className="card-text">
                    Plan your trip during the off-season. Stay in hostels. Look
                    for accommodation with free food. Explore off-beat places.
                    Book in advance for cheaper rates. Travel ...
                  </p>
                  <hr className="hr-style" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title text-uppercase text-success fw-bold fs-4">
                    all time support tours
                  </h5>
                  <p className="card-text">
                    Tiny House People has 44944 members. This is a group for
                    people researching and/or building tiny houses, people who
                    are just interested in the concept..
                  </p>
                  <hr className="hr-style" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title text-uppercase text-success fw-bold fs-4">
                    Any country tours
                  </h5>
                  <p className="card-text">
                    Tiny House People has 44944 members. This is a group for
                    people researching and/or building tiny houses, people who
                    are just interested in the concept..
                  </p>
                  <hr className="hr-style" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 text-center border-0">
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title text-uppercase text-success fw-bold fs-4">
                    all time open some offer
                  </h5>
                  <p className="card-text">
                    Tiny House People has 44944 members. This is a group for
                    people researching and/or building tiny houses, people who
                    are just interested in the concept..
                  </p>
                  <hr className="hr-style" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-gap">
          <div className="bg-light">
            <hr className="w-25 mx-auto bg-info h-5  border-5"></hr>
            <h1 className="text-center">Bangladesh Tour</h1>
            <hr className="w-25  mx-auto bg-info border-3"></hr>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {dataLoadTime ? (
                <div
                  className="spinner-border text-success mx-auto"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                servicesAll.map((services) => (
                  <ServiceTours
                    key={services._id}
                    services={services}
                  ></ServiceTours>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
