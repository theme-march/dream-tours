import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import OrderManage from "../OrderManage/OrderManage";
import ServiceAddw from "./Service/ServiceAddw";
import "./Addservices.css";
const Addservices = () => {
  function Child({ name }) {
    return (
      <div>
        {name === "servicesregisterlist" ? (
          <OrderManage></OrderManage>
        ) : (
          <ServiceAddw></ServiceAddw>
        )}
      </div>
    );
  }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <div className="add-service-section-gap">
      <div className="row">
        <div className="col-md-3 ">
          <div className="mx-3 side-bar rounded-3 shadow-lg ">
            <div className="ps-4 py-4">
              <div className="my-2">
                <NavLink
                  className=" text-decoration-none"
                  to="/addservices/?name=addservices"
                >
                  <i className="fas fa-plus me-2"></i>
                  Add New Service
                </NavLink>
              </div>
              <div className="my-2">
                <NavLink
                  className=" text-decoration-none "
                  to="/addservices/?name=servicesregisterlist"
                >
                  <i className="fab fa-google me-2"></i>Manage All Orders
                </NavLink>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="mx-3 h-full  rounded-3 mt-md-0 mt-5 shadow-lg">
            <div className="ps-5 py-4">
              <Child name={useQuery().get("name")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addservices;
