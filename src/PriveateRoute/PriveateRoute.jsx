import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../context/useAuth";

const PriveateRoute = ({ children, ...rest }) => {
  const { user, loadData } = useAuth();
  if (loadData) {
    return (
      <div className="row mt-5">
        <div className="spinner-border text-success mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PriveateRoute;
