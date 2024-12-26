import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import "./Header.css";
const Header = () => {
  const logo = `https://i.ibb.co/Zg5Z5fT/dream.png`;

  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3  bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase d-flex align-items-center  ms-auto mb-2 mb-lg-0 middle-part ">
            <li className="nav-item">
              <Link className="nav-link nav-text-color active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link nav-text-color " to="/myoder">
                My Order
              </Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/addservices">
                  Add service and register list
                </Link>
              </li> */}
            {user.email && (
              <li className="nav-item">
                <Link className="nav-link nav-text-color " to="/addservices">
                  Admin
                </Link>
              </li>
            )}

            {user.email ? (
              <li className="nav-item">
                <div className="nav-link m-0 d-md-flex text-center">
                  <div class="d-flex mb-2">
                    <div class="dropdown me-1">
                      <img
                        src={user.photoURL}
                        type="button"
                        alt=""
                        class="btn p-0 me-md-5 dropdown-toggle rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                      />

                      <div
                        class="dropdown-menu position-absolute  shadow-lg  border-0 rounded-3"
                        aria-labelledby="dropdownMenuOffset"
                        style={{
                          width: "210px",
                        }}
                      >
                        <div className="text-center  ">
                          <img
                            src={user.photoURL}
                            alt=""
                            srcset=""
                            class="rounded-circle"
                          />
                          <p className="fw-bolder  mt-3">{user.displayName}</p>
                          <button className="btn btn-success rounded-pill">
                            View Profile
                          </button>
                          <hr />

                          {/* all item list btn */}
                          <div class="list-group text-start ">
                            <button
                              type="button"
                              class="list-group-item list-group-item-action border-0"
                              aria-current="true"
                            >
                              <i class="fas fa-book"> Student Details</i>
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action border-0"
                            >
                              <i class="fas fa-book"> Student Details</i>
                            </button>
                            <button
                              onClick={logOut}
                              class="list-group-item list-group-item-action border-0"
                            >
                              <i className="fas fa-sign-out-alt ">LogOut</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <button className="btn btn-sm btn-success">
                    <i className="fas fa-sign-in-alt ms-2"> Login</i>
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
