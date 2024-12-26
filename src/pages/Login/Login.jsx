import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./Login.css";

const Login = () => {
  const { googleWithlogin, setUser, setLoadData, setError } = useAuth();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleWithLoginHandler = () => {
    googleWithlogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(true);
      })
      .finally(() => {
        setLoadData(false);
      });
  };
  return (
    <div className="section-gap">
      <div className=" full-height d-flex justify-content-center align-items-center ">
        <div className="card p-md-5 bg-light">
          <div className=" card-body text-center">
            <h4 className="card-title p-3 fw-bolder">Login With</h4>
            <button
              onClick={googleWithLoginHandler}
              className="border-0 btn btn-success login-hover rounded-3 p-2 text-light"
            >
              <i className="fab fa-google me-2"></i>Continue with Google
            </button>
            <p className="card-text p-3">
              Don't have an account?{" "}
              <Link to="/singup">Crerate an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
