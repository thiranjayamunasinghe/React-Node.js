import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          // console.log(localStorage.getItem("isAuth"))
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
